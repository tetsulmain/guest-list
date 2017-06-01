import { GuestLitsPage } from './app.po';

describe('guest-lits App', () => {
  let page: GuestLitsPage;

  beforeEach(() => {
    page = new GuestLitsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
