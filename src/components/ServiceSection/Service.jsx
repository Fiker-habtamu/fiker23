import { useEffect, useRef, useState } from "react";
import './Service.css'
import { NINE_SERVICES } from "../../data/dataSet";
import useReveal from "../../hooks/useReveal";

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
  const { ref: revealRef, isVisible } = useReveal(0.1);

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
          <div className={`srv-triad-display transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-x-10"
          }`} ref={revealRef}>
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
    </div>
  );
}