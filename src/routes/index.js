import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(
    `*[_type == "figur" && einsatz[0] == "verein"]{bild, description, name}`
  )

  if (data) {
    return {
      status: 200,
      body: {
        figuren: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
