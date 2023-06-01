import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';
import { load } from './+page';
import { categories } from '../moto';

describe('Category List Items', () => {
    render(Page, {data: load()})
    const listItems = screen.getAllByRole('listitem')
    Array.from(listItems).forEach((item) => {    
        const catItem = item.getElementsByTagName('a')[0]
        const category = categories.find((cat) => cat.name === catItem.innerHTML)
        it(`/categories/ link should match id for category.name`, () => {
            expect(catItem.getAttribute('href')).toEqual(`/categories/${category?.id}`)
        })
    })
})