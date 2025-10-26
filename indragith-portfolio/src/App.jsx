import Hero3D from './Components/Hero3D';
import Navbar from './Components/Navbar';
import usePortfolioStore from './store/usePortfolioStore';

function App() {
  const { about, projects, contact } = usePortfolioStore();

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        color: 'white',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '100vh' }}>
        <Hero3D />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            maxWidth: '600px',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1rem',
              fontWeight: '700',
              lineHeight: '1.2',
            }}
          >
            Hi, I'm Indragith 👋
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#a0a0a0',
              lineHeight: '1.6',
            }}
          >
            Front-End Developer | React | Three.js Enthusiast
          </p>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '100px 10%',
          background: '#070707',
          minHeight: '50vh',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#8b5cf6',
          }}
        >
          About Me
        </h2>
        <p
          style={{
            maxWidth: '800px',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#d0d0d0',
            marginBottom: '2rem',
          }}
        >
          {about.intro}
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#e0e0e0',
            }}
          >
            Skills
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
            }}
          >
            {about.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '10px 20px',
                  background:
                    'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  border: '1px solid #333',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#8b5cf6';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow =
                    '0 4px 12px rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#333';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          padding: '100px 10%',
          background: '#0a0a0a',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '3rem',
            color: '#8b5cf6',
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              style={{
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid #222',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 12px 24px rgba(139, 92, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: '#a0a0a0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                }}
              >
                {project.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem',
                }}
              >
                {project.tags.map((tag) => (
                  <small
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      background: '#111',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      color: '#8b5cf6',
                      border: '1px solid #333',
                    }}
                  >
                    {tag}
                  </small>
                ))}
              </div>
              <a
                href={project.link}
                style={{
                  color: '#8b5cf6',
                  fontSize: '1rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = 'underline')
                }
                onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '100px 10%',
          background: '#070707',
          minHeight: '40vh',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#8b5cf6',
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '1.5rem',
            color: '#d0d0d0',
          }}
        >
          Email:{' '}
          <a
            href={`mailto:${contact.email}`}
            style={{
              color: '#8b5cf6',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
          >
            {contact.email}
          </a>
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {contact.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                background: '#1a1a1a',
                borderRadius: '8px',
                color: '#fff',
                textDecoration: 'none',
                border: '1px solid #333',
                transition: 'all 0.3s ease',
                fontSize: '1rem',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#8b5cf6';
                e.target.style.borderColor = '#8b5cf6';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#1a1a1a';
                e.target.style.borderColor = '#333';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '2rem 10%',
          textAlign: 'center',
          color: '#666',
          borderTop: '1px solid #222',
          background: '#0a0a0a',
        }}
      >
        <p>© 2024 Indragith. Built with React & Three.js</p>
      </footer>
    </div>
  );
}

export default App;
