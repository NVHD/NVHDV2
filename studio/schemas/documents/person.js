export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Titel / Funktion',
      name: 'rollen',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Präsident/in', value: 'president'},
          {title: 'Vizepräsident/in', value: 'vizepresident'},
          {title: 'Kassierer/in', value: 'kassierer'},
          {title: 'Schriftführer/in', value: 'schriftführer'},
          {title: 'Elferrat', value: 'elferrat'}
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
      name: 'email',
      title: 'E-Mail Adresse',
      type: 'string'
    },
    {
      name: 'telefon',
      title: 'Telefonnummer',
      type: 'string'
    },
    {
      name: 'adresse',
      title: 'Adresse',
      type: 'addresse'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'rollen',
      media: 'bild'
    },
    prepare(selection) {
      const {title, subtitle, bild} = selection
      return {
        title,
        subtitle: `${subtitle ? subtitle.join() : 'unbekannt'}`,
        bild
      }
    }
  }
}
