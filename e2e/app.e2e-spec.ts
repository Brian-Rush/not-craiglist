import { NotCraigslistPage } from './app.po';

describe('not-craigslist App', () => {
  let page: NotCraigslistPage;

  beforeEach(() => {
    page = new NotCraigslistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
