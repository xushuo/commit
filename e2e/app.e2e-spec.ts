import { CommitPage } from './app.po';

describe('commit App', () => {
  let page: CommitPage;

  beforeEach(() => {
    page = new CommitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
