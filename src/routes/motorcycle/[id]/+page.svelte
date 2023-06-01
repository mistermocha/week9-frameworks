<!-- motorcycle/id -->
<script>
    import FeaturedMotorcycle from "../../FeaturedMotorcycle.svelte";
    export let data;
    console.log(data.featured)
</script>
<FeaturedMotorcycle featured={data.featured}/>