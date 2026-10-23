import { useState, type CSSProperties } from 'react'
import { stack, type Layer } from '../data'
import TechLogo from './TechLogo'

type Filter = 'Todo' | Layer

const filters: Filter[] = ['Todo', 'Frontend', 'Backend', 'Datos', 'CMS']

export default function Stack() {
  const [filter, setFilter] = useState<Filter>('Todo')
  const visible = filter === 'Todo' ? stack : stack.filter((t) => t.layer === filter)

  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Nuestro stack</p>
          <h2>Seis herramientas, un mismo criterio</h2>
          <p className="muted">
            Cada capa con la tecnología que mejor la resuelve. Filtrá para ver qué usamos en cada parte de la web.
          </p>
        </div>
        <div className="chips" aria-label="Filtrar por capa">
          {filters.map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              className={`chip ${filter === f ? 'chip--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid--3">
          {visible.map((t) => (
            <article key={t.name} className="card tech" style={{ '--c': t.color } as CSSProperties}>
              <div className="tech__top">
                <span className="tech__badge" title={t.name}>
                  <TechLogo name={t.name} />
                </span>
                <span className="tag">{t.layer}</span>
              </div>
              <h3>{t.name}</h3>
              <p className="muted">{t.description}</p>
              <ul className="tech__uses">
                {t.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
