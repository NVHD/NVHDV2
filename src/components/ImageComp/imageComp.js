import {client} from '$lib/sanityClient'

console.log(client)

export async function get() {
  const data = await client.fetch(`*[_type == "figur" && einsatz[0] == "verein"]`)

  console.log(`client: ${client}`)
  console.log(`data: ${data}`)

  if (data) {
    return {
      status: 200,
      body: {
        figuren: data
      }
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error')
  }
}
