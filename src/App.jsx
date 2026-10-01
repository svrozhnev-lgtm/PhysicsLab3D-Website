import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Experiments from './components/Experiments/Experiments'
import Screenshots from './components/Screenshots/Screenshots'
import TechStack from './components/TechStack/TechStack'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0d1117' : '#f6f8fa')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Experiments />
        <Screenshots />
        <TechStack />
        <Download />
      </main>
      <Footer />
    </div>
  )
}

export default App
