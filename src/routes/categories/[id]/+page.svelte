<!-- categories/id -->
<script>
    import MotorcycleTable from "../../MotorcycleTable.svelte";
    export let data;
</script>
<MotorcycleTable motorcycles={data.motorcycle_filter}/>