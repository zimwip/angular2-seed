import { MicroserviceFrontPage } from './app.po';

describe('microservice-front App', function() {
  let page: MicroserviceFrontPage;

  beforeEach(() => {
    page = new MicroserviceFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
