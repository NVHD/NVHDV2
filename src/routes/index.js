import {client} from '$lib/sanityClient'

export async function get() {
  const data = {}
  data.figuren = await client.fetch(
    `*[_type == "imageComp" && place[0] == "index" || _type == "imageComp"]{figuren[]->}`
  )
  data.termine = await client.fetch(
    `*[_type == "termin"][0...4] | order(dateTime(date) asc) {date, dateText, description, featured, image, location, locationName, slug, title}`
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
