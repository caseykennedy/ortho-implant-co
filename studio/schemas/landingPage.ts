export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Set the page URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'pageTitle',
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'aboutIntro',
    },
    {
      name: 'billboard',
      title: 'Billboard',
      type: 'billboard',
    },
  ],
}
