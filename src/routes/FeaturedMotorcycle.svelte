<script>
    /** @type {import('./$types').PageData} */
    export let featured;
</script>
<div id="motorcycle">
    <h3><a href="/motorcycle/{featured.id}">{featured.year} {featured.manufacturer_name} {featured.model}</a></h3>
    <a href="/motorcycle/{featured.id}"><img src="/images/motorcycle_{featured.id}.jpg" alt="{featured.year} {featured.manufacturer_name} {featured.model}"></a>
    <h4>Manufacturer: <a href="/manufacturer/{featured.manufacturer_id}">{featured.manufacturer_name}</a></h4>
    <p>{featured.engine_cc}cc, {featured.engine_hp}hp</p>
</div>