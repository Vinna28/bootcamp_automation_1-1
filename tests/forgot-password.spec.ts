import { test, expect } from '@playwright/test';

test('test case positive', async ({ page }) => {
  await page.goto('https://www.emra.com/login');
  await page.getByRole('link', { name: 'Forgot?' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@yopmail.com');
  await page.getByRole('button', { name: 'Reset Password' }).click();
});

test('test case negative', async ({ page }) => {
  await page.goto('https://www.emra.com/login');
  await page.getByRole('link', { name: 'Forgot?' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@yopmail.com');
  await page.getByRole('button', { name: 'Reset Password' }).click();
});