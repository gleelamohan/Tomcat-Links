import { LinksPage } from './app.po';

describe('links App', () => {
  let page: LinksPage;

  beforeEach(() => {
    page = new LinksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
