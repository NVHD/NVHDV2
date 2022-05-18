<script>
  import Heading from '../components/Heading.svelte'
  import Section from '../components/Section.svelte'

  export let personen

  // Add each person to its role
  // ( There is only one role per Person so I can hardcode the 0 )
  const personenRollen = personen.reduce((previousValue, currentValue) => {
    // Check if role key exists
    if (!previousValue.hasOwnProperty(`${currentValue.rollen[0]}`)) {
      // Create it as emty array if not
      previousValue[currentValue.rollen[0]] = []
    }

    // Add person to role
    previousValue[currentValue.rollen[0]].push(currentValue.name)

    return previousValue
  }, {})

  console.log(personenRollen)
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'der'} secondLine={'Vorstand'} />
  </h2>

  <div>
    <h3>Präsident*in</h3>
    <p>{personenRollen.president}</p>
  </div>

  <div>
    <h3>Vizepräsident*in</h3>
    <p>{personenRollen.vizepresident}</p>
  </div>

  <div>
    <h3>Kassierer*in</h3>
    <p>{personenRollen.kassierer}</p>
  </div>

  <div>
    <h3>Schriftführer*in</h3>
    <p>{personenRollen.schriftführer}</p>
  </div>

  <div>
    <h3>Elferräte</h3>
    {#each personenRollen.elferrat as elferrat}
      <p>{elferrat}</p>
    {/each}
  </div>
</Section>

<style>
  div {
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--primary);
    margin: 0;
  }

  p {
    margin: 0;
  }
</style>
