import { CarsServicePage } from './app.po';

describe('cars-service App', function() {
  let page: CarsServicePage;

  beforeEach(() => {
    page = new CarsServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
