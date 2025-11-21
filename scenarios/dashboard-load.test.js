import { chromium } from "k6/experimental/browser";
import { getEnvConfig } from "../../utils/env.js";
import { DashboardPage } from "../../pages/DashboardPage.js";
import { Trend } from "k6/metrics";

const pageLoadTime = new Trend("dashboard_page_load");

export default async function () {
  const config = getEnvConfig();
  const browser = chromium.launch({ headless: true });
  const context = browser.newContext();
  const page = context.newPage();

  const dashboard = new DashboardPage(page);

  const start = Date.now();

  await dashboard.open(config.baseUrl);
  await dashboard.waitForGraphRender();

  const end = Date.now();
  pageLoadTime.add(end - start);

  page.close();
  browser.close();
}
