import {client} from '$lib/sanityClient'

export async function get({params: {slug}}) {
  const data = await client.fetch(
    `
      *[_type == "galerie" && slug.current == "fasnacht-2020"][0]{
        title,
        'galerie': galerie.bild[]{asset->{metadata, url}}
      } 
    `
  )

  if (data) {
    return {
      status: 200,
      body: {
        images: data.galerie,
        title: data.title
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
