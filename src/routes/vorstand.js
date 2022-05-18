import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(`*[_type == "person"]{name, rollen[]}`)

  if (data) {
    return {
      status: 200,
      body: {
        personen: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
