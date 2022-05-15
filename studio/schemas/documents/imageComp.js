export default {
  name: 'imageComp',
  title: 'Bild Composition',
  type: 'document',
  fields: [
    {
      name: 'figuren',
      title: 'Figuren',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'figur'}]}]
    }
  ]
}
