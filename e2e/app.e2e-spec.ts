import { MeetupPlannerPage } from './app.po';

describe('meetup-planner App', function() {
  let page: MeetupPlannerPage;

  beforeEach(() => {
    page = new MeetupPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mp works!');
  });
});
