import appConfig from '../../config/appConfig'
import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="12" stroke="var(--accent)" strokeWidth="2"/>
                <path d="M14 6 L14 22 M6 14 L22 14" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2"/>
                <circle cx="14" cy="8" r="2.5" fill="var(--accent)"/>
                <path d="M14 8 L14 20" stroke="var(--accent-secondary)" strokeWidth="1.5"/>
              </svg>
              <span>
                Физическая лаборатория <span className="accent">3D</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Учебная интерактивная 3D-лаборатория по физике
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Навигация</h4>
            <a href="#features" className="footer-link">Возможности</a>
            <a href="#experiments" className="footer-link">Эксперименты</a>
            <a href="#tech" className="footer-link">Технологии</a>
            <a href="#download" className="footer-link">Скачать</a>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Эксперименты</h4>
            <a href="#experiments" className="footer-link">Свободное падение</a>
            <a href="#experiments" className="footer-link">Бросок под углом</a>
            <a href="#experiments" className="footer-link">Наклонная плоскость</a>
            <a href="#experiments" className="footer-link">Конструктор сцен</a>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Автор</h4>
            <span className="footer-text">{appConfig.author}</span>
            <span className="footer-text">Учебный проект</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {currentYear} {appConfig.name}. Все права защищены.
          </span>
          <span className="footer-made">
            Сделано с <span className="footer-heart">❤</span> для изучения физики
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
