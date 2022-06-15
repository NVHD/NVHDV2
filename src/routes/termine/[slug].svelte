<script>
  import SanityImage from './../../lib/SanityImage.svelte'
  import {Map, Geocoder, Marker, controls} from '@beyonk/svelte-mapbox'
  import {PortableText} from '@portabletext/svelte'
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {quintOut} from 'svelte/easing'
  import {formatTimeString, getDate, getTime, getWeekDay} from '../../lib/dateTime'
  import Section from '../../components/Section.svelte'
  import ArrowWideRight from '../../components/icons/ArrowWideRight.svelte'
  import ArrowLeft from '../../components/icons/ArrowLeft.svelte'
  import ArrowRight from '../../components/icons/ArrowRight.svelte'
  import Calendar from '../../components/icons/Calendar.svelte'
  import Clock from '../../components/icons/Clock.svelte'
  import Location from '../../components/icons/Location.svelte'

  export let termin

  let mapComponent
  let isIntersecting = false
  let onlyTitle = false

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
  <div class="portableText">
    <PortableText value={termin.description} />
  </div>
</Section>

<a href="/termine" class={isIntersecting ? 'back' : 'back fixed'} sveltekit:noscroll>
  <div class="icon"><ArrowWideRight /></div>

  {#if !isIntersecting && !onlyTitle}
    <div
      in:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
      out:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
      on:outroend={() => {
        onlyTitle = true
      }}
      class="info"
    >
      <h2>
        {termin.title}
      </h2>
      <p>
        {termin.dateText || getDate(new Date(termin.date))}
      </p>
    </div>
  {:else if onlyTitle && isIntersecting}
    <div
      in:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
      out:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
      on:outroend={() => {
        onlyTitle = false
      }}
      class="info"
    >
      <h2>{termin.title}</h2>
    </div>
  {/if}

  {#if termin.image}
    <div class="img">
      <SanityImage image={termin.image} />
    </div>
  {/if}
</a>
<section class="overview">
  <ul>
    <li>
      <div class="item">
        <div class="icon">
          <Calendar title={'Datum'} />
        </div>
        <p>
          {termin.dateText ||
            `${getWeekDay(new Date(termin.date))}, ${getDate(new Date(termin.date))}`}
        </p>
      </div>
    </li>
    <li>
      <div class="item">
        <div class="icon">
          <Clock title={'Treffpunkt'} />
        </div>
        <p>{getTime(termin.date)}</p>
      </div>
    </li>
    {#if termin.startTime}
      <li>
        <div class="item">
          <div class="icon">
            <ArrowRight title={'Abfahrt'} />
          </div>
          <p>{formatTimeString(termin.startTime)}</p>
        </div>
      </li>
    {/if}
    {#if termin.endTime}
      <li>
        <div class="item">
          <div class="icon">
            <ArrowLeft title={'Rückfahrt'} />
          </div>
          <p>{formatTimeString(termin.endTime)}</p>
        </div>
      </li>
    {/if}
    {#if termin.locationName}
      <li>
        <div class="item">
          <div class="icon">
            <Location title={'Veranstaltungsort'} />
          </div>
          <p>{termin.locationName}</p>
        </div>
      </li>
    {/if}
  </ul>
</section>

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

  p {
    color: var(--lightBase);
  }

  h2 {
    color: var(--lightBase-transparent);
    font-size: 1.2rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    z-index: 2;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  .back {
    position: sticky;
    width: 100vw;
    padding: 1rem 1rem;
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    column-gap: 2rem;
    backdrop-filter: blur(10px);
    background-color: var(--primary-dark-transparent);
    box-shadow: 0px -3px 5px #00000042;
    z-index: 200;
    overflow: hidden;
    transition: all 0.2s;
  }

  .fixed {
    position: sticky;
    bottom: 0;
  }

  .back .icon {
    transform: rotate(180deg);
    z-index: 2;
  }

  .back .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .back .img:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(
      95deg,
      rgb(2 87 83) 0%,
      rgba(2, 87, 83, 0.8) 70%,
      rgba(3, 111, 106, 0.3)
    );
    backdrop-filter: blur(1px) grayscale(1);
  }

  .info {
    z-index: 2;
  }

  .overview {
    padding: 2rem 1rem;
    background-color: var(--primary-dark);
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
  }

  .item .icon {
    margin-right: 1rem;
    display: flex;
  }

  .map {
    height: 300px;
  }
</style>
