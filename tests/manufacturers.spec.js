import { expect, test } from '@playwright/test';

test('manufacturers page has all of manufacturers', async ({ page }) => {
	await page.goto('/manufacturers');

	for (const manufacturerFilter of ['BMW', 'Honda', 'Indian', 'Triumph', 'Victory']) { 
		await expect(page.locator('ul li a', {hasText: manufacturerFilter})).toBeVisible() 
	}
})

test('manufacturers/2 has a table with 2 rows (1 + 1 header)', async ({page}) => {
	await page.goto('/manufacturers/2');
	const count = await page.getByRole('row').count()
	expect(count).toEqual(2)
})

test('manufacturers/2 has one cell matching the manufacturer name', async ({page}) => {
	await page.goto('/manufacturers/2');
	const cells = await page.locator('table tr').getByText('Honda').count()
	expect(cells).toEqual(1)
})