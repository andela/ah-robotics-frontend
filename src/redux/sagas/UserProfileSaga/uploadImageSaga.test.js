import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchImageUpload, {
    uploadImageSaga,
  apiClient,
} from './uploadImageSaga';
import * as types from '../../actions/userProfileActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({
 profileData: {},
    error: {},
    profileUpdate: false,
    isLoading: false,
    Followers: 0,
    Following: 0,
}),
};

describe('update user profile image saga tests', () => {
  it('it should handle update user image profile ', async () => {
    dispatchedActions = [];
    const response = {
         data: {
             profile: {
                 image: '',
             },
         },
    };
    apiClient.updateImageProfile = jest.fn(() => Promise.resolve(response));
    await runSaga(fakeStore, uploadImageSaga, { payload: { username: 'test', data: { image: 'kkhhhk' } } }).done;
    expect(apiClient.updateImageProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'UPLOAD_IMAGE_SUCCESS', payload: { profile: { image: '' } } }]);
  });
  it('it should handle update user profile image error', async () => {
    dispatchedActions = [];
    const errors = {
      response: {
        data: {
            errors: {
              error: 'something is the matter',
            },
          },
      },
    };
    apiClient.updateImageProfile = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, uploadImageSaga, { payload: { username: 'test', data: { image: 'kkhhhk' } } }).done;
    expect(apiClient.updateImageProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(
        [{ payload: { errors: { data: { errors: { error: 'something is the matter' } } } }, type: 'UPLOAD_IMAGE_ERROR' }],
);
  });

  it('should listen for the required actions', () => {
    const generator = watchImageUpload();
    put({ type: types.UPLOAD_IMAGE_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('UPLOAD_IMAGE_START', uploadImageSaga));
  });
});
