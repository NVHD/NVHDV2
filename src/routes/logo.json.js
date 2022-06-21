import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(`*[_type == "einstellungen"][0]{logo}`)

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
