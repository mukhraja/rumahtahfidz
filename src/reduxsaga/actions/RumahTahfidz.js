import * as ActionType from "../constants/RumahTahfidz";

// GETALL
export const doGetRumahTahfidzRequest = () => ({
  type: ActionType.GET_RUMAHTAHFIDZ_REQUEST,
});

export const doGetRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doGetRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_RUMAHTAHFIDZ_FAILED,
  payload,
});

// GET BY ID
export const doGetRumahTahfidzByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_RUMAHTAHFIDZ_REQUEST,
  payload,
});

export const doGetRumahTahfidzByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doGetRumahTahfidzByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_RUMAHTAHFIDZ_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_REQUEST,
  payload,
});

export const doGetByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doGetByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_FAILED,
  payload,
});

// CREATE

export const doCreateRumahTahfidzRequest = (payload) => ({
  type: ActionType.CREATE_RUMAHTAHFIDZ_REQUEST,
  payload,
});

export const doCreateRumahTahfidzSucceed = (payload) => ({
  type: ActionType.CREATE_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doCreateRumahTahfidzFailed = (payload) => ({
  type: ActionType.CREATE_RUMAHTAHFIDZ_FAILED,
  payload,
});

// DELETE

export const doDeleteRumahTahfidzRequest = (payload) => ({
  type: ActionType.DELETE_RUMAHTAHFIDZ_REQUEST,
  payload,
});

export const doDeleteRumahTahfidzSucceed = (payload) => ({
  type: ActionType.DELETE_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doDeleteRumahTahfidzFailed = (payload) => ({
  type: ActionType.DELETE_RUMAHTAHFIDZ_FAILED,
  payload,
});

// Update
export const doUpdateRumahTahfidzRequest = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_REQUEST,
  payload,
});

export const doUpdateRumahTahfidzSucceed = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_SUCCEED,
  payload,
});

export const doUpdateRumahTahfidzFailed = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_FAILED,
  payload,
});
// UPDATENOFILE

export const doUpdateNoFIleRumahTahfidzRequest = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_NOFILE_REQUEST,
  payload,
});

export const doUpdateNoFIleRumahTahfidzSucceed = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_NOFILE_SUCCEED,
  payload,
});

export const doUpdateNoFIleRumahTahfidzFailed = (payload) => ({
  type: ActionType.UPDATE_RUMAHTAHFIDZ_NOFILE_FAILED,
  payload,
});
