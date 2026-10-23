import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Vite no ejecuta PHP: en `npm run dev` este plugin responde en lugar de contacto.php para poder probar el formulario.
// Si el nombre es "error" simula una falla. En producción lo atiende el contacto.php real.
const contactoDev: Plugin = {
  name: 'contacto-dev',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/contacto.php', (req, res) => {
      let body = ''
      req.on('data', (chunk) => (body += chunk))
      req.on('end', () => {
        const fail = /name="nombre"\r\n\r\nerror\r\n/.test(body)
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.statusCode = fail ? 500 : 200
        res.end(JSON.stringify(fail ? { ok: false, error: 'Error simulado en desarrollo.' } : { ok: true }))
      })
    })
  },
}

export default defineConfig({
  plugins: [react(), contactoDev],
})
