import { useId } from 'react'

// Silueta de cuervo con alas abiertas (viewBox 100x100). El ala derecha es el espejo de la izquierda.
const wing =
  'M46 50C41 41 33 31 20 22C15 19 10 16 6 15L12 21 3 22 11 27 2 30 11 33 4 38 13 39 8 45Q14 46 18 44Q19 50 25 49Q26 55 32 53Q34 58 39 56L43 60Z'
const body =
  'M42 35.5C37 35.5 31 38 27 42.5C32 42 37 43 41.5 44.5C41 48 39.5 53 40 58C40.5 64 43 68 46 71L42 86 50 91 58 86 54 71C58 67 60.5 62 60 55C59.5 48 58.5 44 56 41C53 33 46 31 42 35.5Z'

export default function RavenLogo({ className }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  // Cada capa: contorno debajo y relleno encima, así sólo queda visible el borde exterior.
  // El cuerpo va en su propia capa, sobre las alas, para que la cabeza y el pico se recorten encima.
  const layer = (paths: JSX.Element, fill: string) => (
    <>
      <g stroke={`url(#${id}s)`} strokeOpacity=".75" strokeWidth="2" strokeLinejoin="round" fill="none">
        {paths}
      </g>
      <g fill={fill}>{paths}</g>
    </>
  )
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}s`} x1="0" y1="12" x2="0" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#2f6bff" />
        </linearGradient>
        <linearGradient id={`${id}f`} x1="0" y1="12" x2="0" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1b1f45" />
          <stop offset="1" stopColor="#07081a" />
        </linearGradient>
        <radialGradient id={`${id}h`}>
          <stop offset="0" stopColor="#2f6bff" stopOpacity=".22" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill={`url(#${id}h)`} />
      {layer(
        <>
          <path d={wing} transform="translate(0 6)" />
          <path d={wing} transform="matrix(-1 0 0 1 100 6)" />
        </>,
        `url(#${id}f)`,
      )}
      {layer(<path d={body} transform="translate(0 -4)" />, '#07081a')}
      <circle cx="45.5" cy="34" r="1.3" fill="#e8b84a" />
    </svg>
  )
}
