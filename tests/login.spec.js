import { test, expect } from '@playwright/test'

test.only("this is a login test", async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/login');  
 await page.locator("#username").click()
 await page.locator("#username").fill("tomsmith")
 await page.locator("#password").click()
 await page.locator("#password").fill("SuperSecretPassword!")
 await page.getByRole('button', { name: /login/i }).click();
 await expect (page.locator('#flash')).toContainText(/You logged into a secure area!/)
 await page.pause()
})
