import { test, expect } from '@playwright/test';
import { credentials } from '../credentials.ts'; 

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto(credentials.loginPage);
  await page.getByTestId('email').fill(credentials.email);
  await page.getByTestId('password').fill(credentials.password);
  await page.getByTestId('login-submit').click();
  await expect(page).toHaveURL(credentials.accountPage);
  await expect(page.getByTestId('page-title')).toHaveText('My account');
  const usernameLocator = page.getByText('Jane Doe');
  await expect(usernameLocator).toBeVisible();
});