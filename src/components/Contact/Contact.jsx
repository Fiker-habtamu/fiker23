import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import useReveal from "../../hooks/useReveal";


export default function Contact({ targetContactSectionRef }) {
  const web3Api = import.meta.env.WEB3FORM;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const { ref: revealRef, isVisible } = useReveal(0.3);
  const [result, setResult] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Optional: disconnect after animating in once to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission analytics or API integration here
    setResult("Sending....");
    const formData = new FormData(event.target);

    // INSERT YOUR ACCESS KEY HERE
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      ref={(node) => {
        if (targetContactSectionRef) targetContactSectionRef.current = node;
        sectionRef.current = node;
      }}
      className="cnt-section"
    >
      <div className="cnt-backdrop-text">CONTACT</div>

      <div className="cnt-glow-ambient" />

      <div
        className={`cnt-grid-container ${isIntersecting ? "cnt-visible" : ""}`}
      >
        {/* LEFT COLUMN: TEXT & SOCIAL LINKS */}
        <div className="cnt-left-pane">
          <div className="cnt-badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#149ddd"
              strokeWidth="2.5"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Contact</span>
          </div>

          <h2 className="cnt-title">Get in touch</h2>
          <p className="cnt-subtitle">
            Have questions or ready to transform your ideas into
            production-ready software? Let's connect.
          </p>

          <div
            className={`cnt-info-stack transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-x-10"
            }`}
            ref={revealRef}
          >
            {/* Email Card */}
            <a href="danathabtamu@gmail.com" className="cnt-info-card">
              <div className="cnt-card-icon-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="cnt-card-details">
                <span className="cnt-card-label">Email Me</span>
                <span className="cnt-card-value">Danathabtamu@gmail.com</span>
              </div>
              <div className="cnt-card-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>
            </a>

            {/* Call Card */}
            <a href="tel:+251941188384" className="cnt-info-card">
              <div className="cnt-card-icon-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="cnt-card-details">
                <span className="cnt-card-label">Call us</span>
                <span className="cnt-card-value">+(251) 941-188384</span>
              </div>
              <div className="cnt-card-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Fiker-habtamu"
              target="_blank"
              rel="noopener noreferrer"
              className="cnt-info-card"
            >
              <div className="cnt-card-icon-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className="cnt-card-details">
                <span className="cnt-card-label">GitHub Profile</span>
                <span className="cnt-card-value">github.com/Fiker-Habtamu</span>
              </div>
              <div className="cnt-card-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/fiker-habtamu/"
              target="_blank"
              rel="noopener noreferrer"
              className="cnt-info-card"
            >
              <div className="cnt-card-icon-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="cnt-card-details">
                <span className="cnt-card-label">LinkedIn</span>
                <span className="cnt-card-value">
                  linkedin.com/in/fiker-habtamu
                </span>
              </div>
              <div className="cnt-card-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-END DIGITAL CONTACT FORM */}
        
        <div className={`cnt-right-pane transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}  ref={revealRef}>
          <form onSubmit={handleSubmit} className="cnt-form-box">
            <div className="cnt-input-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                className="cnt-form-input"
              />
              <label htmlFor="name" className="cnt-form-label">
                Name
              </label>
            </div>

            <div className="cnt-input-group">
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder=" "
                className="cnt-form-input"
              />
              <label htmlFor="email" className="cnt-form-label">
                Email
              </label>
            </div>

            <div className="cnt-input-group">
              <textarea
                name="message"
                id="message"
                required
                rows="6"
                placeholder=" "
                className="cnt-form-input cnt-form-textarea"
              ></textarea>
              <label htmlFor="message" className="cnt-form-label">
                Message
              </label>
            </div>

            <button type="submit" className="cnt-submit-btn">
              Submit
            </button>
            {result && (
              <p className="text-center text-xs text-green-400 pt-2 font-medium animate-fade-in">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
