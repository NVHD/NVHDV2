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

  {#each Object.keys(personenRollen) as rolle}
    <div>
      <h3>{rolle[0].toUpperCase()}{rolle.slice(1)}</h3>
      {#each personenRollen[rolle] as person}
        <p>{person}</p>
      {/each}
    </div>
  {/each}
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
