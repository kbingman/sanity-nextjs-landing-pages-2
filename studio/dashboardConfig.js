export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec191bb5ae70a1eb98599b2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-wpokdewg',
                  apiId: 'ffe2bad7-29b0-482f-af1a-f31c45792451'
                },
                {
                  buildHookId: '5ec191bb123405a76302d150',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-sk4r7yat',
                  apiId: '88bcf88e-c388-4371-ab98-f3c8018cb966'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kbingman/sanity-nextjs-landing-pages-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-sk4r7yat.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
