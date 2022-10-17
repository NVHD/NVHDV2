import {client} from '$lib/sanityClient'

export async function load() {
  const data = {}

  data.personen = await client.fetch(
    `*[
      _type == "person" 
      && rolle == "präsident" 
      || rolle == "schriftführer" 
      || rolle == "kassierer"]
      {anrede, name, rolle, adresse, email, telefon}`
  )

  data.documents = await client.fetch(`
  *[_type == "dokument"]{
    title,
    'file': file.asset->url
  }`)

  if (data.personen && data.documents) {
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
