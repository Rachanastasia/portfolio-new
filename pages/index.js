import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Screen from '../components/Screen'

export default function Home() {
  return (
    <Screen>
        <Header />
        <About />
        <Projects />
        <Footer />
    </Screen>
  )
}
