/* motorcycle/id/page.spec.js */

import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';

describe('Motorcycle Page', () => {
  let fakeFeatured =   {
    id: '9',
    model: 'fakedemo',
    year: '2019',
    engine_cc: '11111',
    engine_hp: '22222',
    manufacturer_id: '6',
    manufacturer_name: 'fakemfr',
    category_id: '1',
    category_name: 'fakecat'
  }
  
  render(Page, { data: { featured: fakeFeatured} })
  it('Should render the fake featured motorcycle', () => {
    expect(screen.getByText('2019 fakemfr fakedemo'))
  })

  it('Make your own unit test here', () => {
    expect(2).toEqual(1)
  })
})