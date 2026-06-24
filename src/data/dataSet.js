// To handel projects section card 
const PROJECT_LINKS = [
  {
    id: "real",
    label: "Real Projects",
    tag: "01",
    description: "Production-grade work shipped to actual users.",
    href: "/projects/real",
    image: "https://i.pinimg.com/736x/7d/af/6a/7daf6a89eb882864b9bc5cac9c3acf98.jpg",
    imageAlt: "Circuit board close-up",
  },
  {
    id: "clone",
    label: "Clone Projects",
    tag: "02",
    description: "Pixel-perfect rebuilds of apps to master architecture.",
    href: "/projects/clone",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Code editor on monitor",
  },
  {
    id: "practice",
    label: "Practice Projects",
    tag: "03",
    description: "Experiments and concept proofs built for learning.",
    href: "/projects/practice",
    image: "https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Programming code on screen",
  },
  {
    id: "all",
    label: "All Projects",
    tag: "04",
    description: "The complete archive — every build, every era.",
    href: "/projects/all",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2TjkxwbaN1UCuUezNQnlXNPRoNi-EZNjnZrgaSd6rg&s=10",
    imageAlt: "Developer workspace with multiple screens",
  },
];

// To handel each projects 
const ALL_PROJECTS = [
  // ── REAL ──
  {
    id: 1,
    category: "real",
    title: "AI Crop Pricing Analyzer",
    description: "An AI-based platform analyzing regional market factors to resolve unfair crop pricing and assist local agricultural economies in Ethiopia.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
    stack: ["Python", "React", "Machine Learning", "Node.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    category: "real",
    title: "Exam Result Processing System",
    description: "A robust academic management tool utilizing complex 2D array implementations and structures for automated student grading and metrics.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    stack: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    category: "real",
    title: "Inventory Management System",
    description: "High-performance store inventory manager using custom C++ structures for real-time stock tracking and secure file I/O operations.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    stack: ["C++", "MVC Pattern", "CLI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  // ── CLONE ──
  {
    id: 4,
    category: "clone",
    title: "Notion Editor Clone",
    description: "Block-based document editor cloned from Notion. Supports nested blocks, drag-and-drop reordering, slash commands, and rich text.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&q=80",
    stack: ["React", "TypeScript", "DnD Kit", "Slate.js"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 5,
    category: "clone",
    title: "Twitter / X Clone",
    description: "Full-stack social media clone with tweets, replies, likes, follows, and an algorithmic feed — built to study real-world data modeling.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Zustand"],
    github: "https://github.com",
    live: "https://example.com",
  },
  // ── PRACTICE ──
  {
    id: 6,
    category: "practice",
    title: "Sorting Algorithm Visualizer",
    description: "Interactive visualizer for complex sorting algorithms and linked list implementations to demonstrate structural time complexity.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    stack: ["JavaScript", "React Hooks", "CSS Animations"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 7,
    category: "practice",
    title: "Hardware Optimizer Script",
    description: "Utility scripts designed to optimize integrated graphics allocation and memory management for low-spec 8GB RAM gaming environments.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
    stack: ["Python", "Shell", "OS Internals"],
    github: "https://github.com",
    live: "https://example.com",
  },
];
const CATEGORY_META = {
  real: {
    label: "Real Projects",
    description: "Production-grade work shipped to actual users — from SaaS platforms to complex C++ systems.",
    tag: "LIVE & DEPLOYED",
  },
  clone: {
    label: "Clone Projects",
    description: "Pixel-perfect rebuilds of popular apps, built to deeply understand architecture and design decisions.",
    tag: "STUDY & REBUILD",
  },
  practice: {
    label: "Practice Projects",
    description: "Experiments, concept proofs, and algorithm visualizations — where I try new tech without constraints.",
    tag: "EXPLORE & LEARN",
  },
  all: {
    label: "All Projects",
    description: "The complete archive — every build across every category, sorted by most recent.",
    tag: "FULL ARCHIVE",
  },
};
const CATEGORY_BADGE = {
  real: { bg: "rgba(20,157,221,0.15)", color: "#149DDD", label: "Real" },
  clone: { bg: "rgba(100,220,160,0.12)", color: "#64DCA0", label: "Clone" },
  practice: { bg: "rgba(221,160,20,0.13)", color: "#DDA014", label: "Practice" },
};

export {PROJECT_LINKS,ALL_PROJECTS,CATEGORY_META,CATEGORY_BADGE}