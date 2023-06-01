/* motorcycle/id */
import { error } from '@sveltejs/kit';
import { motorcycles } from '../../moto.js';

export function load({params}) {
  /* TODO: Delete the following line, then */
  throw error(404, 'Fix this in src/routes/motorcycle/[id]/+page.js')
  /* Uncomment the lines below and fill in a function for featured that will yield the right motorcycle
  // return {
  //  featured: /* pick out the motorcycle from motorcycles matching params.id */
  //}
}