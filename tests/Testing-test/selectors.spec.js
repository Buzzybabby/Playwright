import {test, expect} from '@playwright/test'

test("Learning selectors", async ({page}) =>{


    // navigate to the web page
   await page.goto('http://127.0.0.1:5500/clickMe.html')



    // selecting by ID
    await page.locator('#clickButton').click()

    // selecting by Class 
    await page.locator('.button-style').click()

    // 3 by tag and class
    await page.locator('button.button-style').click()

// 4 by attribute value
await page.locator('[data-action="increment"]').click()

// 5 partial attribute
await page.locator('[role="button"]').click()

// 6 by text content
await page.locator('text= CLICK ME').click()

// 7 combine selectors for precision, class and text  to find exact text match
await page.locator('.button-style:text("CLICK ME")').click()

// 8 find elements containing specific text, has-text 
await page.locator('button:has-text("click me")').click() 

// 9 attribute and text combination
await page.locator('[data-action="increment"]:text("click me")').click()

// 10 playwright locators

    await page.pause()
}) 