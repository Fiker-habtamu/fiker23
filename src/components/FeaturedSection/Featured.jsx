import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import './style.css'

const PROJECT_LINKS = [
  {
    id: "real",
    label: "Real Projects",
    tag: "01",
    description: "Production-grade work shipped to actual users.",
    href: "/projects/real",
    // Unsplash – deployed app / server room feel
    image: "https://i.pinimg.com/736x/7d/af/6a/7daf6a89eb882864b9bc5cac9c3acf98.jpg",
    imageAlt: "Circuit board close-up",
  },
  {
    id: "clone",
    label: "Clone Projects",
    tag: "02",
    description: "Pixel-perfect rebuilds of apps to master architecture.",
    href: "/projects/clone",
    // Unsplash – UI duplication / mirroring
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    imageAlt: "Code editor on monitor",
  },
  {
    id: "practice",
    label: "Practice Projects",
    tag: "03",
    description: "Experiments and concept proofs built for learning.",
    href: "/projects/practice",
    // Unsplash – experiment / lab
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    imageAlt: "Programming code on screen",
  },
  {
    id: "all",
    label: "All Projects",
    tag: "04",
    description: "The complete archive — every build, every era.",
    href: "/projects/all",
    // Unsplash – archive / library feel
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    imageAlt: "Developer workspace with multiple screens",
  },
];

export default function Featured() {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    rendererRef.current = renderer;

    const count = 1800;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color("#149DDD");
    const color2 = new THREE.Color("#081724");
    const color3 = new THREE.Color("#ffffff");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      sizes[i] = Math.random() * 1.8 + 0.3;
      const r = Math.random();
      const c = r < 0.5 ? color1 : r < 0.8 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float uTime;
        uniform vec2 uMouse;
        void main() {
          vColor = color;
          vec3 pos = position;
          pos.y += sin(uTime * 0.3 + position.x * 0.05) * 0.8;
          pos.x += cos(uTime * 0.2 + position.y * 0.04) * 0.5;
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vec2 diff = worldPos.xy - uMouse * vec2(100.0, 60.0);
          float dist = length(diff);
          if (dist < 20.0) {
            float strength = (20.0 - dist) / 20.0;
            pos.xy += normalize(diff) * strength * 6.0;
          }
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (180.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.1, 0.5, d);
          float glow = 1.0 - smoothstep(0.0, 0.3, d);
          vec3 finalColor = mix(vColor * 0.5, vColor + vec3(0.3, 0.5, 0.6) * glow, glow);
          gl_FragColor = vec4(finalColor, alpha * 0.85);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const gridGeom = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i <= 12; i++) {
      const x = (i / 12) * 180 - 90;
      linePositions.push(x, -50, -30, x, -50, 30);
      const z = (i / 12) * 60 - 30;
      linePositions.push(-90, -50, z, 90, -50, z);
    }
    gridGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    scene.add(new THREE.LineSegments(gridGeom, new THREE.LineBasicMaterial({ color: "#149DDD", transparent: true, opacity: 0.06 })));

    const handleResize = () => {
      if (!canvasRef.current) return;
      const w = canvasRef.current.clientWidth;
      const h = canvasRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    const handleMouse = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouse);

    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      material.uniforms.uTime.value = t;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
      particles.rotation.y = t * 0.015;
      particles.rotation.x = Math.sin(t * 0.1) * 0.05;
      camera.position.x = Math.sin(t * 0.08) * 4;
      camera.position.y = Math.cos(t * 0.06) * 2;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="fp-section">
      <canvas ref={canvasRef} className="fp-canvas" />
      <div className="fp-overlay" />

      <div className="fp-content">
        {/* Header */}
        <div className="fp-header">
          <div className="fp-tagline">
            <span className="fp-dash">—</span>
            <span className="fp-tagline-text">PORTFOLIO</span>
          </div>
          <h2 className="fp-title">
            Featured <span className="fp-accent">Projects</span>
          </h2>
          <p className="fp-subtitle">
            A curated collection of work spanning production deployments,
            architectural studies, and relentless experimentation.
          </p>
        </div>

        {/* Cards */}
        <div className="fp-grid">
          {PROJECT_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`fp-card${activeCard === link.id ? " fp-card--active" : ""}`}
              onMouseEnter={() => setActiveCard(link.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background image layer */}
              <div
                className="fp-card-img"
                style={{ backgroundImage: `url(${link.image})` }}
                role="img"
                aria-label={link.imageAlt}
              />
              {/* Dark gradient scrim so text stays readable */}
              <div className="fp-card-scrim" />
              {/* Scan lines */}
              <div className="fp-scanlines" />

              {/* Card content */}
              <div className="fp-card-body">
                <div className="fp-card-top">
                  <span className="fp-card-tag">{link.tag}</span>
                  <span className="fp-card-dot">●</span>
                </div>
                <h3 className="fp-card-label">{link.label}</h3>
                <p className="fp-card-desc">{link.description}</p>
                <div className="fp-card-arrow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="#149DDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative edges */}
              <div className="fp-glow-line" />
              <div className="fp-corner fp-corner--tl" />
              <div className="fp-corner fp-corner--br" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="fp-footer">
          <div className="fp-footer-line" />
          <span className="fp-footer-text">EXPLORE THE FULL ARCHIVE</span>
          <div className="fp-footer-line fp-footer-line--rev" />
        </div>
      </div>

      {/* ─── All styles in one block ─── */}
      {/* <style>{`
       
      `}</style> */}
    </section>
  );
}