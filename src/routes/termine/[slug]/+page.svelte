<script>
  import {Map, Geocoder, Marker, controls} from '@beyonk/svelte-mapbox'
  import {PortableText} from '@portabletext/svelte'
  import {onMount} from 'svelte'
  import Section from '../../../components/Section.svelte'
  import TerminBtnBack from '../../../components/TerminBtnBack.svelte'
  import TerminOverview from '../../../components/TerminOverview.svelte'

  export let data
  let termin = data.body.termin

  let mapComponent
  let isIntersecting = false

  onMount(() => {
    let overview = document.querySelector('.overview')

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting
      },
      {
        rootMargin: '0px'
      }
    )
    if (overview) {
      observer.observe(overview)
    }

    return () => {
      observer.unobserve(overview)
    }
  })

  const handleMap = (e) => {
    // Usage of methods like setCenter and flyto
    mapComponent.setCenter([termin.location.lng, termin.location.lat]) // zoom is optional
    mapComponent.flyTo({center: [termin.location.lng, termin.location.lat]}) // documentation (https://docs.mapbox.com/mapbox-gl-js/example/flyto)
  }
</script>

<Section style={'primary'}>
  {#if termin.description}
    <div class="portableText">
      <PortableText value={termin.description} />
    </div>
  {/if}
</Section>

<TerminBtnBack {termin} {isIntersecting} />

<Section style={'primary-dark'}>
  <div class="overview">
    <TerminOverview {termin} />
  </div>
</Section>

{#if termin.location}
  <section class="map">
    <Map
      accessToken="pk.eyJ1IjoibnZoZCIsImEiOiJjbDNkMzhqeGIwNGpiM2ttbzF1MnR5MGp0In0.WQcrFtIFfgHAp5XNmTY9Dg"
      style="mapbox://styles/nvhd/cl4du89ju001v16qc59uw53cj"
      bind:this={mapComponent}
      on:ready={(e) => handleMap(e)}
      options={{
        scrollZoom: false,
        dragPan: false,
        doubleClickZoom: false,
        maxZoom: 20,
        minZoom: 13
      }}
    >
      <Marker lat={termin.location.lat} lng={termin.location.lng} color="#a5524a" popup={false} />
    </Map>
  </section>
{/if}

<style>
  :global(.mapboxgl-ctrl-attrib-inner) {
    display: none;
  }

  :global(.mapboxgl-ctrl-logo) {
    display: none !important;
  }

  :global(.portableText p) {
    color: var(--lightBase);
    line-height: 1.7;
  }

  .map {
    height: 300px;
  }
</style>
