import type { CSSProperties } from 'react'
import { team } from '../data'

export default function Team() {
  return (
    <section id="equipo" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">El equipo</p>
          <h2>Dos caminos para llegar a tu web</h2>
          <p className="muted">
            Trabajamos en dupla: una parte del equipo se encarga del desarrollo a medida y la otra de los sitios en
            WordPress. Así siempre tenés la opción que mejor encaja con tu presupuesto y tus tiempos.
          </p>
        </div>
        <div className="grid grid--2">
          {team.map((m) => (
            <article key={m.role} className="card member" style={{ '--c': m.accent } as CSSProperties}>
              <span className="member__avatar">{m.initials}</span>
              <h3>{m.role}</h3>
              <p className="muted">{m.focus}</p>
              <div className="member__stack">
                {m.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
