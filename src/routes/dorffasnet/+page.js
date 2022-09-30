import {client} from '$lib/sanityClient'

export async function load() {
  const data = await client.fetch(
    `*[_type == "figur" && einsatz[0] == "dorf"]{bild, description, name}`
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
