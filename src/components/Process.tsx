import { steps } from '../data'

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>De la idea a la web publicada</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="card step">
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
