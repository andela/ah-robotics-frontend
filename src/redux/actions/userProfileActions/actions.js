import {
    PROFILE_DATA,
    PROFILE_ERROR,
    PROFILE_PATCH_START,
    UPLOAD_IMAGE_ERROR,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_START,
  } from './types';

export const profileData = payload => ({
    type: PROFILE_DATA,
    payload,
});

export const Error = payload => ({
    type: PROFILE_ERROR,
    payload,
});

export const profileUpdate = payload => ({
    type: PROFILE_PATCH_START,
    payload,
});
export const userImageUpload = payload => ({
    type: UPLOAD_IMAGE_START,
    payload,
});
export const userImageUploadSuccess = payload => ({
    type: UPLOAD_IMAGE_SUCCESS,
    payload,
});
export const userImageUploadError = payload => ({
    type: UPLOAD_IMAGE_ERROR,
    payload,
});
