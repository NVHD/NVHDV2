import {client} from '$lib/sanityClient'

export async function load({params: {slug}}) {
  const data = await client.fetch(
    `
      *[_type == "galerie" && slug.current == "${slug}"][0]{
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
