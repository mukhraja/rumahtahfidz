import * as ActionType from "../constants/Masterpondok";

// GETALL
export const doGetMasterPondokRequest = () => ({
  type: ActionType.GET_MASTERPONDOK_REQUEST,
});

export const doGetMasterPondokSucceed = (payload) => ({
  type: ActionType.GET_MASTERPONDOK_SUCCEED,
  payload,
});

export const doGetMasterPondokFailed = (payload) => ({
  type: ActionType.GET_MASTERPONDOK_FAILED,
  payload,
});

// GET BY ID
export const doGetMasterPondokByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_MASTERPONDOK_REQUEST,
  payload,
});

export const doGetMasterPondokByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_MASTERPONDOK_SUCCEED,
  payload,
});

export const doGetMasterPondokByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_MASTERPONDOK_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetByMasterPondokRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERPONDOK_REQUEST,
  payload,
});

export const doGetByMasterPondokSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERPONDOK_SUCCEED,
  payload,
});

export const doGetByMasterPondokFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERPONDOK_FAILED,
  payload,
});

// CREATE

export const doCreateMasterPondokRequest = (payload) => ({
  type: ActionType.CREATE_MASTERPONDOK_REQUEST,
  payload,
});

export const doCreateMasterPondokSucceed = (payload) => ({
  type: ActionType.CREATE_MASTERPONDOK_SUCCEED,
  payload,
});

export const doCreateMasterPondokFailed = (payload) => ({
  type: ActionType.CREATE_MASTERPONDOK_FAILED,
  payload,
});

// DELETE

export const doDeleteMasterPondokRequest = (payload) => ({
  type: ActionType.DELETE_MASTERPONDOK_REQUEST,
  payload,
});

export const doDeleteMasterPondokSucceed = (payload) => ({
  type: ActionType.DELETE_MASTERPONDOK_SUCCEED,
  payload,
});

export const doDeleteMasterPondokFailed = (payload) => ({
  type: ActionType.DELETE_MASTERPONDOK_FAILED,
  payload,
});

// Update
export const doUpdateMasterPondokRequest = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_REQUEST,
  payload,
});

export const doUpdateMasterPondokSucceed = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_SUCCEED,
  payload,
});

export const doUpdateMasterPondokFailed = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_FAILED,
  payload,
});
// UPDATENOFILE

export const doUpdateNoFIleMasterPondokRequest = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_NOFILE_REQUEST,
  payload,
});

export const doUpdateNoFIleMasterPondokSucceed = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_NOFILE_SUCCEED,
  payload,
});

export const doUpdateNoFIleMasterPondokFailed = (payload) => ({
  type: ActionType.UPDATE_MASTERPONDOK_NOFILE_FAILED,
  payload,
});
