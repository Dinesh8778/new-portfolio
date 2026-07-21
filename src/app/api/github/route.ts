import { NextResponse } from "next/server";

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/users/Dinesh8778/repos?sort=updated&per_page=6", {
      headers,
      next: { revalidate: 3600 } // cache for one hour
    });

    if (!res.ok) {
      throw new Error(`GitHub API returned state ${res.status}`);
    }

    const data = await res.json();
    
    // Sort by stargazers_count desc
    const sortedData = Array.isArray(data) 
      ? data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      : [];

    const repos = sortedData.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description provided.",
      url: repo.html_url,
      language: repo.language || "TypeScript",
      stars: repo.stargazers_count,
      updated: repo.updated_at,
    }));

    return NextResponse.json({ repos });
  } catch (error: any) {
    console.error("Error fetching github repos:", error);
    // Return empty list and status ok to keep UI functional
    return NextResponse.json({ 
      repos: [],
      error: error.message || "Failed to fetch repositories"
    });
  }
}
