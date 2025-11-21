export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForVisible(selector) {
    await this.page.waitForSelector(selector);
  }
}
