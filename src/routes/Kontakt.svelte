<script>
  import BtnEmail from './../components/BtnEmail.svelte'
  import Heading from '../components/Heading.svelte'
  import Section from '../components/Section.svelte'
  import {getGender} from '../lib/getGender'

  export let personen

  // Add each person to its role
  // ( There is only one role per Person so I can hardcode the 0 )
  const personenRollen = personen.reduce((previousValue, currentValue) => {
    // Add person to role
    previousValue[currentValue.rolle] = currentValue

    return previousValue
  }, {})
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'dein'} secondLine={'Kontakt'} />
  </h2>

  <div>
    <h3>Postadresse</h3>
    <p>Narrenverein 'Heuliecher' Heudorf e.v.</p>
    <p>
      Schriftführer{getGender(personenRollen.schriftführer.anrede)}
      {personenRollen.schriftführer.name}
    </p>
    <p>{personenRollen.schriftführer.adresse.strassehausnummer}</p>
  </div>

  <div>
    <h3>Präsident{getGender(personenRollen.präsident.anrede)}</h3>
    <p>{personenRollen.präsident.name}</p>
    <p>{personenRollen.präsident.adresse.strassehausnummer}</p>
    <p>{personenRollen.präsident.adresse.postleizahl} {personenRollen.präsident.adresse.ort}</p>
    <p>{personenRollen.präsident.telefon}</p>
    <BtnEmail email={personenRollen.präsident.email} />
  </div>

  <div>
    <h3>Kassier</h3>
    <p>{personenRollen.kassierer.name}</p>
    <BtnEmail email={personenRollen.kassierer.email} />
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
