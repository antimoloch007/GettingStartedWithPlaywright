import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toHaveCount(1);
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Feed the dog');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toHaveValue('Feed the dog');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await expect(page.getByTestId('todo-title')).toHaveCount(1);
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('water the plants');
  await expect(page.getByRole('textbox', { name: 'What needs to be done?' })).toHaveValue('water the plants');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Feed the dog' }).getByLabel('Toggle Todo').check();
  await expect(page.getByRole('listitem').filter({ hasText: 'Feed the dog' }).getByRole('checkbox')).toBeChecked();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('listitem').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').check();
  await expect(page.getByRole('listitem').filter({ hasText: 'water the plants' }).getByRole('checkbox')).toBeChecked();
  await expect(page.getByText('All Active Completed')).toHaveText('All Active Completed');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.getByTestId('todo-title')).toHaveCount(0);
});