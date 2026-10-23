export type Layer = 'Frontend' | 'Backend' | 'Datos' | 'CMS'

export interface Tech {
  name: string
  short: string
  layer: Layer
  color: string
  description: string
  uses: string[]
}

export const stack: Tech[] = [
  {
    name: 'React',
    short: 'Re',
    layer: 'Frontend',
    color: 'var(--cyan)',
    description: 'Interfaces rápidas armadas con componentes reutilizables. Lo que ves y tocás, bien hecho.',
    uses: ['SPAs y landings', 'Paneles de gestión', 'Componentes a medida'],
  },
  {
    name: 'TypeScript',
    short: 'TS',
    layer: 'Frontend',
    color: 'var(--blue)',
    description: 'JavaScript con tipos: menos errores en producción y código que entendés cuando volvés en seis meses.',
    uses: ['Tipado de punta a punta', 'Refactors sin miedo', 'Autocompletado que ayuda'],
  },
  {
    name: 'PHP',
    short: 'PHP',
    layer: 'Backend',
    color: 'var(--violet)',
    description: 'El caballito de batalla de la web. Ideal para hostings accesibles y proyectos que tienen que salir ya.',
    uses: ['APIs livianas', 'Formularios y mails', 'Integraciones con WordPress'],
  },
  {
    name: 'Spring Boot',
    short: 'SB',
    layer: 'Backend',
    color: 'var(--teal)',
    description: 'Java listo para producción: seguridad, validaciones y APIs REST robustas para cuando el proyecto crece.',
    uses: ['APIs REST', 'Autenticación', 'Lógica de negocio'],
  },
  {
    name: 'PostgreSQL',
    short: 'PG',
    layer: 'Datos',
    color: 'var(--gold)',
    description: 'Una base de datos relacional seria y gratuita. Tus datos ordenados, consistentes y seguros.',
    uses: ['Modelado relacional', 'Consultas eficientes', 'Backups y migraciones'],
  },
  {
    name: 'WordPress',
    short: 'WP',
    layer: 'CMS',
    color: 'var(--magenta)',
    description: 'Para que cargues contenido vos mismo sin tocar código. Blogs, institucionales y tiendas en tiempo récord.',
    uses: ['Sitios autoadministrables', 'Temas a medida', 'WooCommerce'],
  },
]

export type ServiceIcon = 'code' | 'social' | 'ads' | 'server'

export interface Service {
  title: string
  icon: ServiceIcon
  color: string
  description: string
  includes: string[]
}

export const services: Service[] = [
  {
    title: 'Diseño y desarrollo web',
    icon: 'code',
    color: 'var(--blue)',
    description: 'Tu web de punta a punta: desde un sitio en WordPress hasta una aplicación a medida con el stack completo.',
    includes: ['Diseño responsive', 'Sitios autoadministrables', 'Aplicaciones a medida'],
  },
  {
    title: 'Community manager',
    icon: 'social',
    color: 'var(--magenta)',
    description: 'Nos ocupamos de tus redes para que tu marca tenga presencia constante y hable con tu público.',
    includes: ['Calendario de contenidos', 'Diseño de publicaciones', 'Respuesta a mensajes y métricas'],
  },
  {
    title: 'Administración de Google Ads',
    icon: 'ads',
    color: 'var(--gold)',
    description: 'Campañas que traen visitas reales a tu web, con el presupuesto controlado y resultados medibles.',
    includes: ['Campañas de búsqueda y display', 'Palabras clave y segmentación', 'Informes mensuales'],
  },
  {
    title: 'Hosting y servidor en Hostinger',
    icon: 'server',
    color: 'var(--teal)',
    description: 'No tenés que pelearte con paneles ni servidores: dejamos tu web online y nos encargamos de mantenerla.',
    includes: ['Dominio y certificado SSL', 'Correos con tu dominio', 'Backups, actualizaciones y seguridad'],
  },
]

export interface Member {
  initials: string
  role: string
  focus: string
  stack: string[]
  accent: string
}

export const team: Member[] = [
  {
    initials: '</>',
    role: 'Desarrollo a medida',
    focus:
      'Aplicaciones con lógica propia: frontend en React + TypeScript, APIs en PHP o Spring Boot y datos en PostgreSQL.',
    stack: ['React', 'TypeScript', 'PHP', 'Spring Boot', 'PostgreSQL'],
    accent: 'var(--blue)',
  },
  {
    initials: 'WP',
    role: 'Sitios en WordPress',
    focus:
      'Webs autoadministrables que salen rápido: diseño de tema, plugins bien elegidos y un panel que cualquiera puede usar.',
    stack: ['WordPress', 'PHP', 'WooCommerce', 'Elementor'],
    accent: 'var(--magenta)',
  },
]

export const steps = [
  { title: 'Charlamos', text: 'Nos contás qué necesitás y definimos si conviene WordPress o desarrollo a medida.' },
  { title: 'Diseñamos', text: 'Armamos la estructura y el diseño visual. Lo revisás antes de que escribamos una línea de código.' },
  { title: 'Construimos', text: 'Desarrollamos con entregas cortas para que veas avances reales cada semana.' },
  { title: 'Publicamos', text: 'Subimos la web, la dejamos rápida y segura, y te enseñamos a manejarla.' },
]
