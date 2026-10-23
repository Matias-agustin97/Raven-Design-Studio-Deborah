import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stack from './components/Stack'
import Team from './components/Team'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
