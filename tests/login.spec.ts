import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.emra.chat/');
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!3');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
});