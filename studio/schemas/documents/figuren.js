export default {
  name: 'figur',
  title: 'Figuren',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Platz',
      name: 'einsatz',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Dorffasnet', value: 'dorf'},
          {title: 'Verein', value: 'verein'}
        ]
      }
    },
    {
      name: 'bild',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'text'
    }
  ]
}
