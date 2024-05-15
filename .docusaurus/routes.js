import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/agis-docs/blog',
    component: ComponentCreator('/agis-docs/blog', '4ea'),
    exact: true
  },
  {
    path: '/agis-docs/blog/archive',
    component: ComponentCreator('/agis-docs/blog/archive', '2ec'),
    exact: true
  },
  {
    path: '/agis-docs/blog/first-blog-post',
    component: ComponentCreator('/agis-docs/blog/first-blog-post', 'bd8'),
    exact: true
  },
  {
    path: '/agis-docs/blog/long-blog-post',
    component: ComponentCreator('/agis-docs/blog/long-blog-post', 'ab7'),
    exact: true
  },
  {
    path: '/agis-docs/blog/mdx-blog-post',
    component: ComponentCreator('/agis-docs/blog/mdx-blog-post', '12d'),
    exact: true
  },
  {
    path: '/agis-docs/blog/tags',
    component: ComponentCreator('/agis-docs/blog/tags', '3e0'),
    exact: true
  },
  {
    path: '/agis-docs/blog/tags/docusaurus',
    component: ComponentCreator('/agis-docs/blog/tags/docusaurus', '33a'),
    exact: true
  },
  {
    path: '/agis-docs/blog/tags/facebook',
    component: ComponentCreator('/agis-docs/blog/tags/facebook', '74d'),
    exact: true
  },
  {
    path: '/agis-docs/blog/tags/hello',
    component: ComponentCreator('/agis-docs/blog/tags/hello', 'e28'),
    exact: true
  },
  {
    path: '/agis-docs/blog/tags/hola',
    component: ComponentCreator('/agis-docs/blog/tags/hola', 'c65'),
    exact: true
  },
  {
    path: '/agis-docs/blog/welcome',
    component: ComponentCreator('/agis-docs/blog/welcome', '4f2'),
    exact: true
  },
  {
    path: '/agis-docs/markdown-page',
    component: ComponentCreator('/agis-docs/markdown-page', 'e12'),
    exact: true
  },
  {
    path: '/agis-docs/docs',
    component: ComponentCreator('/agis-docs/docs', '3a7'),
    routes: [
      {
        path: '/agis-docs/docs',
        component: ComponentCreator('/agis-docs/docs', '3c7'),
        routes: [
          {
            path: '/agis-docs/docs',
            component: ComponentCreator('/agis-docs/docs', 'f73'),
            routes: [
              {
                path: '/agis-docs/docs/category/sobre-o-agis',
                component: ComponentCreator('/agis-docs/docs/category/sobre-o-agis', 'ae5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/agis-docs/docs/category/sobre-o-projeto',
                component: ComponentCreator('/agis-docs/docs/category/sobre-o-projeto', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/agis-docs/docs/intro',
                component: ComponentCreator('/agis-docs/docs/intro', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/agis-docs/docs/sobre-o-agis/equipe',
                component: ComponentCreator('/agis-docs/docs/sobre-o-agis/equipe', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/agis-docs/docs/sobre-o-agis/o-agis',
                component: ComponentCreator('/agis-docs/docs/sobre-o-agis/o-agis', 'ea7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/agis-docs/docs/sobre-o-projeto/ciclo-de-vida',
                component: ComponentCreator('/agis-docs/docs/sobre-o-projeto/ciclo-de-vida', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/agis-docs/',
    component: ComponentCreator('/agis-docs/', '278'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
