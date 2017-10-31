import { IndustrialmojoUiPage } from './app.po';

describe('industrialmojo-ui App', function() {
  let page: IndustrialmojoUiPage;

  beforeEach(() => {
    page = new IndustrialmojoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
