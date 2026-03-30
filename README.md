# CITY CENTER — Мини-отель в сердце Мурманска

![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)

## О проекте

Сайт разработан для предоставления гостям полной информации об отеле, доступных номерах и услугах. Основной акцент сделан на удобстве пользователя, эстетике и быстрой загрузке.

## Технологический стек

- **Framework**: [Nuxt 4](https://nuxt.com/) (в режиме SSR для SEO)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: `@nuxt/icon` (Material Symbols Light)
- **Content**: JSON-ориентированная структура данных для легкого редактирования (номера, галерея, преимущества)
- **UI/UX**: Адаптивный дизайн, Glassmorphism эффекты, интерактивная галерея (Lightbox)

## Установка и запуск

### Требования
- Node.js (версия 18.x или выше)
- npm / pnpm / yarn

### Шаги по развертыванию
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/jackspurs03/minihotel_citycenter.git
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер для разработки:
   ```bash
   npm run dev
   ```

## Структура данных

Для удобства обновления информации проект использует JSON-файлы в директории `app/data/`:
- `rooms.json` — управление списком номеров и ценами.
- `gallery.json` — управление фотографиями в галерее.
- `advantages.json` — список преимуществ отеля.