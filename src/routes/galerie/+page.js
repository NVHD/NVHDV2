import {client} from '$lib/sanityClient'

export async function load() {
  const data = await client.fetch(
    `*[_type == "galerie"] | order(date desc) {title, date, cover, slug}`
  )

  if (data) {
    return {
      status: 200,
      body: {
        gallery: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
