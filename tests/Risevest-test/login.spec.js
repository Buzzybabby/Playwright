import { test, expect } from '@playwright/test';
test.only("verify login feature" , async ({page}) =>{
      await page.pause();
    await page.goto("https://staging.rise-for-web-v2.pages.dev/login")

     await page.locator("input#email").click();
    await page.locator("input#email").fill("test+qa@gmail.com");

    await page.locator("input#password").click();
    await page.locator("input#password").fill("password");
    
    await page.getByRole('button', { name: 'sign in' }).click();

})