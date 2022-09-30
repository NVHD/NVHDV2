import {client} from '$lib/sanityClient'

export async function load() {
  const data = {}
  data.figuren = await client.fetch(
    `*[_type == "imageComp" && place[0] == "index" || _type == "imageComp"]{figuren[]->}`
  )
  data.termine = await client.fetch(
    `*[_type == "termin"]| order(dateTime(date) asc)[0...4]  {date, dateText, description, featured, image, location, locationName, slug, title}`
  )

  if (data) {
    return {
      status: 200,
      body: {
        data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
