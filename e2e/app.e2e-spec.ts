import { KcWhatapopPage } from './app.po';

describe('kc-whatapop App', () => {
  let page: KcWhatapopPage;

  beforeEach(() => {
    page = new KcWhatapopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
