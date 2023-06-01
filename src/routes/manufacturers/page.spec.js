import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';
import { load } from './+page';
import { manufacturers } from '../moto';

describe('Category List Items', () => {
    render(Page, {data: load()})
    const listItems = screen.getAllByRole('listitem')
    Array.from(listItems).forEach((item) => {    
        const mfrItem = item.getElementsByTagName('a')[0]
        const manufacturer = manufacturers.find((mfr) => mfr.name === mfrItem.innerHTML)
        it(`/manufacturers/ link should match id for ${manufacturer.name}`, () => {
            expect(mfrItem.getAttribute('href')).toEqual(`/manufacturer/${manufacturer?.id}`)
        })
    })
})