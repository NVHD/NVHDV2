import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(
    `*[_type == "termin"]{date, dateText, description, featured, image, location, locationName, slug, title}`
  )

  if (data) {
    return {
      status: 200,
      body: {
        termine: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
