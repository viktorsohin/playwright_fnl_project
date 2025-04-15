import { test, expect } from '@playwright/test';

test('Verify user can add product to cart', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com');

    await page.locator('[data-test="product-name"]', { hasText: 'Slip Joint Pliers' }).click();

    await expect(page).toHaveURL(/^https:\/\/practicesoftwaretesting\.com\/product/);

    await expect(page.locator('[data-test="unit-price"]')).toHaveText('9.17');

    await expect(page.locator('[data-test="product-name"]')).toHaveText('Slip Joint Pliers');

    await expect(page.locator('[data-test="unit-price"]')).toHaveText('9.17');

    await page.locator('[data-test="add-to-cart"]').click();

    const alert = page.locator('div[role="alert"]');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveText('Product added to shopping cart.');

    await page.waitForTimeout(8000);
    await expect(alert).not.toBeVisible();

    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('1');

    await page.locator('[data-test="nav-cart"]').click();

    await expect(page).toHaveURL(/^https:\/\/practicesoftwaretesting\.com\/checkout/);

    await expect(page.locator('[data-test="product-quantity"]')).toHaveValue('1');

    await expect(page.locator('[data-test="product-title"]')).toHaveText('Slip Joint Pliers');

    await expect(page.locator('[data-test="proceed-1"]')).toBeVisible();
});