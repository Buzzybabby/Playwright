import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
    await page.pause();
  await page.goto('https://staging.rise-for-web-v2.pages.dev/login');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test+qa@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'No, maybe later' }).click();
  await page.getByRole('button', { name: 'Okay, got it!' }).dblclick();
  await expect(page.getByRole('paragraph').filter({ hasText: '$3,326.15' })).toBeVisible();
  await page.locator('[data-test-id="swipeable-views"]').getByText('Total Balance').click();
});