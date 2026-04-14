import { expect, test } from '@playwright/test'
import { mkdir, readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'

const screenshotDir = path.resolve('tests/screenshots')
const require = createRequire(import.meta.url)

test('homepage core content and navigation are accessible', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.getByRole('heading', { name: /Komplexe Anliegen/ })).toBeVisible()
  await expect(page.getByRole('link', { name: /Erstgespräch anfragen/ }).first()).toBeVisible()
  await expect(page.locator('footer')).toBeVisible()
  await expect(page.getByText('+49 931 2607911-0')).toBeVisible()
  await expect(page.getByRole('link', { name: 'info@pentadoc.com' }).first()).toBeVisible()
  await expect(page.locator('#faq')).toBeVisible()

  for (const linkName of ['Leistungen', 'Vorgehen', 'Referenzen', 'Über uns', 'FAQ']) {
    await page.getByRole('link', { name: linkName }).first().click()
    await expect(page).toHaveURL(/#/)
  }
})

test('mobile layout has no horizontal overflow and drawer works', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
  expect(overflow).toBeLessThanOrEqual(1)

  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  await expect(page.getByRole('link', { name: 'Kontakt aufnehmen' })).toBeVisible()
  await page.locator('#mobile-menu').getByRole('link', { name: 'FAQ' }).click()
  await expect(page.locator('#faq')).toBeInViewport()
})

test('hero media is visible and covers the hero area', async ({ page }) => {
  await page.goto('/')
  const media = page.getByTestId('hero-media')
  await expect(media).toBeVisible()

  const box = await media.boundingBox()
  expect(box?.width).toBeGreaterThanOrEqual(1270)
  expect(box?.height).toBeGreaterThan(700)
})

test('axe reports no accessibility violations', async ({ page }) => {
  await page.goto('/')
  const axeSource = await readFile(require.resolve('axe-core/axe.min.js'), 'utf8')
  await page.addScriptTag({ content: axeSource })
  const results = await page.evaluate(async () => {
    return await window.axe.run(document, {
      rules: {
        'color-contrast': { enabled: true },
      },
    })
  })
  expect(results.violations).toEqual([])
})

test('captures required screenshots', async ({ page }) => {
  await mkdir(screenshotDir, { recursive: true })

  const sizes = [
    { name: 'iphone-14-390', width: 390, height: 844 },
    { name: 'laptop-1280', width: 1280, height: 900 },
    { name: 'desktop-1440', width: 1440, height: 1000 },
  ]

  for (const size of sizes) {
    await page.setViewportSize({ width: size.width, height: size.height })
    await page.goto('/')
    await page.screenshot({
      path: path.join(screenshotDir, `${size.name}.png`),
      fullPage: true,
    })
  }
})

declare global {
  interface Window {
    axe: typeof import('axe-core')
  }
}
