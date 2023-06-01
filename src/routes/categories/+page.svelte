<!-- categories/index -->
<script>
    import { categories } from "../moto";
    export let data;
</script>
<ul>
    {#each data.categories as {id, name}}
    <li><h2><a href="/categories/{id}">{name}</a></h2></li>
    {/each}
</ul>