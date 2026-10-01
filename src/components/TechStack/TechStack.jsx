import { useReveal } from '../../hooks/useReveal'
import './TechStack.css'

const technologies = [
  {
    name: 'Three.js',
    desc: '3D-рендеринг и визуализация',
    icon: '🎨',
    category: 'Графика',
  },
  {
    name: 'Cannon.js',
    desc: 'Физический движок для реалистичных симуляций',
    icon: '⚙️',
    category: 'Физика',
  },
  {
    name: 'React',
    desc: 'Компонентная архитектура UI',
    icon: '⚛️',
    category: 'UI',
  },
  {
    name: 'Chart.js',
    desc: 'Интерактивные графики и визуализация данных',
    icon: '📊',
    category: 'Графики',
  },
  {
    name: 'Electron',
    desc: 'Кроссплатформенное десктопное приложение',
    icon: '🖥️',
    category: 'Платформа',
  },
  {
    name: 'CSS Themes',
    desc: 'Тёмная и светлая темы оформления',
    icon: '🎭',
    category: 'Дизайн',
  },
]

function TechStack() {
  const headerRef = useReveal(0.1)

  return (
    <section className="section tech-stack" id="tech">
      <div className="container">
        <div className="section-header center" ref={headerRef}>
          <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
            <span className="section-eyebrow">🛠 Технологии</span>
            <h2 className="section-title">
              Построено на <span className="accent">современных</span> технологиях
            </h2>
            <p className="section-desc">
              Приложение использует надёжный стек технологий для обеспечения производительности и качества.
            </p>
          </div>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, i) => (
            <TechCard key={i} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechCard({ tech, index }) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className="reveal tech-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="tech-card-top">
        <div className="tech-icon">{tech.icon}</div>
        <span className="tech-category">{tech.category}</span>
      </div>
      <h3 className="tech-name">{tech.name}</h3>
      <p className="tech-desc">{tech.desc}</p>
    </div>
  )
}

export default TechStack
