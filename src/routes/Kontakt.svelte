<script>
  import Heading from '../components/Heading.svelte'
  import Section from '../components/Section.svelte'

  export let personen

  // Add each person to its role
  // ( There is only one role per Person so I can hardcode the 0 )
  const personenRollen = personen.reduce((previousValue, currentValue) => {
    // Add person to role
    previousValue[currentValue.rollen[0]] = currentValue

    return previousValue
  }, {})

  console.log(personenRollen)
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'dein'} secondLine={'Kontakt'} />
  </h2>

  <div>
    <h3>Postadresse</h3>
    <p>Narrenverein 'Heuliecher' Heudorf e.v.</p>
    <p>Schriftführer {personenRollen.schriftführer.name}</p>
    <p>{personenRollen.schriftführer.adresse.strassehausnummer}</p>
  </div>

  <div>
    <h3>Präsident</h3>
    <p>{personenRollen.president.name}</p>
    <p>{personenRollen.president.adresse.strassehausnummer}</p>
    <p>{personenRollen.president.adresse.postleizahl} {personenRollen.president.adresse.ort}</p>
    <p>{personenRollen.president.telefon}</p>
    <p>{personenRollen.president.email}</p>
  </div>

  <div>
    <h3>Kassier</h3>
    <p>{personenRollen.kassierer.name}</p>
    <p>{personenRollen.kassierer.email}</p>
  </div>
</Section>

<style>
  div {
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0;
  }
</style>
