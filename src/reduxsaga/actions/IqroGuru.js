import * as ActionType from "../constants/IqroGuru";

// GET
export const doGetIqroGuruRequest = (payload) => ({
  type: ActionType.GET_IQROGURU_REQUEST,
  payload,
});

export const doGetIqroGuruSucceed = (payload) => ({
  type: ActionType.GET_IQROGURU_SUCCEED,
  payload,
});

export const doGetIqroGuruFailed = (payload) => ({
  type: ActionType.GET_IQROGURU_FAILED,
  payload,
});

// GETLISTAWAL
export const doGetIqroAwalGuruRequest = () => ({
  type: ActionType.GET_IQROGURUAWAL_REQUEST,
});

export const doGetIqroAwalGuruSucceed = (payload) => ({
  type: ActionType.GET_IQROGURUAWAL_SUCCEED,
  payload,
});

export const doGetIqroAwalGuruFailed = (payload) => ({
  type: ActionType.GET_IQROGURUAWAL_FAILED,
  payload,
});

// GET BY ID
export const doGetIqroGuruByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_IQROGURU_REQUEST,
  payload,
});

export const doGetIqroGuruByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_IQROGURU_SUCCEED,
  payload,
});

export const doGetIqroGuruByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_IQROGURU_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetIqroGuruByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_IQROGURU_REQUEST,
  payload,
});

export const doGetIqroGuruByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_IQROGURU_SUCCEED,
  payload,
});

export const doGetIqroGuruByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_IQROGURU_FAILED,
  payload,
});

// GET BY MASTERTAHFIZ
export const doGetIqroGuruByMasterTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_IQROGURU_REQUEST,
  payload,
});

export const doGetIqroGuruByMasterTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_IQROGURU_SUCCEED,
  payload,
});

export const doGetIqroGuruByMasterTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_IQROGURU_FAILED,
  payload,
});

// CREATE
export const doCreateIqroGuruRequest = (payload) => ({
  type: ActionType.CREATE_IQROGURU_REQUEST,
  payload,
});

export const doCreateIqroGuruSucceed = (payload) => ({
  type: ActionType.CREATE_IQROGURU_SUCCEED,
  payload,
});

export const doCreateIqroGuruFailed = (payload) => ({
  type: ActionType.CREATE_IQROGURU_FAILED,
  payload,
});

// DELETE

export const doDeleteIqroGuruRequest = (payload) => ({
  type: ActionType.DELETE_IQROGURU_REQUEST,
  payload,
});

export const doDeleteIqroGuruSucceed = (payload) => ({
  type: ActionType.DELETE_IQROGURU_SUCCEED,
  payload,
});

export const doDeleteIqroGuruFailed = (payload) => ({
  type: ActionType.DELETE_IQROGURU_FAILED,
  payload,
});

// Update
export const doUpdateIqroGuruRequest = (payload) => ({
  type: ActionType.UPDATE_IQROGURU_REQUEST,
  payload,
});

export const doUpdateIqroGuruSucceed = (payload) => ({
  type: ActionType.UPDATE_IQROGURU_SUCCEED,
  payload,
});

export const doUpdateIqroGuruFailed = (payload) => ({
  type: ActionType.UPDATE_IQROGURU_FAILED,
  payload,
});
