import {client} from '$lib/sanityClient'

export async function load() {
  const data = await client.fetch(`*[_type == "chronik"]{text}`)

  if (data) {
    return {
      status: 200,
      body: {
        text: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
