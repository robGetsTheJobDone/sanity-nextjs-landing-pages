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
                  buildHookId: '5e66a56b24627b46eab3353a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ez9we9uk',
                  apiId: '470a6e7c-a41d-46f5-8461-6664c545038e'
                },
                {
                  buildHookId: '5e66a56bf4d3d8678892c3f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mob4qqy4',
                  apiId: '64478833-5329-420c-b4cf-d221a2100b1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robGetsTheJobDone/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mob4qqy4.netlify.com', category: 'apps'}
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
