import { BasePage } from "./BasePage.js";

export class AnalysisDashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.graph = "#sales-graph";
  }

  async open(baseUrl) {
    await this.page.goto(`${baseUrl}/dashboard`);
  }

  async waitForGraphRender() {
    await this.page.waitForSelector(this.graph);
  }
}
