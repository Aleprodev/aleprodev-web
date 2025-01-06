import Hobbies from '@/components/Hobbies'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Footer from '@/components/layout/Footer'
import Projects from './components/Projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  )
}

