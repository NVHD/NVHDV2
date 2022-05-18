import {client} from '$lib/sanityClient'

export async function get() {
  const data = await client.fetch(
    `*[
      _type == "person" 
      && rollen[0] == "president" 
      || rollen[0] == "schriftführer" 
      || rollen[0] == "kassierer"]
      {name, rollen[], adresse, email, telefon}`
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
