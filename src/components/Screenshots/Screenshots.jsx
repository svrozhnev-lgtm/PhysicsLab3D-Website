import { useReveal } from '../../hooks/useReveal'
import './Screenshots.css'

const screenshots = [
  {
    title: 'Свободное падение',
    desc: 'Визуализация эксперимента с настройкой параметров и графиками в реальном времени',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1c2130 100%)',
    accent: '#58a6ff',
  },
  {
    title: 'Конструктор сцен',
    desc: 'Создавайте собственные физические сцены с произвольными объектами',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1a2233 100%)',
    accent: '#3fb950',
  },
  {
    title: 'Лабораторная работа',
    desc: 'Пошаговый режим: теория → настройка → эксперимент → анализ',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1c1d2e 100%)',
    accent: '#bc8cff',
  },
]

function Screenshots() {
  const headerRef = useReveal(0.1)

  return (
    <section className="section screenshots" id="screenshots">
      <div className="container">
        <div className="section-header center" ref={headerRef}>
          <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
            <span className="section-eyebrow">📸 Скриншоты</span>
            <h2 className="section-title">
              Приложение в <span className="accent">действии</span>
            </h2>
            <p className="section-desc">
              Интерфейс приложения спроектирован для удобной работы с экспериментами, графиками и инструментами.
            </p>
          </div>
        </div>

        <div className="screenshots-grid">
          {screenshots.map((s, i) => (
            <ScreenshotCard key={i} screenshot={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ScreenshotCard({ screenshot, index }) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className="reveal screenshot-card"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className="screenshot-preview"
        style={{ background: screenshot.gradient }}
      >
        {/* CSS-only mock UI */}
        <div className="screenshot-mock-ui">
          <div className="mock-titlebar">
            <div className="mock-dots">
              <span style={{ background: '#f85149' }} />
              <span style={{ background: '#e3b341' }} />
              <span style={{ background: '#3fb950' }} />
            </div>
            <span className="mock-title">{screenshot.title}</span>
          </div>
          <div className="mock-content">
            <div className="mock-sidebar">
              <div className="mock-sidebar-item active" style={{ borderColor: screenshot.accent }} />
              <div className="mock-sidebar-item" />
              <div className="mock-sidebar-item" />
              <div className="mock-sidebar-item" />
            </div>
            <div className="mock-main">
              <div className="mock-viewport" style={{ borderColor: screenshot.accent }}>
                <div className="mock-sphere" style={{ background: screenshot.accent }} />
                <div className="mock-ground" />
              </div>
              <div className="mock-panel">
                <div className="mock-bar" style={{ width: '80%', background: screenshot.accent }} />
                <div className="mock-bar" style={{ width: '60%' }} />
                <div className="mock-bar" style={{ width: '45%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="screenshot-info">
        <h3 className="screenshot-title">{screenshot.title}</h3>
        <p className="screenshot-desc">{screenshot.desc}</p>
      </div>
    </div>
  )
}

export default Screenshots
