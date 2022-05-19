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
          {title: 'Präsident', value: 'präsident'},
          {title: 'Präsidentin', value: 'präsidentin'},
          {title: 'Präsident*in', value: 'präsident*in'},
          {title: 'Vizepräsident', value: 'vizepräsident'},
          {title: 'Vizepräsidentin', value: 'vizepräsidentin'},
          {title: 'Vizepräsident*in', value: 'vizepräsident*in'},
          {title: 'Kassierer', value: 'kassierer'},
          {title: 'Kassiererin', value: 'kassiererin'},
          {title: 'Kassierer*in', value: 'kassierer*in'},
          {title: 'Schriftführer', value: 'schriftführer'},
          {title: 'Schriftführerin', value: 'schriftführerin'},
          {title: 'Schriftführer*in', value: 'schriftführer*in'},
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
