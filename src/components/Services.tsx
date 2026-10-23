import type { CSSProperties } from 'react'
import { services, type ServiceIcon } from '../data'

const icons: Record<ServiceIcon, JSX.Element> = {
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  social: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
    </>
  ),
  ads: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
}

export default function Services() {
  return (
    <section id="servicios" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Servicios</p>
          <h2>Todo lo que tu marca necesita en internet</h2>
          <p className="muted">
            No solo armamos la web: también la hacemos crecer en redes y en Google, y nos ocupamos de que siempre esté
            online.
          </p>
        </div>
        <div className="grid grid--4">
          {services.map((s) => (
            <article key={s.title} className="card service" style={{ '--c': s.color } as CSSProperties}>
              <span className="service__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {icons[s.icon]}
                </svg>
              </span>
              <h3>{s.title}</h3>
              <p className="muted">{s.description}</p>
              <ul className="tech__uses">
                {s.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
