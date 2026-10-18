import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
import path from 'node:path';
import fs from 'fs'
import { isUtf8 } from 'node:buffer';
import { json } from 'node:stream/consumers';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// dotenv.config ({ path: "./envfiles/.env." + process.env.TestEnv})
//  const devobj = fs.readFileSync("./envfiles/.env.dev",{encoding: 'Utf8'})
//  const UATobj = fs.readFileSync("./envfiles/.env.UAT")
// export const devonjval = dotenv.parse(devobj)

export default defineConfig({
  // grep:/UI/,
  // grepInvert:/SMOKEPROD/,
  // reporter: [[json, {outputfile:'jsonreport2.json' }]],
  reporter: [["allure-Playwright", {outputfolder : "Allurerepoerfiles"}]],
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  timeout:20000,

  expect:{

    timeout: 8000,
  },


  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:"on",
    video:'on',
    baseURL:"https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {Accept: "application/json"},
     
    
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    //     {
    //   name: 'Iphone',
    //   use: { ...devices['iPhone 15 Plus'] },
    // },


    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
