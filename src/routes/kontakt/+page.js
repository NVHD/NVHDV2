import {client} from '$lib/sanityClient'

export async function load() {
  const data = await client.fetch(
    `*[
      _type == "person" 
      && rolle == "präsident" 
      || rolle == "schriftführer" 
      || rolle == "kassierer"]
      {anrede, name, rolle, adresse, email, telefon}`
  )

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
