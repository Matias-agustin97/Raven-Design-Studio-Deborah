import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// El envío lo hace public/contacto.php, que queda en la raíz del sitio publicado.
const ENDPOINT = `${import.meta.env.BASE_URL}contacto.php`

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: new FormData(e.currentTarget) })
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null
      if (!res.ok || !data?.ok) throw new Error(data?.error)
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : 'No pudimos enviar tu consulta. Probá de nuevo en un rato.')
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="cta card">
          <div className="cta__text">
            <p className="eyebrow">Contacto</p>
            <h2>¿Tenés una idea? Hagámosla realidad</h2>
            <p className="muted">
              Contanos en dos líneas qué tenés en mente y te respondemos con una propuesta y el stack que mejor le va.
            </p>
          </div>
          {status === 'sent' ? (
            <p className="cta__thanks" role="status">
              ¡Gracias! Recibimos tu consulta y te escribimos en breve.
            </p>
          ) : (
            <form className="form" onSubmit={onSubmit}>
              <label>
                Nombre
                <input name="nombre" required maxLength={100} placeholder="¿Cómo te llamás?" />
              </label>
              <label>
                Email
                <input name="email" type="email" required maxLength={150} placeholder="tu@email.com" />
              </label>
              <label className="form__full">
                ¿Qué necesitás?
                <select name="tipo" defaultValue="wordpress">
                  <option value="wordpress">Sitio en WordPress</option>
                  <option value="medida">Aplicación a medida</option>
                  <option value="redes">Community manager</option>
                  <option value="ads">Google Ads</option>
                  <option value="nose">Todavía no sé</option>
                </select>
              </label>
              <label className="form__full">
                Mensaje
                <textarea name="mensaje" rows={3} maxLength={3000} placeholder="Contanos un poco del proyecto" />
              </label>
              {/* Campo trampa para bots: queda oculto para las personas */}
              <input className="form__trap" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {status === 'error' && (
                <p className="form__error form__full" role="alert">
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn--primary form__full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar consulta'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
