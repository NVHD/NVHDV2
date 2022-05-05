import ExtendedDate from '../../components/extendedDate'
import TimePicker from '../../components/timePicker'

export default {
  name: 'termin',
  title: 'Termine',
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
      name: 'featured',
      title: 'Termin hervorheben',
      type: 'boolean'
    },
    {
      name: 'dateText',
      title: 'Datum als Text',
      description:
        'Alternativtext der anstelle des Datums angezeigt wird, z.B. bei unbekannten Terminbeginn. Bitte im Datum Feld angeben wielange der Termin angezeigt werden soll!',
      type: 'string'
    },
    {
      name: 'startTime',
      title: 'Hinfahrt',
      description: 'Abfahrt in Heudorf',
      type: 'string',
      inputComponent: TimePicker,
      options: {
        dateFormat: 'HH:mm',
        timeStep: 15,
        timeCaption: 'Zeit',
        timeFormat: 'HH:mm',
        placeholder: '',
        clearBtnText: 'löschen'
      }
    },
    {
      name: 'endTime',
      title: 'Rückfahrt',
      description: 'Abfahrt vom Veranstaltungsort',
      type: 'string',
      inputComponent: TimePicker,
      options: {
        dateFormat: 'HH:mm',
        timeStep: 15,
        timeCaption: 'Zeit',
        timeFormat: 'HH:mm',
        placeholder: '',
        clearBtnText: 'löschen'
      }
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image'
    },
    {
      name: 'showFullImage',
      title: 'Volles Bild anzeigen',
      description:
        'In dem Termin wir das Bild voll angezeigt ( Standardmäßig ist das Bild in den Button integriert.)',
      type: 'boolean'
    },
    {
      name: 'locationName',
      title: 'Ort',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Karte',
      type: 'geopoint'
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'blockContent'
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
    }
  ],
  orderings: [
    {
      title: 'alt zu neu',
      name: 'terminDateAzN',
      by: [{field: 'date.utc', direction: 'asc'}]
    }
  ]
}
