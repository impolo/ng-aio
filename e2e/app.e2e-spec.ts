import { NgUserRegistrationPage } from './app.po';

describe('ng-user-registration App', function() {
  let page: NgUserRegistrationPage;

  beforeEach(() => {
    page = new NgUserRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
