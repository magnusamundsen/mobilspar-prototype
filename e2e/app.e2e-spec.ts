import { MobilsparPrototypePage } from './app.po';

describe('mobilspar-prototype App', function() {
  let page: MobilsparPrototypePage;

  beforeEach(() => {
    page = new MobilsparPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
