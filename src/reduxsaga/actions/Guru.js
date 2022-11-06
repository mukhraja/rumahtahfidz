import * as ActionType from "../constants/Guru";

export const doGetGuruRequest = () => ({
  type: ActionType.GET_GURU_REQUEST,
});

export const doGetGuruSucceed = (payload) => ({
  type: ActionType.GET_GURU_SUCCEED,
  payload,
});

export const doGetGuruFailed = (payload) => ({
  type: ActionType.GET_GURU_FAILED,
  payload,
});

// GET BY ID
export const doGetGuruByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_GURU_REQUEST,
  payload,
});

export const doGetGuruByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_GURU_SUCCEED,
  payload,
});

export const doGetGuruByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_GURU_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetGuruByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_GURU_REQUEST,
  payload,
});

export const doGetGuruByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_GURU_SUCCEED,
  payload,
});

export const doGetGuruByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_GURU_FAILED,
  payload,
});

// CREATE
export const doCreateGuruRequest = (payload) => ({
  type: ActionType.CREATE_GURU_REQUEST,
  payload,
});

export const doCreateGuruSucceed = (payload) => ({
  type: ActionType.CREATE_GURU_SUCCEED,
  payload,
});

export const doCreateGuruFailed = (payload) => ({
  type: ActionType.CREATE_GURU_FAILED,
  payload,
});

// DELETE

export const doDeleteGuruRequest = (payload) => ({
  type: ActionType.DELETE_GURU_REQUEST,
  payload,
});

export const doDeleteGuruSucceed = (payload) => ({
  type: ActionType.DELETE_GURU_SUCCEED,
  payload,
});

export const doDeleteGuruFailed = (payload) => ({
  type: ActionType.DELETE_GURU_FAILED,
  payload,
});

// Update
export const doUpdateGuruRequest = (payload) => ({
  type: ActionType.UPDATE_GURU_REQUEST,
  payload,
});

export const doUpdateGuruSucceed = (payload) => ({
  type: ActionType.UPDATE_GURU_SUCCEED,
  payload,
});

export const doUpdateGuruFailed = (payload) => ({
  type: ActionType.UPDATE_GURU_FAILED,
  payload,
});
// UPDATENOFILE

export const doUpdateNoFIleGuruRequest = (payload) => ({
  type: ActionType.UPDATE_GURU_NOFILE_REQUEST,
  payload,
});

export const doUpdateNoFIleGuruSucceed = (payload) => ({
  type: ActionType.UPDATE_GURU_NOFILE_SUCCEED,
  payload,
});

export const doUpdateNoFIleGuruFailed = (payload) => ({
  type: ActionType.UPDATE_GURU_NOFILE_FAILED,
  payload,
});
