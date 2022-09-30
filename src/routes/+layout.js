import {client} from '$lib/sanityClient'

export const prerender = true

export const load = async ({url}) => {
  const data = await client.fetch(`*[_type == "einstellungen"][0]{logo}`)

  if (data) {
    return {
      status: 200,
      body: {
        data,
        url
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
