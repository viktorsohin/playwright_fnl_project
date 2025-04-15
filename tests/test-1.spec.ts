import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.locator('#email').fill('customer@practicesoftwaretesting.com');
  await page.locator('#password').fill('welcome01');

  await page.locator('.btnSubmit').click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

  await expect(page.locator('h1')).toHaveText('My account');

  const usernameLocator = page.locator('nav').getByText('Jane Doe');
  await expect(usernameLocator).toBeVisible();
});