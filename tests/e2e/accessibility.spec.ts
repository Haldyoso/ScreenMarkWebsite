import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  { name: "homepage", path: "/ScreenMarkWebsite/" },
  { name: "FAQ", path: "/ScreenMarkWebsite/#faq" },
  { name: "Privacy Policy", path: "/ScreenMarkWebsite/privacy" },
  { name: "Terms of Use", path: "/ScreenMarkWebsite/terms" },
] as const;

for (const route of routes) {
  test(`${route.name} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route.path);
    await expect(page.locator("main")).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
