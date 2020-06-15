import * as newsActions from '../../store/actions/news';

describe('actions', () => {
  it('should create an action to remove a post', () => {
    const data = 12345;
    const expectedAction = {
        type: newsActions.HIDE_POST,
        data
    }
    expect(newsActions.hidePost(data)).toEqual(expectedAction)
  })
  it('should create an action to upvote a post', () => {
    const data = 12345;
    const expectedAction = {
        type: newsActions.UPVOTE_POST,
        data
    }
    expect(newsActions.upvotePost(data)).toEqual(expectedAction)
  })
})