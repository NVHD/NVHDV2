export default {
  name: 'galerie',
  title: 'Galerie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      name: 'galerie',
      title: 'Galerie',
      type: 'bild'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'galerie.bild[0]'
    }
  }
}
