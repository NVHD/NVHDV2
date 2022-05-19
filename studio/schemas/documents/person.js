export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      title: 'Anrede',
      name: 'anrede',
      type: 'string',
      options: {
        list: [
          {title: 'Herr', value: 'male'},
          {title: 'Frau', value: 'female'},
          {title: 'Divers', value: 'divers'}
        ]
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Funktion',
      name: 'rolle',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Präsident*in', value: 'präsident'},
          {title: 'Vizepräsident*in', value: 'vizepräsident'},
          {title: 'Kassier', value: 'kassierer'},
          {title: 'Schriftführer*in', value: 'schriftführer'},
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
        subtitle,
        bild
      }
    }
  }
}
