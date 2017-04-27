import { UIManagementPage } from './app.po';

describe('ui-management App', () => {
  let page: UIManagementPage;

  beforeEach(() => {
    page = new UIManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
