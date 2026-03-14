import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //precondition
  await page.goto('https://www.emra.chat/login');
  const email = 'testingemrachat@gmail.com'
  const password = 'asdasdasd'
  
  //step
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  //assertion
  await expect(page.getByText('Request failed with status')).toBeVisible();
});