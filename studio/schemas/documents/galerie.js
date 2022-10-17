import ExtendedDate from '../../components/extendedDate'

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
      title: 'Datum',
      name: 'date',
      type: 'string',
      description:
        'Füge ein Datum hinzu, damit die Gallerie in der richtigen Reihenfolge angezeigt wird.',
      inputComponent: ExtendedDate,
      options: {
        dateFormat: 'd. MMMM yyyy',
        timeFormat: 'HH:mm',
        timeStep: 15,
        toggleText: 'Ganztägig',
        timeCaption: 'Zeit',
        todayButtonText: 'Heute',
        placeholder: '',
        clearBtnText: 'löschen'
      }
    },
    {
      name: 'cover',
      title: 'Titelbild',
      type: 'image'
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
