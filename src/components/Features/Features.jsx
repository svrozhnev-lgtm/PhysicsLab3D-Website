import { useReveal } from '../../hooks/useReveal'
import './Features.css'

const features = [
  {
    icon: '⚡',
    title: '6 экспериментов',
    desc: 'Свободное падение, бросок под углом, наклонная плоскость, столкновение тел, сопротивление воздуха, движение по окружности.',
  },
  {
    icon: '🔬',
    title: 'Лабораторные работы',
    desc: 'Пошаговый режим: теория, формулы, настройка параметров, проведение опыта, анализ результатов и вывод.',
  },
  {
    icon: '📊',
    title: 'Интерактивные графики',
    desc: 'Графики v(t), a(t), s(t) и других величин в реальном времени. Курсор и метки значений.',
  },
  {
    icon: '📖',
    title: 'Теоретические материалы',
    desc: 'Встроенная база знаний по каждому эксперименту: определения, формулы, ключевые понятия.',
  },
  {
    icon: '🧰',
    title: 'Инструменты лаборатории',
    desc: 'Линейка, транспортир, секундомер, анализ объекта — измеряйте прямо в 3D-сцене.',
  },
  {
    icon: '🔧',
    title: 'Конструктор сцен',
    desc: 'Создавайте собственные физические сцены: добавляйте объекты, настраивайте гравитацию, трение, столкновения.',
  },
]

function Features() {
  const ref = useReveal(0.1)

  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-header center" ref={ref}>
          <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
            <span className="section-eyebrow">⚙️ Возможности</span>
            <h2 className="section-title">
              Всё для изучения <span className="accent">физики</span>
            </h2>
            <p className="section-desc">
              От классических экспериментов до полностью настраиваемого конструктора сцен — всё в одном приложении.
            </p>
          </div>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc, index }) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className="reveal feature-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{desc}</p>
    </div>
  )
}

export default Features
