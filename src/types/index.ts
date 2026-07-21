export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  zipCode: string;
  dateOfBirth: string;
  website: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Education {
  college: string;
  degree: string;
  field: string;
  graduation: string;
  gpa: string | null;
}

export interface About {
  bio: string;
  quote: string;
  interests: string[];
  highlights: string[];
}

export interface Experience {
  id: string;
  company: string;
  jobTitle: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  achievement: string;
  verified?: boolean;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  learning?: boolean;
}

export interface Skills {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github: string;
  liveDemo?: string;
  features: string[];
  image?: string;
  featured: boolean;
  status: "completed" | "in-development";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  education: Education;
  about: About;
  experience: Experience[];
  certifications: Certification[];
  skills: Skills;
  projects: Project[];
  socialLinks: SocialLink[];
}
