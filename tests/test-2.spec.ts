import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Test step', async () => {
    
    // go to page and check if the URL is correct
    await page.goto('https://www.succinct.xyz/');
    await expect(page).toHaveURL('https://www.succinct.xyz/');

    // wait for page to load and check if the button is present
    const page1Promise = page.waitForEvent('popup');
    await expect(page.getByRole('link', { name: 'Build with SP1' })).toHaveCount(1);
    
    // click on the button and check if the URL is correct
    await page.getByRole('link', { name: 'Build with SP1' }).click();
    const page1 = await page1Promise;
    await page1.goto('https://docs.succinct.xyz/docs/introduction');

    // check if the Installation page is present and click on it
    await expect(page1.getByRole('link', { name: 'Installation' })).toHaveCount(1);
    await page1.getByRole('link', { name: 'Installation' }).click();
    await expect(page1).toHaveURL('https://docs.succinct.xyz/docs/getting-started/install');
    
    // check if the Requirements links are present
    await expect(page1.getByRole('listitem').filter({ hasText: 'Git' })).toHaveCount(1);
    await expect(page1.getByRole('listitem').filter({ hasText: 'Rust (Nightly)' })).toHaveCount(1);
    await expect(page1.getByRole('listitem').filter({ hasText: 'Docker' })).toHaveCount(1);

    // check that the install insutrctions are correct
    await expect(page1.getByRole('code').filter({ hasText: 'curl -L https://sp1.succinct.' }), "should have the correct text").toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'curl -L https://sp1.succinct.' })).toHaveText('curl -L https://sp1.succinct.xyz | bash');
    
    await expect(page1.locator('pre').filter({ hasText: 'sp1up' }).getByRole('code'), "should have the correct text").toHaveCount(1);
    await expect(page1.locator('pre').filter({ hasText: 'sp1up' }).getByRole('code')).toHaveText('sp1up');

    await expect(page1.locator('pre').filter({ hasText: 'cargo prove --version' }).getByRole('code')).toHaveCount(1);
    await expect(page1.locator('pre').filter({ hasText: 'cargo prove --version' }).getByRole('code')).toHaveText('cargo prove --version');

    await expect(page1.getByRole('code').filter({ hasText: 'RUSTUP_TOOLCHAIN=succinct' })).toHaveCount(1);
    await expect(page1.locator('pre').filter({ hasText: 'RUSTUP_TOOLCHAIN=succinct' }).getByRole('code')).toHaveText('RUSTUP_TOOLCHAIN=succinct cargo --version');
    
    await expect(page1.getByRole('code').filter({ hasText: 'cargo +succinct --version' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'cargo +succinct --version' })).toHaveText('cargo +succinct --version');

    await expect(page1.getByRole('code').filter({ hasText: 'rm ~/.cargo/bin/cargo-prove' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'rm ~/.cargo/bin/cargo-prove' })).toHaveText('rm ~/.cargo/bin/cargo-prove');
    
    await expect(page1.getByRole('code').filter({ hasText: 'rm ~/.sp1/bin/cargo-prove' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'rm ~/.sp1/bin/cargo-prove' })).toHaveText('rm ~/.sp1/bin/cargo-prove');

    await expect(page1.getByText('git clone git@github.com:succinctlabs/sp1.gitcd sp1cd cratescd clicargo install')).toHaveCount(1);
    await expect(page1.getByText('git clone git@github.com:succinctlabs/sp1.gitcd sp1cd cratescd clicargo install')).toHaveText('git clone git@github.com:succinctlabs/sp1.gitcd sp1cd cratescd clicargo install --locked --force --path .cd ~cargo prove build-toolchain');
    
    await expect(page1.getByRole('code').filter({ hasText: 'cargo prove install-toolchain' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'cargo prove install-toolchain' })).toHaveText('cargo prove install-toolchain');
    
    await expect(page1.getByRole('code').filter({ hasText: 'rustup toolchain list' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'rustup toolchain list' })).toHaveText('rustup toolchain list');

    await expect(page1.getByRole('code').filter({ hasText: 'rustup toolchain remove' })).toHaveCount(1);
    await expect(page1.getByRole('code').filter({ hasText: 'rustup toolchain remove' })).toHaveText('rustup toolchain remove succinct');

  });
});