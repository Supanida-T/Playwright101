// @ts-check
const { test, expect } = require('@playwright/test');

test('Hello Playwright on Facebook', async ({ page }) => {
    await page.goto('https://facebook.com/');

// Input User and Password
    await page.getByTestId('royal_email').fill('username');
    const emailCheck = page.locator('#email');
    await expect(emailCheck).toHaveValue('username');
    
    await page.getByTestId('royal_pass').fill('password');
    const passwordCheck = page.locator('#pass');
    await expect(passwordCheck).toHaveValue('password');

// Login Facebook
    const Login = await page.getByTestId('royal_login_button')
    await Login.press('Enter');

// Post Hello Playwright on Facebook
    await page.getByRole('link', { name: 'Facebook' }).click();
    await page.getByRole('button', { name: 'What\'s on your mind,' }).click();
    await page.getByLabel('What\'s on your mind,').fill('Hello Playwright');
    await page.getByLabel('Post', { exact: true }).click();

    // await expect(page.locator('#result-stats')).toHaveText(/Hello Playwright/);

});
