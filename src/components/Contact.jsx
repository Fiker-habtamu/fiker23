const contactItems = [
  {
    icon: "bi bi-geo-alt",
    label: "Location",
    value: "Addis Ababa, Ethiopia",
  },
  {
    icon: "bi bi-envelope",
    label: "Email",
    value: "danathabtamu@gmail.com",
  },
  {
    icon: "bi bi-phone",
    label: "Phone",
    value: "+251-941188384",
  },
];

export default function Contact({targetContactSectionRef}) {
  return (
    <section id="contact" className="contact" ref={targetContactSectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out — I'm always open to new opportunities.</p>
        </div>

        <div className="contact-info">
          {contactItems.map(({ icon, label, value }) => (
            <div className="contact-card" key={label}>
              <i className={icon} />
              <h4>{label}</h4>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
