import { useReveal } from '../../hooks/useReveal'
import './Experiments.css'

const experiments = [
  {
    id: 'freeFall',
    icon: '⬇',
    name: 'Свободное падение',
    desc: 'Падение тела под действием силы тяжести. Наблюдайте ускорение, скорость и энергию в реальном времени.',
    formula: 'y = h₀ + v₀t − ½gt²',
    params: ['Высота', 'Масса', 'Нач. скорость', 'g'],
    color: '#58a6ff',
  },
  {
    id: 'projectile',
    icon: '↗',
    name: 'Бросок под углом',
    desc: 'Параболическое движение тела. Трассировка траектории и разложение скорости на компоненты.',
    formula: 'x = v₀cosα·t,  y = v₀sinα·t − ½gt²',
    params: ['Скорость', 'Угол', 'Масса', 'Высота'],
    color: '#3fb950',
  },
  {
    id: 'inclinedPlane',
    icon: '⟋',
    name: 'Наклонная плоскость',
    desc: 'Движение тела по наклонной поверхности с учётом силы трения.',
    formula: 'a = g(sinα − μcosα)',
    params: ['Масса', 'Угол', 'Коэф. трения', 'Скорость'],
    color: '#e3b341',
  },
  {
    id: 'collision',
    icon: '⟺',
    name: 'Столкновение тел',
    desc: 'Упругое и неупругое столкновение двух тел. Закон сохранения импульса.',
    formula: 'm₁v₁ + m₂v₂ = const',
    params: ['m₁', 'm₂', 'v₁', 'v₂', 'e'],
    color: '#f85149',
  },
  {
    id: 'airResistance',
    icon: '🌬',
    name: 'Сопротивление воздуха',
    desc: 'Падение тела с квадратичным сопротивлением. Достижение терминальной скорости.',
    formula: 'F = ½C_d ρ A v²',
    params: ['Масса', 'Высота', 'Площадь', 'Cd', 'ρ'],
    color: '#bc8cff',
  },
  {
    id: 'circularMotion',
    icon: '○',
    name: 'Движение по окружности',
    desc: 'Равномерное движение по круговой орбите. Центростремительное ускорение и силы.',
    formula: 'aц = v² / R',
    params: ['Радиус', 'Скорость', 'Масса'],
    color: '#26c6da',
  },
]

function Experiments() {
  const ref = useReveal(0.1)

  return (
    <section className="section experiments" id="experiments">
      <div className="container">
        <div className="section-header center" ref={ref}>
          <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
            <span className="section-eyebrow">🧪 Эксперименты</span>
            <h2 className="section-title">
              <span className="accent">6</span> физических экспериментов
            </h2>
            <p className="section-desc">
              Каждый эксперимент включает настраиваемые параметры, 3D-визуализацию,
              графики и вычисление результатов.
            </p>
          </div>
        </div>

        <div className="experiments-grid">
          {experiments.map((exp, i) => (
            <ExperimentCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperimentCard({ exp, index }) {
  const ref = useReveal(0.1)

  return (
    <div
      ref={ref}
      className="reveal exp-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="exp-card-header">
        <div className="exp-card-icon" style={{ borderColor: exp.color }}>
          <span>{exp.icon}</span>
        </div>
        <div>
          <div className="exp-card-name">{exp.name}</div>
          <div className="exp-card-num">Эксперимент {index + 1}</div>
        </div>
      </div>

      <div className="exp-card-body">
        <p className="exp-card-desc">{exp.desc}</p>

        <div className="exp-card-formula">
          <span className="exp-formula-label">Формула</span>
          <code>{exp.formula}</code>
        </div>

        <div className="exp-card-params">
          {exp.params.map(p => (
            <span key={p} className="exp-param-tag">{p}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiments
