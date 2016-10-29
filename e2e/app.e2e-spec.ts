import { AngularMoviePage } from './app.po';

describe('angular-movie App', function() {
  let page: AngularMoviePage;

  beforeEach(() => {
    page = new AngularMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
