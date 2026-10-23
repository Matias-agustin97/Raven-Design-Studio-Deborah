import { useEffect, useState } from 'react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#stack', label: 'Stack' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#inicio" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true" />
          Raven Design
        </a>
        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--primary btn--sm" onClick={close}>
            Pedí tu presupuesto
          </a>
        </nav>
      </div>
    </header>
  )
}
