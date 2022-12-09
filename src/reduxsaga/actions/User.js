import * as ActionType from "../constants/User";

export const doSignupRequest = (payload) => ({
  type: ActionType.ADD_SIGNUP_REQUEST,
  payload,
});

export const doSignupSucceed = (payload) => ({
  type: ActionType.ADD_SIGNUP_SUCCEED,
  payload,
});

export const doSignupFailed = (payload) => ({
  type: ActionType.SIGNUP_FAILED,
  payload,
});

export const doSigninRequest = (payload) => ({
  type: ActionType.GET_SIGNIN_REQUEST,
  payload,
});

export const doSigninSucceed = (payload) => ({
  type: ActionType.GET_SIGNIN_SUCCEED,
  payload,
});

export const doSignoutRequest = (payload) => ({
  type: ActionType.GET_SIGNOUT_REQUEST,
  payload,
});

export const doSignoutSucceed = (payload) => ({
  type: ActionType.GET_SIGNOUT_SUCCEED,
  payload,
});

export const doShowAuthMessage = (message) => ({
  type: ActionType.SHOW_MESSAGE,
  payload: message,
});

// GET
export const doGetUserRequest = () => ({
  type: ActionType.GET_USER_REQUEST,
});

export const doGetUserSucceed = (payload) => ({
  type: ActionType.GET_USER_SUCCEED,
  payload,
});

export const doGetUserFailed = (payload) => ({
  type: ActionType.GET_USER_FAILED,
  payload,
});

// GETBYADMIN
export const doGetByAdminUserRequest = () => ({
  type: ActionType.GET_BY_ADMIN_USER_REQUEST,
});

export const doGetByAdminUserSucceed = (payload) => ({
  type: ActionType.GET_BY_ADMIN_USER_SUCCEED,
  payload,
});

export const doGetByAdminUserFailed = (payload) => ({
  type: ActionType.GET_BY_ADMIN_USER_FAILED,
  payload,
});

// GET BY ID
export const doGetUserByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_USER_REQUEST,
  payload,
});

export const doGetUserByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_USER_SUCCEED,
  payload,
});

export const doGetUserByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_USER_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetUserByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_USER_REQUEST,
  payload,
});

export const doGetUserByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_USER_SUCCEED,
  payload,
});

export const doGetUserByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_USER_FAILED,
  payload,
});

// GET BY MASTERTAHFIZ
export const doGetUserByMasterTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_USER_REQUEST,
  payload,
});

export const doGetUserByMasterTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_USER_SUCCEED,
  payload,
});

export const doGetUserByMasterTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_USER_FAILED,
  payload,
});

// CREATE
export const doCreateUserRequest = (payload) => ({
  type: ActionType.CREATE_USER_REQUEST,
  payload,
});

export const doCreateUserSucceed = (payload) => ({
  type: ActionType.CREATE_USER_SUCCEED,
  payload,
});

export const doCreateUserFailed = (payload) => ({
  type: ActionType.CREATE_USER_FAILED,
  payload,
});

// CREATE NO FILE
export const doCreateUserNoFileRequest = (payload) => ({
  type: ActionType.CREATE_USER_NOFILE_REQUEST,
  payload,
});

export const doCreateUserNoFileSucceed = (payload) => ({
  type: ActionType.CREATE_USER_NOFILE_SUCCEED,
  payload,
});

export const doCreateUserNoFileFailed = (payload) => ({
  type: ActionType.CREATE_USER_NOFILE_FAILED,
  payload,
});

// DELETE
export const doDeleteUserRequest = (payload) => ({
  type: ActionType.DELETE_USER_REQUEST,
  payload,
});

export const doDeleteUserSucceed = (payload) => ({
  type: ActionType.DELETE_USER_SUCCEED,
  payload,
});

export const doDeleteUserFailed = (payload) => ({
  type: ActionType.DELETE_USER_FAILED,
  payload,
});

// Update
export const doUpdateUserRequest = (payload) => ({
  type: ActionType.UPDATE_USER_REQUEST,
  payload,
});

export const doUpdateUserSucceed = (payload) => ({
  type: ActionType.UPDATE_USER_SUCCEED,
  payload,
});

export const doUpdateUserFailed = (payload) => ({
  type: ActionType.UPDATE_USER_FAILED,
  payload,
});
// UPDATENOFILE

export const doUpdateNoFIleUserRequest = (payload) => ({
  type: ActionType.UPDATE_USER_NOFILE_REQUEST,
  payload,
});

export const doUpdateNoFIleUserSucceed = (payload) => ({
  type: ActionType.UPDATE_USER_NOFILE_SUCCEED,
  payload,
});

export const doUpdateNoFIleUserFailed = (payload) => ({
  type: ActionType.UPDATE_USER_NOFILE_FAILED,
  payload,
});
