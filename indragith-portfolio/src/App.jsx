import Hero3D from "./Components/Hero3D";
import Navbar from "./Components/Navbar";
import usePortfolioStore from "./store/usePortfolioStore";

function App() {
  const { about, projects, contact } = usePortfolioStore();

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "white", overflow: "hidden" }}>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Hero3D />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "10%",
            transform: "translateY(-50%)",
          }}
        >
          <h1 style={{ fontSize: "3rem" }}>Hi, I'm Indragith 👋</h1>
          <p style={{ fontSize: "1.2rem" }}>
            Front-End Developer | React | Three.js Enthusiast
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={{ padding: "80px 10%", background: "#070707" }}>
        <h2>About</h2>
        <p style={{ maxWidth: 800 }}>{about.intro}</p>
        <div style={{ marginTop: 16 }}>
          <h4>Skills</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {about.skills.map((s) => (
              <span
                key={s}
                style={{ padding: "6px 10px", background: "#111", borderRadius: 6 }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "80px 10%" }}>
        <h2>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {projects.map((p) => (
            <article key={p.id} style={{ background: "#0f0f0f", padding: 16, borderRadius: 8 }}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <small key={t} style={{ padding: "4px 8px", background: "#111", borderRadius: 6 }}>{t}</small>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <a href={p.link} style={{ color: "#8b5cf6" }}>View</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "80px 10%", background: "#070707" }}>
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${contact.email}`} style={{ color: "#8b5cf6" }}>{contact.email}</a></p>
        <div style={{ marginTop: 12 }}>
          {contact.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" style={{ marginRight: 12, color: "#8b5cf6" }}>{s.name}</a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
