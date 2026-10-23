import RavenLogo from './RavenLogo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#inicio" className="brand">
          <RavenLogo className="brand__mark" />
          Raven Design
        </a>
        <p className="muted">Desarrollo web · Community manager · Google Ads · Hosting</p>
        <p className="muted small">© {new Date().getFullYear()} Raven Design. Hecho con React + TypeScript.</p>
      </div>
    </footer>
  )
}
