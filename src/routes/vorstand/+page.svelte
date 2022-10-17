<script>
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import {getGender} from '../../lib/getGender'

  export let data
  let {personen} = data.body

  // Add each person to its role
  // ( There is only one role per Person so I can hardcode the 0 )
  const personenRollen = personen.reduce((previousValue, currentValue) => {
    // Check if role key exists
    if (!previousValue.hasOwnProperty(`${currentValue.rolle}`)) {
      // Create it as emty array if not
      previousValue[currentValue.rolle] = []
    }

    // Add person to role
    previousValue[currentValue.rolle].push({
      anrede: currentValue.anrede,
      name: currentValue.name
    })

    return previousValue
  }, {})
</script>

<Section style={'white'} gap={1}>
  <h2>
    <Heading style={'h3'} firstLine={'der'} secondLine={'Vorstand'} />
  </h2>

  <div>
    <h3>Präsident{getGender(personenRollen.präsident[0].anrede)}</h3>
    <p>{personenRollen.präsident[0].name}</p>
  </div>

  <div>
    <h3>Vizepräsident{getGender(personenRollen.vizepräsident[0].anrede)}</h3>
    <p>{personenRollen.vizepräsident[0].name}</p>
  </div>

  <div>
    <h3>Kassierer{getGender(personenRollen.kassierer[0].anrede)}</h3>
    <p>{personenRollen.kassierer[0].name}</p>
  </div>

  <div>
    <h3>Schriftführer{getGender(personenRollen.schriftführer[0].anrede)}</h3>
    <p>{personenRollen.schriftführer[0].name}</p>
  </div>

  <div>
    <h3>Elferräte</h3>
    {#each personenRollen.elferrat as elferrat}
      <p>{elferrat.name}</p>
    {/each}
  </div>
</Section>

<style>
  h3 {
    color: var(--primary);
    margin: 0;
  }

  p {
    margin: 0;
  }
</style>
