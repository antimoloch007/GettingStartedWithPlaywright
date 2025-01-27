import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test', async ({ page }) => {
  await page.goto('https://www.cartier.com/en-us/home');
  await page.getByRole('menu', { name: 'Watches' }).click();
  await page.getByRole('link', { name: 'View Watches: Tank' }).click();
  await expect(page).toHaveURL('https://www.cartier.com/en-us/watches/collections/tank/');
  await page.getByRole('link', { name: 'Refine by Selection for: Her' }).click();
  await expect(page.getByRole('link', { name: 'Her', exact: true })).toHaveCount(1);
  await page.getByRole('link', { name: 'Refine by Case material: Yellow gold' }).click();
  await expect(page.getByRole('link', { name: 'Yellow gold', exact: true })).toHaveCount(1);
  await expect(page.getByText('Tank Louis Cartier watch Mini')).toHaveCount(1);
  await page.getByText('Tank Louis Cartier watch Mini').click();
  await page.getByRole('button', { name: 'Add to Bag', exact: true }).click();
  await expect(page.getByRole('button', { name: 'View My Shopping Bag' })).toHaveCount(1);
  await page.getByRole('button', { name: 'View My Shopping Bag' }).click();
  await expect(page).toHaveURL('https://www.cartier.com/en-us/cart');
  await expect(page.getByRole('button', { name: 'Move to wishlist, Tank Louis' })).toHaveCount(1);
  await page.getByRole('button', { name: 'Move to wishlist, Tank Louis' }).click();
  // await expect(page.getByRole('button', { name: 'Wish List' })).toHaveCount(1);
  await page.getByRole('button', { name: 'Wish List' }).click();
  await expect(page).toHaveURL('https://www.cartier.com/en-us/wishlist');
  await expect(page.getByRole('link', { name: 'Tank Louis Cartier watch Mini' })).toHaveCount(1);
});