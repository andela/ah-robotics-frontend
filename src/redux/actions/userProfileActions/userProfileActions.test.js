import {
  PROFILE_DATA,
  PROFILE_ERROR,
  PROFILE_PATCH_START,
  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR,
} from './types';
import {
profileData, Error, profileUpdate, userImageUpload,
        userImageUploadSuccess, userImageUploadError,
} from './actions';

describe('Profile action creator', () => {
  it('should dispatch PROFILE_DATA', () => {
  expect(profileData({}).type).toEqual(PROFILE_DATA);
});
  it('should dispatch PROFILE_ERROR', () => {
  expect(Error({}).type).toEqual(PROFILE_ERROR);
});
  it('should dispatch PROFILE_PATCH', () => {
  expect(profileUpdate({}).type).toEqual(PROFILE_PATCH_START);
});
  it('should dispatch PROFILE_ERROR', () => {
  expect(userImageUpload({}).type).toEqual(UPLOAD_IMAGE_START);
});
  it('should dispatch PROFILE_PATCH', () => {
  expect(userImageUploadSuccess({}).type).toEqual(UPLOAD_IMAGE_SUCCESS);
});
  it('should dispatch PROFILE_PATCH', () => {
  expect(userImageUploadError({}).type).toEqual(UPLOAD_IMAGE_ERROR);
});
});
