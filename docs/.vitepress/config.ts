import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Dokapet',
  description:
    'Пет проект для изучения возможностей VitePress с рецептами в качестве контента',
  lang: 'ru-RU',
  base: '/dokapet/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: 'СОВЕТ',
      warningLabel: 'МОЖЕТ БЫТЬ ИНТЕРЕСНО',
    },
  },
  themeConfig: {
    siteTitle: 'СПИСОК РЕЦЕПТОВ',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов',
                footer: {
                  selectText: 'Выбрать',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Навигация',
                  navigateUpKeyAriaLabel: 'Стрелка вверх',
                  navigateDownKeyAriaLabel: 'Стрелка вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: 'Начало', link: '/' },
      { text: 'Напитки', link: '/drinks/' },
      { text: 'Еда', link: '/food/' },
    ],
    sidebar: [
      { text: 'Начало', link: '/' },
      {
        text: 'Напитки',
        link: '/drinks/',
        items: [{ text: 'Масала', link: '/drinks/masala' }],
      },
      {
        text: 'Еда',
        link: '/food/',
        items: [
          {
            text: 'Салаты',
            collapsed: true,
            items: [
              { text: 'Первый салат', link: '/food/salad-1' },
              { text: 'Второй салат', link: '/food/salad-2' },
            ],
          },
          {
            text: 'Основные блюда',
            collapsed: true,
            items: [
              { text: 'Первое горячее', link: '/food/main-1' },
              { text: 'Второе горячее', link: '/food/main-2' },
            ],
          },
        ],
      },
    ],
    outline: {
      label: 'Содержание страницы',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dimaos32' },
      { icon: 'telegram', link: 'https://t.me/dimaos32' },
    ],
    editLink: {
      pattern: 'https://github.com/dimaos32/dokapet/edit/master/docs/:path',
      text: 'Редактировать эту страницу на GitHub',
    },
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключиться на светлую тему',
    darkModeSwitchTitle: 'Переключиться на темную тему',
    sidebarMenuLabel: 'Содержание',
    returnToTopLabel: 'Вернуться наверх',
    externalLinkIcon: true,
  },
});
