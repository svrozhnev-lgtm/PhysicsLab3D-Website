/**
 * appConfig.js — Единый конфигурационный файл сайта
 * Все компоненты берут название, версию и URL скачивания отсюда.
 */

const appConfig = {
  /** Название приложения */
  name: 'Физическая лаборатория 3D',

  /** Текущая версия */
  version: '1.0.0',

  /** Автор */
  author: 'Рожнев Родион Сергеевич',

  /** URL файла установщика (относительно public/) */
  downloadUrl: '/downloads/PhysicsLab3D-Setup.exe',

  /** Имя файла установщика */
  downloadFileName: 'PhysicsLab3D-Setup.exe',

  /** Платформа */
  platform: 'Windows 10/11 (x64)',

  /** Тип установщика */
  installerType: 'Windows Installer (Squirrel)',

  /** Минимальные системные требования */
  systemRequirements: [
    { label: 'ОС', value: 'Windows 10/11 (64-bit)' },
    { label: 'RAM', value: '4 GB минимум' },
    { label: 'GPU', value: 'WebGL 2.0 совместимая' },
    { label: 'Диск', value: '~200 MB' },
  ],
}

export default appConfig
