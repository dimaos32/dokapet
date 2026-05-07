import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/dokapet/',
  title: 'Dokapet',
  description: 'Pet project for doc systems',
  themeConfig: {
    nav: [
      { text: 'Обзор', link: '/' },
      { text: 'Напитки', link: '/drinks/' },
      { text: 'Еда', link: '/food/' },
    ],

    sidebar: [
      { text: 'Обзор', link: '/' },
      {
        text: 'Напитки',
        link: '/drinks/',
        collapsed: true,
        items: [{ text: 'Масала', link: '/drinks/masala' }],
      },
      {
        text: 'Еда',
        link: '/food/',
        collapsed: true,
        items: [
          {
            text: 'Салаты',
            collapsed: true,
            items: [
              { text: 'Первый салат', link: '/food/salads/salad-1' },
              { text: 'Второй салат', link: '/food/salads/salad-2' },
            ],
          },
          {
            text: 'Основные блюда',
            collapsed: true,
            items: [
              { text: 'Первое горячее', link: '/food/mains/main-1' },
              { text: 'Второе горячее', link: '/food/mains/main-2' },
            ],
          },
        ],
      },
    ],
  },
});
