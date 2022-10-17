<script>
  import BtnEmail from '../../components/BtnEmail.svelte'
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import {getGender} from '$lib/getGender'

  export let data
  let {personen, documents} = data.body.data

  // Add each person to its role
  // ( There is only one role per Person so I can hardcode the 0 )
  const personenRollen = personen.reduce((previousValue, currentValue) => {
    // Add person to role
    previousValue[currentValue.rolle] = currentValue

    return previousValue
  }, {})
</script>

<Section style={'white'} gap={2}>
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

  <div>
    <h3>Anmeldungen</h3>
    <p>
      Ganz einfach das Anmeldeformular ausfüllen, den Datenschutzzettel unterschreiben und uns per
      Mail oder persönlich zukommen lassen. Alles Weitere klären wir dann. <span
        role="img"
        aria-label="Celebration"
        >🎉
      </span>
    </p>
  </div>

  <div class="documents">
    {#each documents as documet}
      <a target="_blank" rel="noopener noreferrer" href={documet.file}>{documet.title}</a>
    {/each}
  </div>
</Section>

<style>
  h3 {
    margin: 0;
  }

  .documents {
    display: flex;
    flex-direction: column;
  }
</style>
