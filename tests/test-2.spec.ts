import { test, expect } from '@playwright/test';

test('Verification of product detail display', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com');
    await page.locator('img[alt="Combination Pliers"]').click();

    await expect(page).toHaveURL(/^https:\/\/practicesoftwaretesting\.com\/product/);

    await expect(page.locator('[data-test="product-name"]')).toHaveText('Combination Pliers');
  
    await expect(page.locator('[data-test="unit-price"]')).toHaveText('14.15'); 
  
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
  
    await expect(page.locator('[data-test="add-to-favorites"]')).toBeVisible();
  });