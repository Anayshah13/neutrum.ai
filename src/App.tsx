import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App