import { useEffect, useRef, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import * as THREE from "three";
import './EachProjects.css'
// ─────────────────────────────────────────────
//  PROJECT DATA
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
//  CATEGORY META
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
//  CATEGORY BADGE COLORS
// ─────────────────────────────────────────────
const CATEGORY_BADGE = {
  real: { bg: "rgba(20,157,221,0.15)", color: "#149DDD", label: "Real" },
  clone: { bg: "rgba(100,220,160,0.12)", color: "#64DCA0", label: "Clone" },
  practice: { bg: "rgba(221,160,20,0.13)", color: "#DDA014", label: "Practice" },
};

// ─────────────────────────────────────────────
//  ICONS
// ─────────────────────────────────────────────
function IconGitHub() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ─────────────────────────────────────────────
//  PROJECT CARD
// ─────────────────────────────────────────────
function ProjectCard({ project, showBadge }) {
  const [hovered, setHovered] = useState(false);
  const badge = CATEGORY_BADGE[project.category];

  return (
    <div
      className={`pp-card${hovered ? " pp-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pp-card-img-wrap">
        <div
          className="pp-card-img"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="pp-card-img-overlay" />
        {showBadge && badge && (
          <span
            className="pp-category-badge"
            style={{ background: badge.bg, color: badge.color, borderColor: badge.color }}
          >
            {badge.label}
          </span>
        )}
      </div>

      <div className="pp-card-body">
        <h3 className="pp-card-title">{project.title}</h3>
        <p className="pp-card-desc">{project.description}</p>
        
        <div className="pp-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="pp-stack-tag">{tech}</span>
          ))}
        </div>

        <div className="pp-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="pp-link-btn pp-link-btn--github" onClick={(e) => e.stopPropagation()}>
            <IconGitHub />
            <span>GitHub</span>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="pp-link-btn pp-link-btn--live" onClick={(e) => e.stopPropagation()}>
            <IconExternal />
            <span>Live</span>
          </a>
        </div>
      </div>

      <div className="pp-corner pp-corner--tl" />
      <div className="pp-corner pp-corner--br" />
      <div className="pp-glow-line" />
    </div>
  );
}

// ─────────────────────────────────────────────
//  MAIN PAGE COMPONENT
// ─────────────────────────────────────────────
export default function EachProjects() {
  const { category = "all" } = useParams();
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const meta = CATEGORY_META[category] || CATEGORY_META.all;

  const projects = useMemo(() => {
    if (category === "all") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => p.category === category);
  }, [category]);

  // ── Three.js Background ──
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    const count = 1400;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const col = new Float32Array(count * 3);

    const c1 = new THREE.Color("#149DDD"), c2 = new THREE.Color("#081724"), c3 = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - .5) * 200;
      pos[i * 3 + 1] = (Math.random() - .5) * 120;
      pos[i * 3 + 2] = (Math.random() - .5) * 80;
      sz[i] = Math.random() * 1.6 + 0.3;
      const r = Math.random(), c = r < .5 ? c1 : r < .8 ? c2 : c3;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sz, 1));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() } },
      vertexShader: `
        attribute float size; attribute vec3 color; varying vec3 vColor;
        uniform float uTime; uniform vec2 uMouse;
        void main(){
          vColor=color; vec3 p=position;
          p.y+=sin(uTime*.28+position.x*.05)*.8;
          p.x+=cos(uTime*.18+position.y*.04)*.5;
          vec2 d=(modelMatrix*vec4(p,1.)).xy-uMouse*vec2(100.,60.);
          float dl=length(d);
          if(dl<20.){float s=(20.-dl)/20.;p.xy+=normalize(d)*s*6.;}
          vec4 mv=modelViewMatrix*vec4(p,1.);
          gl_PointSize=size*(170./-mv.z);
          gl_Position=projectionMatrix*mv;
        }`,
      fragmentShader: `
        varying vec3 vColor;
        void main(){
          float d=distance(gl_PointCoord,vec2(.5));
          if(d>.5)discard;
          float a=1.-smoothstep(.1,.5,d);
          float g=1.-smoothstep(0.,.28,d);
          vec3 fc=mix(vColor*.5,vColor+vec3(.3,.5,.6)*g,g);
          gl_FragColor=vec4(fc,a*.85);
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
    });

    const pts = new THREE.Points(geo, mat);
    scene.add(pts);

    // Grid System
    const lp = [];
    for (let i = 0; i <= 12; i++) {
      const x = (i / 12) * 180 - 90; lp.push(x, -50, -30, x, -50, 30);
      const z = (i / 12) * 60 - 30; lp.push(-90, -50, z, 90, -50, z);
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lp), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: "#149DDD", transparent: true, opacity: .05 });
    scene.add(new THREE.LineSegments(lg, lineMat));

    // Event Handlers
    const onResize = () => {
      if (!canvasRef.current) return;
      const w = canvasRef.current.clientWidth, h = canvasRef.current.clientHeight;
      camera.aspect = w / h; 
      camera.updateProjectionMatrix(); 
      renderer.setSize(w, h);
    };

    const onMouse = (e) => {
      if (!canvasRef.current) return;
      const r = canvasRef.current.getBoundingClientRect();
      mouseRef.current = { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -((e.clientY - r.top) / r.height) * 2 + 1 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    const clock = new THREE.Clock();
    
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      mat.uniforms.uTime.value = t;
      mat.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      pts.rotation.y = t * .012; 
      pts.rotation.x = Math.sin(t * .08) * .04;
      camera.position.x = Math.sin(t * .07) * 3.5;
      camera.position.y = Math.cos(t * .055) * 1.8;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    animate();

    // Prevent Memory Leaks on Unmount
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      
      // Dispose Geometries and Materials
      geo.dispose();
      mat.dispose();
      lg.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pp-page">
      <canvas ref={canvasRef} className="pp-canvas" />
      <div className="pp-canvas-overlay" />

      <div className="pp-scroll">
        <header className="pp-header">
          {/* Changed <a> to React Router <Link> for correct SPA routing */}
          <Link to="/" className="pp-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#149DDD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="pp-header-tag">{meta.tag}</div>
          <h1 className="pp-header-title">
            {meta.label.split(" ")[0]}{" "}
            <span className="pp-accent">{meta.label.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="pp-header-desc">{meta.description}</p>
          
          <div className="pp-header-count">
            <span className="pp-count-num">{projects.length}</span>
            <span className="pp-count-label">
              {projects.length === 1 ? "project" : "projects"}
            </span>
          </div>
        </header>

        {projects.length > 0 ? (
          <main className="pp-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showBadge={category === "all"}
              />
            ))}
          </main>
        ) : (
          <div className="pp-empty">
            <span className="pp-empty-icon">⬡</span>
            <p className="pp-empty-text">No projects here yet.</p>
            <p className="pp-empty-sub">Check back soon.</p>
          </div>
        )}

        <footer className="pp-footer">
          <div className="pp-footer-line" />
          <span className="pp-footer-text">END OF ARCHIVE</span>
          <div className="pp-footer-line pp-footer-line--rev" />
        </footer>
      </div>
    </div>
  );
}