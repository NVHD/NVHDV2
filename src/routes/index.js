import {client} from '$lib/sanityClient'

export async function get() {
  const data = {}
  data.figuren = await client.fetch(
    `*[_type == "imageComp" && place[0] == "index" || _type == "imageComp"]{figuren[]->}`
  )
  data.termine = await client.fetch(
<<<<<<< HEAD
    `*[_type == "termin"]| order(dateTime(date) asc)[0...4]  {date, dateText, description, featured, image, location, locationName, slug, title}`
=======
    `*[_type == "termin"][0...4] | order(dateTime(date) asc) {date, dateText, description, featured, image, location, locationName, slug, title}`
>>>>>>> 26e9f54f5a51f895305d7f7cc1a0cb2164a3c655
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
