export default {
  name: 'dokument',
  title: 'Dokumente',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Dokument Titel',
      type: 'string'
    },
    {
      name: 'file',
      title: 'Dokument',
      type: 'file',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Dokument Titel'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
