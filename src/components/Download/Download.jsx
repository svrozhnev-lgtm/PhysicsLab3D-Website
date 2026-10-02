import { useState, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'
import appConfig from '../../config/appConfig'
import './Download.css'

/**
 * Проверяет доступность файла через GitHub Releases API.
 * Возвращает { available, size } или { available: false }.
 */
async function checkFileAvailability() {
  try {
    const res = await fetch(
      'https://api.github.com/repos/svrozhnev-lgtm/PhysicsLab3D-Website/releases/tags/v1.0.0'
    )
    if (!res.ok) return { available: false, size: 0 }
    const release = await res.json()
    const asset = release.assets?.find(a => a.name === appConfig.downloadFileName)
    if (asset) {
      return { available: true, size: asset.size }
    }
    return { available: false, size: 0 }
  } catch {
    return { available: false, size: 0 }
  }
}

/** Форматирование размера файла */
function formatFileSize(bytes) {
  if (bytes === 0) return '—'
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function Download() {
  const headerRef = useReveal(0.1)
  const contentRef = useReveal(0.1)

  const [fileStatus, setFileStatus] = useState({
    available: null, // null = checking, true = ready, false = not found
    size: 0,
  })

  useEffect(() => {
    checkFileAvailability().then(setFileStatus)
  }, [])

  const isReady = fileStatus.available === true
  const isChecking = fileStatus.available === null

  return (
    <section className="section download" id="download">
      <div className="container">
        <div className="section-header center" ref={headerRef}>
          <div className="reveal" style={{ opacity: 1, transform: 'none' }}>
            <span className="section-eyebrow">⬇️ Скачать</span>
            <h2 className="section-title">
              Начните <span className="accent">прямо сейчас</span>
            </h2>
            <p className="section-desc">
              Скачайте бесплатно для Windows. Установка за пару минут.
            </p>
          </div>
        </div>

        <div className="download-layout" ref={contentRef}>
          {/* ── Основная карточка загрузки ── */}
          <div className="reveal download-cta-card">
            <div className="download-version-badge">
              <span className="download-version-dot" />
              v{appConfig.version} — Последняя версия
            </div>

            <h3 className="download-cta-title">
              {appConfig.name}
            </h3>
            <p className="download-cta-desc">
              Полная версия приложения для Windows. Включает все 6 экспериментов,
              конструктор сцен и лабораторные работы.
            </p>

            {/* ── Кнопка скачивания ── */}
            <div className="download-buttons">
              {isChecking ? (
                <span className="download-status checking">
                  <span className="download-status-spinner" />
                  Проверка доступности файла…
                </span>
              ) : isReady ? (
                <a
                  href={appConfig.downloadUrl}
                  className="btn-download-primary"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Скачать для Windows
                  <span className="download-size">{formatFileSize(fileStatus.size)}</span>
                </a>
              ) : (
                <div className="download-unavailable">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4m0 4h.01" />
                  </svg>
                  <div>
                    <div className="download-unavailable-title">Установщик готовится</div>
                    <div className="download-unavailable-desc">
                      Файл <code>{appConfig.downloadFileName}</code> ещё не размещён.
                      Он появится после сборки приложения.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Информация об установщике ── */}
            <div className="download-installer-info">
              <div className="installer-info-row">
                <span className="installer-info-label">Файл</span>
                <code className="installer-info-value">{appConfig.downloadFileName}</code>
              </div>
              <div className="installer-info-row">
                <span className="installer-info-label">Тип</span>
                <span className="installer-info-value">{appConfig.installerType}</span>
              </div>
              <div className="installer-info-row">
                <span className="installer-info-label">Платформа</span>
                <span className="installer-info-value">{appConfig.platform}</span>
              </div>
              <div className="installer-info-row">
                <span className="installer-info-label">Версия</span>
                <span className="installer-info-value">v{appConfig.version}</span>
              </div>
              {isReady && fileStatus.size > 0 && (
                <div className="installer-info-row">
                  <span className="installer-info-label">Размер</span>
                  <span className="installer-info-value">{formatFileSize(fileStatus.size)}</span>
                </div>
              )}
            </div>

            <p className="download-note">
              {isReady
                ? 'Бесплатно • Windows 10+ • Автоматическая установка'
                : `Автор: ${appConfig.author}`}
            </p>
          </div>

          {/* ── Системные требования ── */}
          <div className="reveal download-requirements reveal-delay-2">
            <h4 className="requirements-title">Системные требования</h4>
            <div className="requirements-list">
              {appConfig.systemRequirements.map(req => (
                <div key={req.label} className="requirement-row">
                  <span className="requirement-label">{req.label}</span>
                  <span className="requirement-value">{req.value}</span>
                </div>
              ))}
            </div>

            <div className="download-features-mini">
              <div className="download-mini-item">
                <span className="download-mini-icon">🔒</span>
                <span>Без вирусов</span>
              </div>
              <div className="download-mini-item">
                <span className="download-mini-icon">🖥️</span>
                <span>Windows Installer</span>
              </div>
              <div className="download-mini-item">
                <span className="download-mini-icon">⚡</span>
                <span>Быстрый запуск</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
