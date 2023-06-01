import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';
import { load } from './+page';

describe('Page Slot Test', () => {
	render(Page, { data: load() });
	const main = screen.getByRole('main')
	it('Has the expected featured asset', () => {
		expect(main.querySelector('div#featured h2').innerHTML)
			.toEqual('Featured Bike')
		expect(main.querySelector('img')?.getAttribute('src'))
			.toMatch(new RegExp("/images/motorcycle_\\d\\.jpg"))
	})
});