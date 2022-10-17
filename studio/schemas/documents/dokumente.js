export default {
  name: 'dokumente',
  title: 'Dokumente',
  type: 'document',
  fields: [
    {
      name: 'fileTitle',
      title: 'Dokument Titel',
      type: 'string'
    },
    {
      name: 'file',
      title: 'Dokument',
      type: 'file'
    }
  ],
  preview: {
    select: {
      title: 'fileTitle'
    }
  }
}
