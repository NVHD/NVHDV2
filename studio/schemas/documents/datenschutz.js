export default {
  name: 'datenschutz',
  title: 'Datenschutz',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string'
    },
    {
      name: 'text',
      title: 'text',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }
  ]
}
