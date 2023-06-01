<script>
  /** @type {import('./$types').PageData} */
  export let motorcycles;
</script>
<table id="motorcycles">
  <thead>
    <tr>
      <th><!-- thumbnail --></th>
      <th>Year</th>
      <th>Manufacturer</th>
      <th>Model</th>
      <th>Category</th>
      <th>Engine</th>
    </tr>
  </thead>
  <tbody>
  {#each motorcycles as { id, model, year, engine_cc, engine_hp, manufacturer_id, manufacturer_name, category_id, category_name }}
    <tr>
      <td><a href="/motorcycle/{id}"><img src="/images/motorcycle_{id}_thumb.jpg" alt="{year} {manufacturer_name} {model}" class="thumbnail"></a></td>
      <td>{year}</td>
      <td><a href="/manufacturer/{manufacturer_id}">{manufacturer_name}</a></td>
      <td><a href="/motorcycle/{id}">{model}</a></td>
      <td><a href="/categories/{category_id}">{category_name}</a></td>
      <td>{engine_cc}cc, {engine_hp}hp</td>
    </tr>
  {/each}
  </tbody>
</table>