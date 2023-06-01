/* categories/id */
import { motorcycles } from '../../moto.js';

export function load({params}) {
  return {
    motorcycle_filter: motorcycles.filter (mc =>  mc.category_id == params.id )
  }
}