import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Layout from './+layout.svelte';
import { not_equal } from 'svelte/internal';

describe('Page Layout Test', () => {
	render(Layout, {})
	it('Has the expected title and link', () => {
        const header = screen.getByRole('heading')
		expect(header.innerHTML).toEqual('<a href="/">Motorcycle Mania!</a>')
	})
    it('Should not say YOUR NAME at the bottom', () => {
        const footer = screen.getByRole('contentinfo')
        expect(footer.innerHTML).not.toEqual('<p>© 2020 YOUR NAME</p>')
    })
}) 