import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Dinesh Kumar S",
    title: "Software Developer | Java-Rooted, SQL-Backed, Django-Built",
    email: "dineshkumarselvaraj31@gmail.com",
    phone: "+91-87781-69902",
    location: "Tirunelveli, Tamil Nadu, India",
    zipCode: "627002",
    dateOfBirth: "2006-01-16",
    website: "dinesh8778.github.io",
    github: "github.com/Dinesh8778",
    linkedin: "linkedin.com/in/dinesh-kumar-s-it",
    instagram: "instagram.com/_itz_dk_72"
  },

  education: {
    college: "V.S.B Engineering College, Karur",
    degree: "B.Tech",
    field: "Information Technology",
    graduation: "2027",
    gpa: null
  },

  about: {
    bio: "I'm a curious problem-solver and tech enthusiast pursuing my B.Tech in Information Technology, with hands-on skills in Python, Java, HTML, CSS, and web development. My drive comes from turning ideas into efficient, scalable, and user-friendly web applications that make a real impact. I see technology not just as code, but as a bridge to smarter solutions. That's why I constantly explore new frameworks, tools, and trends—from web development stacks to AI-driven innovations—to stay ahead and keep improving.",
    quote: "Code is my tool, projects are my canvas, and innovation is my goal.",
    interests: ["Music", "Travel", "Movie", "Sports"],
    highlights: [
      "Always learning, always building",
      "Designing practical solutions that scale",
      "Learning fast and adapting to new challenges",
      "Delivering quality over complexity "
    ]
  },

  experience: [
    {
      "id": "exp-1",
      "company": "Infosys Springboard",
      "jobTitle": "Intern",
      "duration": "Feb 2025 - March 2025",
      "location": "Remote (Online)",
      "description": "Developed a Budget Tracker web application using Python and Django, allowing users to add income and expense transactions, organize them by category, and view a summary dashboard showing total income, total expenses, and current balance. Built using Django, SQLite, HTML, and CSS.",
      "technologies": ["Django", "SQLite", "HTML", "CSS", "Python"],
      "achievements": [
        "Created a fully functional web application from scratch",
        "Implemented transaction tracking and categorization",
        "Designed responsive dashboard with financial summaries"
      ]
    }
  ],

  certifications: [
    {
      "id": "cert-8",
      "name": "Infosys Internship",
      "issuer": "Infosys Springboard",
      "date": "Feb 2025 - March 2025",
      "achievement": "Internship",
      "verified": true,
      "link": "/certificates/Infosys Internship Certificate.pdf#toolbar=0"
    },
    {
      "id": "cert-1",
      "name": "Programming in Java",
      "issuer": "NPTEL (IIT Kharagpur)",
      "date": "May 2025",
      "achievement": "Elite + Silver Badge, 75%",
      "verified": true,
      "link": "/certificates/Programming In Java- NPTEL.pdf#toolbar=0"
    },
    {
      "id": "cert-2",
      "name": "Python Programming",
      "issuer": "HackerRank",
      "date": "January 2025",
      "achievement": "Certified",
      "verified": true,
      "link": "/certificates/Python HackerRank.png"
    },
    {
      "id": "cert-7",
      "name": "AWS Cloud Practitioner Essentials",
      "issuer": "AWS Skill Builder",
      "date": "July 2026",
      "achievement": "Certified",
      "verified": true,
      "link": "/certificates/AWS Cloud Practitioner Essentials.pdf#toolbar=0"
    },
    {
      "id": "cert-3",
      "name": "Python Foundation Certification",
      "issuer": "Infosys Springboard",
      "date": "August 2024",
      "achievement": "Certified",
      "verified": true,
      "link": "/certificates/Python Foundation Certification.pdf#toolbar=0"
    },
    {
      "id": "cert-4",
      "name": "Programming using Java",
      "issuer": "Infosys Springboard",
      "date": "July 2025",
      "achievement": "Certified",
      "verified": true,
      "link": "/certificates/Java infosys.pdf#toolbar=0"
    },
    {
      "id": "cert-5",
      "name": "Python Programming",
      "issuer": "Reliance Foundation Skilling Academy (Skill India)",
      "date": "July 2025",
      "achievement": "Certified",
      "verified": true,
      "link": "/certificates/python skill india relince.pdf#toolbar=0"
    },
    {
      "id": "cert-6",
      "name": "Introduction to Machine Learning",
      "issuer": "NPTEL",
      "date": "September 2025",
      "achievement": "54% Score",
      "verified": true,
      "link": "/certificates/Introduction to Machine Learning- NPTEL.pdf#toolbar=0"
    }
  ],

  skills: {
    "languages": [
      { "name": "Python", "icon": "🐍" },
      { "name": "Java", "icon": "☕" },
      { "name": "C#", "icon": "🔷" },
      { "name": "JavaScript", "icon": "🟨" }
    ],
    "frontend": [
      { "name": "HTML", "icon": "🏗️" },
      { "name": "CSS", "icon": "🎨" },
      { "name": "React", "icon": "⚛️", "learning": true },
      { "name": "Tailwind CSS", "icon": "💨", "learning": true }
    ],
    "backend": [
      { "name": "Django", "icon": "🎯" },
      { "name": "Node.js", "icon": "🟢" },
      { "name": "SQLite", "icon": "🗄️" },
      { "name": "MySQL", "icon": "🗄️" }
    ],
    "tools": [
      { "name": "Git", "icon": "🔀" },
      { "name": "GitHub", "icon": "🐙" },
      { "name": "VS Code", "icon": "💻" },
      { "name": "ChatGPT", "icon": "🤖" },
      { "name": "Claude", "icon": "🧠" },
      { "name": "Copilot", "icon": "✨" }
    ]
  },

  "projects": [
    {
      "id": "proj-1",
      "name": "Budget Tracker",
      "description": "A Django-based Budget Tracker web application that helps users record and manage their income and expenses efficiently. It provides an intuitive interface for tracking transactions, categorizing expenses, and monitoring overall financial health through a dashboard.",
      "longDescription": "Budget Tracker is a full-stack web application designed to simplify personal finance management. Built with Django backend and dynamic frontend, it allows users to seamlessly track income and expenses, organize transactions by custom categories, and gain real-time insights into their financial health through an interactive dashboard.",
      "technologies": ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      "github": "https://github.com/Dinesh8778/budget-tracker",
      "liveDemo": "https://dinesh8778.pythonanywhere.com/",
      "features": [
        "Transaction Tracking — Add and manage income and expense records",
        "Category Breakdown — Organize expenses by categories for better insights",
        "Dashboard Overview — View total income, total expenses, and current balance in one place",
        "Data Persistence — All transactions stored securely in SQLite database",
        "Responsive Design — Works seamlessly on desktop and mobile devices"
      ],
      "image": "/projects/budget-tracker.png",
      "featured": true,
      "status": "completed" as const
    },
    {
      "id": "finintel-ai",
      "name": "FinIntel AI - Autonomous Expense Tracker",
      "description": "A full-stack MERN financial management workspace with autonomous budget modeling, graphical dashboards, EMI amortization sliders, and an AI reasoning workspace for smarter money decisions.",
      "technologies": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
      "github": "https://github.com/Dinesh8778/expense-tracker-AI",
      "liveDemo": "https://expense-tracker-ai-black.vercel.app/",
      "features": [
        "Dashboard Overview - Graphical card-based dashboard summarizing income, expenses, and budgets",
        "EMI Amortization Sliders - Interactive sliders to model loan repayments and interest breakdowns",
        "AI Reasoning Workspace - Dedicated AI space for financial insights and reasoning over spending data",
        "Secure Auth - JWT-based authentication with httpOnly cookie sessions",
        "Health Check Engine - Live backend connectivity dashboard, with safe fallback if optional AI keys are missing",
        "Data Visualization - Recharts-powered graphs for income, expense, and budget trends"
      ],
      "featured": true,
      "status": "completed" as const
    },
    {
      "id": "proj-2",
      "name": "AcademiQ - AI Student Management System",
      "description": "A web-based platform that digitizes and automates academic operations for educational institutions, combining traditional student management with three cooperating AI subsystems — predictive analytics, a role-scoped conversational assistant, and automated anomaly detection.",
      "longDescription": "AcademiQ addresses the critical gap in educational management by centralizing disparate systems into one unified platform. Many colleges still rely on manual registers, spreadsheets, and disconnected tools to manage students, attendance, assignments, and marks. AcademiQ combines these processes into a single system and layers AI on top to surface insights—at-risk students, exam performance trends, unusual attendance patterns—without replacing human decision-making. Students are organized by class groups (Department + Year), allowing teachers to distribute assignments, mark attendance, and enter exam scores for an entire class at once, similar to Google Classroom.",
      "technologies": ["Python", "Django", "React", "PostgreSQL", "Machine Learning", "AI"],
      "github": "https://github.com/Dinesh8778/academiQ",
      "liveDemo": "https://college-ai-web.onrender.com/",
      "features": [
        "Student Management System - Centralized student database by department and year",
        "AI Predictive Analytics - Identify at-risk students before they fall behind",
        "Attendance Tracking - Automated anomaly detection for unusual patterns",
        "Assignment Management - Distribute and grade assignments at scale",
        "Conversational AI Assistant - Role-scoped chatbot for students and teachers",
        "Performance Analytics - Real-time insights into exam trends and performance",
        "Integrated Dashboard - Complete overview of all academic operations"
      ],
      "image": "/projects/academiQ.png",
      "featured": true,
      "status": "in-development" as const
    },
    {
      "id": "proj-3",
      "name": "Text to Speech Application",
      "description": "A Python-based desktop application using Tkinter that converts written text into natural-sounding speech output with customizable voice settings.",
      "technologies": ["Python", "Tkinter", "TTS"],
      "github": "https://github.com/Dinesh8778/texttospeech",
      "features": [
        "Real-time text to speech conversion",
        "Adjustable speech rate and volume",
        "Multiple voice options"
      ],
      "featured": false,
      "status": "completed" as const
    },
    {
      "id": "proj-4",
      "name": "To-Do App",
      "description": "A simple yet effective task management application built with Python and Tkinter, allowing users to create, manage, and track their daily tasks with ease.",
      "technologies": ["Python", "Tkinter"],
      "github": "https://github.com/Dinesh8778/to-do-app",
      "features": [
        "Create and manage tasks",
        "Mark tasks as complete",
        "Delete completed tasks",
        "Persistent data storage"
      ],
      "featured": false,
      "status": "completed" as const
    }
  ],

  "socialLinks": [
    {
      "platform": "GitHub",
      "url": "https://github.com/Dinesh8778",
      "icon": "github"
    },
    {
      "platform": "LinkedIn",
      "url": "https://www.linkedin.com/in/dinesh-kumar-s-it",
      "icon": "linkedin"
    },
    {
      "platform": "Instagram",
      "url": "https://www.instagram.com/_itz_dk_72",
      "icon": "instagram"
    }
  ]
};
