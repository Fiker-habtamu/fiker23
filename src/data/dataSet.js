// To handel projects section card
const PROJECT_LINKS = [
  {
    id: "real",
    label: "Real Projects",
    tag: "01",
    description: "Production-grade work shipped to actual users.",
    href: "/projects/real",
    image:
      "https://i.pinimg.com/736x/7d/af/6a/7daf6a89eb882864b9bc5cac9c3acf98.jpg",
    imageAlt: "Circuit board close-up",
  },
  {
    id: "clone",
    label: "Clone Projects",
    tag: "02",
    description: "Pixel-perfect rebuilds of apps to master architecture.",
    href: "/projects/clone",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Code editor on monitor",
  },
  {
    id: "practice",
    label: "Practice Projects",
    tag: "03",
    description: "Experiments and concept proofs built for learning.",
    href: "/projects/practice",
    image:
      "https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Programming code on screen",
  },
  {
    id: "all",
    label: "All Projects",
    tag: "04",
    description: "The complete archive — every build, every era.",
    href: "/projects/all",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2TjkxwbaN1UCuUezNQnlXNPRoNi-EZNjnZrgaSd6rg&s=10",
    imageAlt: "Developer workspace with multiple screens",
  },
];

// To handel each projects
const ALL_PROJECTS = [
  // ── REAL ──
  {
    id: 1,
    category: "real",
    title: "Bistro & Coffee Shop Digital Menu",
    description:
      " A highly visual web solution designed for the hospitality industry, transforming standard restaurant menus into an interactive online experience. Prioritizes user-centric navigation, crisp graphics, and aesthetic styling to align with modern brand identity.",
    image: "/src/assets/img/portfolio/cafe.png",
    stack: ["Basic front-end: HTML,CSS JavaScript", "React", "Tailwind"],
    github: "https://github.com/Fiker-habtamu/cafe",
    live: "https://fkr-cafe.netlify.app/",
  },
  {
    id: 2,
    category: "real",
    title: "Digital Professional Showcase",
    description:
      "A robust academic management tool utilizing complex 2D array implementations and structures for automated student grading and metrics.",
    image: "/src/assets/img/portfolio/portfolio.png",
    stack: [
      "Basic front-end: HTML,CSS JavaScript",
      "React",
      "Three js",
      "Tailwind",
    ],
    github: "https://github.com/Fiker-habtamu/fiker23",
    live: "https://cruise-steps-protal-webapp.netlify.app/",
  },
  {
    id: 3,
    category: "real",
    title: "Cruise Steps Portal",
    description:
      "A responsive academic landing page designed to streamline institutional communications. Features an integrated notice board for real-time announcements, structured scheduling tables, and accessible information architectures optimized for prospective parents and students.",
    image: "/src/assets/img/portfolio/cruise.png",
    stack: ["Basic front-end: HTML,CSS JavaScript"],
    github: "https://github.com/Fiker-habtamu/cruise-portal",
    live: "https://cruise-steps-protal-webapp.netlify.app/",
  },
  {
    id: 4,
    category: "real",
    title: "Evangadi Developer Q&A Forum",
    description:
      "A full-stack, secure discussion platform engineered with React, Node.js, Express, and SQL. Implements strict JWT user authentication to restrict forum access, enabling verified users to post technical questions, browse answers, and share insights within a relational database architecture.",
    image: "/src/assets/img/portfolio/Forum.jpg",
    stack: ["React", "Node", "Express", "Sql"],
    github: "https://github.com/Fiker-habtamu/Evangadi-forum-client",
    live: "https://evangadi-forum-fiker.netlify.app/",
  },
  // ── CLONE ──

  {
    id: 5,
    category: "clone",
    title: "Apple Homepage Responsive Replica",
    description:
      "A front-end development project built to master advanced CSS layouts, semantic HTML architectures, and modern UI structures. Replicates Apple's signature sleek aesthetic with optimized media queries for flawless device responsiveness and high-resolution asset delivery.",
    image: "/src/assets/img/portfolio/Apple.jpg",
    stack: ["React", "Api", "Tailwind CSS", "REACT STATE"],
    github: "https://github.com/Fiker-habtamu/Apple-clone",
    live: "https://fkr-iphone.vercel.app/",
  },
  {
    id: 6,
    category: "clone",
    title: "E-Commerce Platform & Checkout Clone",
    description:
      "A full-stack replica of a major e-commerce marketplace featuring comprehensive user shopping experiences. Integrated a dynamic product catalog, fully functional persistent shopping cart calculations, secure payment simulations, and dedicated user order history archives.",
    image: "/src/assets/img/portfolio/Amazon.jpg",
    stack: ["React ", "Node.js", "Express", "Firebase / Stripe API"],
    github: "https://github.com/Fiker-habtamu/Amazon-front-end",
    live: "https://fkr-ecommerce-showcase.netlify.app/",
  },
   {
    id: 7,
    category: "clone",
    title: "Netflix Stream Interface & Movie Database",
    description:
      "A dynamic movie discovery platform replicating the premium Netflix streaming interface. Integrates asynchronous REST API calls to fetch live media assets, structures categorised horizontal scroll rows, and implements interactive embedded video trailer playback functionality.",
    image:
      "/src/assets/img/portfolio/Netflex.jpg",
    stack: ["React ", "TMDB API", "Axios", "React-Youtube"],
    github: "https://github.com/Fiker-habtamu/Netflix-clone",
    live: "https://fiker-netflex-1.netlify.app/",
  },
  // ── PRACTICE ──
 {
    id: 8,
    category: "practice",
    title: "Task Planner & Dynamic To-Do App",
    description:
      "A lightweight frontend productivity web application built to practice client-side state manipulation. Focuses on intuitive user interactions, dynamic DOM rendering, multi-list creation parameters, and custom categorization structures without database overhead.",
    image:
      "/src/assets/img/portfolio/todolist.png",
    stack: ["Tailwind ", "JavaScript (ES6+)", "Responsive"],
    github: "https://github.com/Fiker-habtamu/To-do-list",
    live: "https://fkr-to-do-list.netlify.app/",
  },
   {
    id: 9,
    category: "practice",
    title: "Hyperlocal Geolocation Weather Application",
    description:
      "A privacy-focused, zero-input weather dashboard that uses the native browser Geolocation API to automatically fetch real-time atmospheric conditions. Connects coordinate payloads to a third-party weather API, instantaneously serving local temperature metrics, humidity indexes, and local environmental data without manual search bars.",
    image:
      "/src/assets/img/portfolio/weather.png",
    stack: ["React ","Tailwind ", "Browser Geolocation API ", "OpenWeather API"],
    github: "https://github.com/Fiker-habtamu/weather_web_app",
    live: "https://fkr-weather-app.netlify.app/",
  },
    {
    id: 10,
    category: "practice",
    title: "Responsive Neomorphic Digital Calculator",
    description:
      "A sleek, mobile-first calculation interface focusing on high-fidelity visual styling, responsive grid structures, and interactive press states. Optimizes mathematical layouts across various device sizes while utilizing standard keyboard event listener arrays for desktop browsing",
    image:
      "/src/assets/img/portfolio/calculator.png",
    stack: ["Tailwind ", "JavaScript (ES6)", "Semantic UI"],
    github: "https://github.com/Fiker-habtamu/my-calculator",
    live: "https://fkr-calculator.netlify.app/",
  },
      {
    id: 11,
    category: "practice",
    title: "3D Rotational Vanilla JS Image Gallery",
    description:
      "A high-performance image showcase built entirely without external frameworks to master direct DOM manipulation. Utilizes advanced CSS 3D transforms, perspective styling rules, and JavaScript interval matrices to create an autonomous 360-degree carousel animation loop.",
    image:
      "/src/assets/img/portfolio/Fkrimg.png",
    stack: ["CSS 3D Transforms ", "JavaScript (ES6)", "Semantic UI"],
    github: "https://github.com/Fiker-habtamu/CodeAlpha_IMAGE_GALLERY",
    live: "https://fkrimg.netlify.app/",
  },
        {
    id: 12,
    category: "practice",
    title: "Interactive Profile Showcase Card",
    description:
      "A polished UI component project focusing on crisp typography layouts, container clipping metrics, and complex micro-interactions. Features smooth hover-state scaling, isolated transition keyframes, and absolute positioning layers to deliver a modern, resume-style social presentation card.",
    image:
      "/src/assets/img/portfolio/profilecard.png",
    stack: ["HTML5 ", "Flexbox Layouts", "Tailwind CSS"],
    github: "https://github.com/Fiker-habtamu/Tailwind_profile_card",
    live: "https://fkr-profilecard-tailwind.netlify.app/",
  },
];
const CATEGORY_META = {
  real: {
    label: "Real Projects",
    description:
      "Production-grade work shipped to actual users — from SaaS platforms to complex C++ systems.",
    tag: "LIVE & DEPLOYED",
  },
  clone: {
    label: "Clone Projects",
    description:
      "Pixel-perfect rebuilds of popular apps, built to deeply understand architecture and design decisions.",
    tag: "STUDY & REBUILD",
  },
  practice: {
    label: "Practice Projects",
    description:
      "Experiments, concept proofs, and algorithm visualizations — where I try new tech without constraints.",
    tag: "EXPLORE & LEARN",
  },
  all: {
    label: "All Projects",
    description:
      "The complete archive — every build across every category, sorted by most recent.",
    tag: "FULL ARCHIVE",
  },
};
const CATEGORY_BADGE = {
  real: { bg: "rgba(20,157,221,0.15)", color: "#149DDD", label: "Real" },
  clone: { bg: "rgba(100,220,160,0.12)", color: "#64DCA0", label: "Clone" },
  practice: {
    bg: "rgba(221,160,20,0.13)",
    color: "#DDA014",
    label: "Practice",
  },
};

// skill bar
const skillsLeft = [
  { label: "HTML", icon: "fab fa-html5" },
  { label: "CSS", icon: "fab fa-css3-alt" },
  { label: "JavaScript", icon: "fab fa-js" },
  { label: "API Integration", icon: null },
  { label: "MySQL & MongoDB", icon: null },
];
const skillsRight = [
  { label: "Bootstrap", icon: "fab fa-bootstrap" },
  { label: "React", icon: "fab fa-react" },
  { label: "UX/UI Design", icon: null },
  { label: "Node.js & Express.js", icon: "fab fa-node" },
  { label: "Teamwork", icon: null },
];

export { PROJECT_LINKS, ALL_PROJECTS, CATEGORY_META, CATEGORY_BADGE,skillsLeft,skillsRight };
