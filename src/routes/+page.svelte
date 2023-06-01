<!-- index-->
<script>
  import FeaturedMotorcycle from './FeaturedMotorcycle.svelte';
  import MotorcycleTable from './MotorcycleTable.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  let featured = data.motorcycles[3];
</script>
<main id="main">
  <div id="featured">
    <h2>Featured Bike!!!</h2>
    <FeaturedMotorcycle featured={featured}/>
  </div>
  <MotorcycleTable motorcycles={data.motorcycles}/>
</main>
