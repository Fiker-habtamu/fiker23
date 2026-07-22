import useReveal from "../hooks/useReveal";

export default function About({ targetAboutSectionRef }) {
  const { ref: revealRef, isVisible } = useReveal(0.3);
  return (
    <section
      id="about"
      className="about about-section"
      ref={targetAboutSectionRef}
    >
      <div className="container about-content">
        {/* Section Header */}
        <div className=" text-center">
          <h2 className="text-[41px] font-black">
            About{" "}
            <span className="text-[#149ddd] underline underline-offset-8">
              Me
            </span>
          </h2>
          <p className="text-2xl font-light">
            I don't just build websites. I build systems with purpose and
            aesthetics.
          </p>
        </div>

        {/* Two-column layout */}
        <div ref={revealRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}>
          {/* Left Column — Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Card 1 */}
            <div className="border bg-[#0a1728] border-white/10 rounded-xl p-8 text-center">
              <p className="text-2xl font-normal text-white! mb-3 text-left">
                Hi,I'M FIKER
                <br />{" "}
                <span className="text-[#149ddd]"> FULL-STACK DEVELOPER.</span>
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                I help businesses bring their ideas online through modern,
                scalable, and user-centered web applications. My focus is
                creating digital experiences that are both visually appealing
                and highly functional
              </p>
            </div>

            {/* Card 2 — darker green tint to match screenshot */}
            <div className="border rounded-xl text-[white]! p-8 text-center border-white/10 bg-[#0E5A80]">
              <p className="text-sm font-medium text-white mb-3">
                I started as a curiosity for technology and web development has
                grown into a passion for building modern digital experiences
                that help businesses grow and connect with their customers.
              </p>
              <p className="text-sm leading-relaxed">
                Today, I create responsive
                <span className="text-[#149ddd]">
                  {" "}
                  websites and web applications
                </span>
                , that combine clean design, seamless functionality, and great
                user experiences. My goal remains the same: to turn ideas into
                impactful digital solutions that deliver real value.
              </p>
            </div>
          </div>

          {/* Right Column — Achievements */}
          <div>
            <h3 className="text-3xl font-medium text-right">
              My <span className="text-[#149ddd]">Achievements</span>
            </h3>
            <p className="text-sm text-gray-400 text-right mb-5">
              Numbers that reflect my journey
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  num: "1+",
                  label: "Years of Experience",
                  sub: "Growing through continuous learning",
                },
                {
                  num: "10+",
                  label: "Projects Completed",
                  sub: "Turning ideas into digital solutions",
                },
                {
                  num: "5+",
                  label: "Technologies Mastered",
                  sub: "SBuilding with modern web tools",
                },
                {
                  num: "100%",
                  label: "Commitment to Quality",
                  sub: "Focused on clean and reliable solutions",
                },
              ].map(({ num, label, sub }) => (
                <div
                  key={label}
                  className="rounded-xl p-6 text-center h-28 flex flex-col justify-center items-center bg-[#1f314a]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-2xl font-semibold text-[#149ddd] mb-1">
                    {num}
                  </div>
                  <div className="text-sm font-medium text-white mb-1">
                    {label}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                className="px-5 py-2 text-sm rounded-md text-[#149ddd] border border-[#149ddd55]"
                style={{ backgroundColor: "rgba(20,157,221,0.1)" }}
              >
                {/* Explore Our Menu */}
              </button>
              <div className="btn-box mt-10">
                <a
                  href="mailto:danathabtamu@gmail.com?subject=Let's Connect"
                  className="btn-primary-custom"
                >
                  Let's Talk
                </a>
                <a
                  href="/src/assets/FikerHabtamuResumelast.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
