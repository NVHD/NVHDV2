export default {
  name: 'imageComp',
  title: 'Bild Composition',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      title: 'Platz',
      name: 'place',
      type: 'array',
      initialValue: ['index'],
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [{title: 'Startseite', value: 'index'}]
      }
    },
    {
      name: 'figuren',
      title: 'Figuren',
      description: 'Bilder der Figuren, von links nach rechts.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'figur'}]}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'figuren.0.bild'
    }
  }
}
