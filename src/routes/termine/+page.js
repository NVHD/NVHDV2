import {client} from '$lib/sanityClient'

export async function load() {
  const data = await client.fetch(
    `*[_type == "termin" && dateTime(date) > dateTime(now()) - 60*60*24*1] | order(dateTime(date) asc) {date, dateText, description, featured, image, location, locationName, slug, title}`
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
