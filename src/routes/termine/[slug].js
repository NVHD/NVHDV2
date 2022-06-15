import {client} from '$lib/sanityClient'

export async function get({params: {slug}}) {
  const data = await client.fetch(
    `*[_type == "termin" && slug.current == "${slug}"][0]{date, dateText, startTime, endTime, description, featured, image, location, locationName, slug, title}`
  )

  if (data) {
    return {
      status: 200,
      body: {
        termin: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
