import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import DowmiBrand from './components/DowmiBrand'
import BusinessAreas from './components/BusinessAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <DowmiBrand />
        <BusinessAreas />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
