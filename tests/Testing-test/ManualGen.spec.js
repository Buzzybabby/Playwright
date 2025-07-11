import { test, expect } from '@playwright/test';

test("verify login feature", async ({ page }) => {
    await page.pause();
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator("#username").click();
    await page.locator("#username").fill("tomsmith");

    await page.locator("#password").click();
    await page.locator("#password").fill("SuperSecretPassword!");

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText("Welcome to the Secure Area. When you are done click logout below.")).toBeVisible();

await page.pause()

});
