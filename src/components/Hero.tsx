import type { CSSProperties } from 'react'
import { stack } from '../data'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Estudio de diseño y desarrollo web</p>
          <h1>
            Webs que <span className="gradient-text">cambian</span> con tu proyecto
          </h1>
          <p className="lead">
            Desde un sitio en WordPress que administrás vos hasta una aplicación a medida con React, Spring Boot y
            PostgreSQL. Además movemos tus redes, manejamos tus campañas de Google Ads y nos ocupamos del hosting.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              Arrancá tu proyecto
            </a>
            <a href="#servicios" className="btn btn--ghost">
              Conocé los servicios
            </a>
          </div>
        </div>
        <div className="orbit" aria-hidden="true">
          <div className="orbit__ring orbit__ring--1" />
          <div className="orbit__ring orbit__ring--2" />
          <div className="orbit__core" />
          <div className="orbit__spin">
            {stack.map((t, i) => (
              <span
                key={t.name}
                className="orbit__chip"
                style={{ '--i': i, '--n': stack.length, '--c': t.color } as CSSProperties}
              >
                <span>{t.short}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
