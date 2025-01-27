import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cartier.com/en-us/home');
  await page.getByRole('menu', { name: 'Watches' }).click();
  
  await page.getByRole('link', { name: 'View all' }).click();
 
  await page.getByRole('link', { name: 'Refine by Selection for: Her' }).click();
  
  await page.getByRole('link', { name: 'Refine by Case material: Yellow gold' }).click();
  await page.getByRole('link', { name: 'Refine by Case size: Mini' }).click();
  await page.getByText('Tank Louis Cartier watch Mini').click();
  await page.getByRole('tab', { name: 'Movement' }).click();
  await page.getByRole('tab', { name: 'Hands' }).click();
  await page.locator('.product-gallery__item').first().click();
  await page.locator('#pdpZoom-null').getByRole('button', { name: 'Next Slide' }).click();
  await page.locator('#pdpZoom-null').getByRole('button', { name: 'Next Slide' }).click();
  await page.getByRole('button', { name: 'Close modal' }).click();
  await page.getByRole('button', { name: 'Add to Bag', exact: true }).click();
  await page.getByRole('button', { name: 'View My Shopping Bag' }).click();
});