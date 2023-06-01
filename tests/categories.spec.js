import { expect, test } from '@playwright/test';
import { getAllByText } from '@testing-library/svelte';

test('categories page has all of categories', async ({ page }) => {
	await page.goto('/categories');

	for (const catFilter of [
		{ hasText: 'Naked'}, 
		{ hasText: 'Dual-Sport'},
		{ hasText: 'Cruiser'}, 
		{ hasText: 'Sport', hasNotText: 'Dual'}, // have to do this to avoid matching dual-sport
	]) { await expect(page.locator('ul li a', catFilter)).toBeVisible() }
})

test('categories/1 has an expected number of 3 motorcycles', async ({page}) => {
	await page.goto('/categories/1');
	const count = await page.getByRole('row').count()
	expect(count).toEqual(4) // 3 rows plus a header
})

test('categories/1 has only Naked', async ({page}) => {
	await page.goto('/categories/1');
	const cells = await page.locator('table tr').getByText('Naked').count()
	expect(cells).toEqual(3) // 3 cells that match the cat name
})