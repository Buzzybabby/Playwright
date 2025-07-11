import { test, expect } from '@playwright/test';
test.only("verify wallet feature" , async ({page}) =>{
      await page.pause();
    await page.goto("https://staging.rise-for-web-v2.pages.dev/login")

     await page.locator("input#email").click();
    await page.locator("input#email").fill("test+qa@gmail.com");

    await page.locator("input#password").click();
    await page.locator("input#password").fill("password");
    await page.getByRole('button', { name: 'sign in' }).click();

    page.on('dialog', async (dialog) => {
  expect(dialog.type()).toContain('alert');
  await dialog.accept(); 
});

  const allowButton = page.getByRole('button', { name: 'yes, allow notifications' });
  if(await allowButton.isVisible()) {
    await allowButton.click();

     const okButton = page.getByRole('button', { name: 'Okay, got it!' });
    if (await okButton.isVisible()) {
      await okButton.click();
    }
      
 const skipCard = page.getByRole('button', { name: "I'll link later from account & cards" });
if (await skipCard.isVisible()) {
  await skipCard.click();
}

     const walletLink = page.getByRole('link', { name: 'wallet'}); 
await expect(walletLink).toBeVisible();
await walletLink.click();
  }


});