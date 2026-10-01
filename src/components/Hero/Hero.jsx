import HeroScene from './HeroScene'
import appConfig from '../../config/appConfig'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-scene-bg">
        <HeroScene />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Версия {appConfig.version} — Конструктор сцен</span>
        </div>

        <h1 className="hero-title">
          Физическая<br />
          лаборатория <span className="accent">3D</span>
        </h1>

        <p className="hero-subtitle">
          Учебная интерактивная 3D-лаборатория по физике.
          Наблюдайте за физическими явлениями в реальном времени,
          стройте графики и проводите лабораторные работы.
        </p>

        <div className="hero-actions">
          <a href={appConfig.downloadUrl} className="btn-hero-primary" download={appConfig.downloadFileName}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Скачать для Windows
          </a>
          <a href="#experiments" className="btn-hero-secondary">
            Подробнее
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">6</span>
            <span className="hero-stat-label">Экспериментов</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">3D</span>
            <span className="hero-stat-label">Визуализация</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">2</span>
            <span className="hero-stat-label">Темы оформления</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">∞</span>
            <span className="hero-stat-label">Конструктор</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
