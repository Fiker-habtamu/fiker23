import { useEffect, useRef, useState } from "react";
import './Service.css'
import { NINE_SERVICES } from "../../data/dataSet";

// const NINE_SERVICES = [
//   // --- SET 1 ---
//   { id: "01", title: "Web Development", desc: "Crafting highly responsive, pixel-perfect frontend architectures using modern web standards." },
//   { id: "02", title: "Full-Stack Applications", desc: "Engineering scalable web apps from secure database design to intuitive user interfaces." },
//   { id: "03", title: "UI/UX Implementation", desc: "Translating sophisticated designer prototypes into living interactive web experiences." },
  
//   // --- SET 2 ---
//   { id: "04", title: "API Integration & Design", desc: "Building clean, optimized RESTful or GraphQL communication pipelines and secure web services." },
//   { id: "05", title: "Performance Optimization", desc: "Auditing application load lifecycles to reduce bundle sizes and achieve instant render speeds." },
//   { id: "06", title: "Database Architecture", desc: "Designing high-throughput relational and non-relational storage layers with optimized query patterns." },
  
//   // --- SET 3 ---
//   { id: "07", title: "Cloud Deployment & DevOps", desc: "Automating application workflows, setting up CI/CD pipelines, and launching secure cloud instances." },
//   { id: "08", title: "E-Commerce Architecture", desc: "Constructing robust shopping engines with secure payment gateways, cart states, and stock tracking." },
//   { id: "09", title: "Custom Software Solutions", desc: "Developing tailored algorithmic scripts and custom automation tools built for specific business requirements." }
// ];

// Aesthetic atmospheric background transitions for each set
const BACKGROUND_SETS = [
  "#040B14", // Set 1: Your original iconic deep dark blue
  "#061325", // Set 2: A noticeably richer, deep ocean navy 
  "#0B0816"  // Set 3: A distinct, sophisticated midnight twilight purple
];

// Shifting coordinates for the background ambient light sphere
const GLOW_POSITIONS = [
  { top: "20%", left: "20%" },
  { top: "60%", left: "80%" },
  { top: "70%", left: "15%" }
];

export default function Services({ targetServiceSectionRef }) {
  const scrollTrackRef = useRef(null);
  const [activeSet, setActiveSet] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTrackRef.current) return;

      const rect = scrollTrackRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      const scrolledIntoSection = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / totalHeight));

      if (progress < 0.33) {
        setActiveSet(0);
      } else if (progress >= 0.33 && progress < 0.66) {
        setActiveSet(1);
      } else {
        setActiveSet(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentServices = NINE_SERVICES.slice(activeSet * 3, (activeSet + 1) * 3);

  return (
    <div ref={scrollTrackRef} className="srv-track-height">
      <section 
        id="services" 
        ref={targetServiceSectionRef} 
        className="srv-sticky-window"
        style={{ backgroundColor: BACKGROUND_SETS[activeSet] }}
      >
        {/* Dynamic Glowing Sphere that moves and changes based on active set */}
        <div 
          className="srv-glow-sphere" 
          style={{ 
            top: GLOW_POSITIONS[activeSet].top, 
            left: GLOW_POSITIONS[activeSet].left 
          }}
        />
        <div className="srv-digital-grid" />

        <div className="srv-content-bound">
          <header className="srv-center-header">
            <h2 className="srv-main-title">
              My <span className="srv-blue-highlight">Core</span> Services
            </h2>
            <p className="srv-subtitle">Smart solutions Real results.</p>
          </header>

          {/* The Service Triad Array Wrapper */}
          <div className="srv-triad-display">
            {currentServices.map((srv) => (
              <div key={srv.id} className="srv-vector-node">
                <div className="srv-node-icon-wrapper">
                  <div className="srv-circuit-dot" />
                  <span className="srv-node-number">{srv.id}</span>
                </div>
                <h3 className="srv-node-title">{srv.title}</h3>
                <p className="srv-node-desc">{srv.desc}</p>
              </div>
            ))}
          </div>

          {/* Progress Indicator Dots */}
          <div className="srv-step-navigation">
            <span className={`srv-dot ${activeSet === 0 ? "active" : ""}`} />
            <span className={`srv-dot ${activeSet === 1 ? "active" : ""}`} />
            <span className={`srv-dot ${activeSet === 2 ? "active" : ""}`} />
          </div>
        </div>
      </section>

      <style>{`
      
      `}</style>
    </div>
  );
}