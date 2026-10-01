import { useState, useEffect } from 'react'
import './Header.css'

function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#features', label: 'Возможности' },
    { href: '#experiments', label: 'Эксперименты' },
    { href: '#tech', label: 'Технологии' },
    { href: '#download', label: 'Скачать' },
  ]

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        <a href="#" className="header-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" stroke="var(--accent)" strokeWidth="2"/>
            <path d="M14 6 L14 22 M6 14 L22 14" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2"/>
            <circle cx="14" cy="8" r="2.5" fill="var(--accent)"/>
            <path d="M14 8 L14 20" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
          </svg>
          <span className="header-title">
            Физическая лаборатория <span className="accent">3D</span>
          </span>
        </a>

        <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="header-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
            aria-label="Переключить тему"
          >
            <span className="theme-toggle-icons">
              <span>🌙</span>
              <span>☀️</span>
            </span>
          </button>

          <a href="#download" className="btn-header-cta">
            Скачать
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
