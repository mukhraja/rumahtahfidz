import * as ActionType from "../constants/AlquranGuru";

// GET
export const doGetAlquranGuruRequest = (payload) => ({
  type: ActionType.GET_ALQURANGURU_REQUEST,
  payload,
});

export const doGetAlquranGuruSucceed = (payload) => ({
  type: ActionType.GET_ALQURANGURU_SUCCEED,
  payload,
});

export const doGetAlquranGuruFailed = (payload) => ({
  type: ActionType.GET_ALQURANGURU_FAILED,
  payload,
});

// GETLISTAWAL
export const doGetAlquranAwalGuruRequest = () => ({
  type: ActionType.GET_ALQURANGURUAWAL_REQUEST,
});

export const doGetAlquranAwalGuruSucceed = (payload) => ({
  type: ActionType.GET_ALQURANGURUAWAL_SUCCEED,
  payload,
});

export const doGetAlquranAwalGuruFailed = (payload) => ({
  type: ActionType.GET_ALQURANGURUAWAL_FAILED,
  payload,
});

// GET BY ID
export const doGetAlquranGuruByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_ALQURANGURU_REQUEST,
  payload,
});

export const doGetAlquranGuruByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_ALQURANGURU_SUCCEED,
  payload,
});

export const doGetAlquranGuruByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_ALQURANGURU_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetAlquranGuruByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_REQUEST,
  payload,
});

export const doGetAlquranGuruByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_SUCCEED,
  payload,
});

export const doGetAlquranGuruByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_FAILED,
  payload,
});

// GET BY MASTERTAHFIZ
export const doGetAlquranGuruByMasterTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_ALQURANGURU_REQUEST,
  payload,
});

export const doGetAlquranGuruByMasterTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_ALQURANGURU_SUCCEED,
  payload,
});

export const doGetAlquranGuruByMasterTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_ALQURANGURU_FAILED,
  payload,
});

// CREATE
export const doCreateAlquranGuruRequest = (payload) => ({
  type: ActionType.CREATE_ALQURANGURU_REQUEST,
  payload,
});

export const doCreateAlquranGuruSucceed = (payload) => ({
  type: ActionType.CREATE_ALQURANGURU_SUCCEED,
  payload,
});

export const doCreateAlquranGuruFailed = (payload) => ({
  type: ActionType.CREATE_ALQURANGURU_FAILED,
  payload,
});

// DELETE

export const doDeleteAlquranGuruRequest = (payload) => ({
  type: ActionType.DELETE_ALQURANGURU_REQUEST,
  payload,
});

export const doDeleteAlquranGuruSucceed = (payload) => ({
  type: ActionType.DELETE_ALQURANGURU_SUCCEED,
  payload,
});

export const doDeleteAlquranGuruFailed = (payload) => ({
  type: ActionType.DELETE_ALQURANGURU_FAILED,
  payload,
});

// Update
export const doUpdateAlquranGuruRequest = (payload) => ({
  type: ActionType.UPDATE_ALQURANGURU_REQUEST,
  payload,
});

export const doUpdateAlquranGuruSucceed = (payload) => ({
  type: ActionType.UPDATE_ALQURANGURU_SUCCEED,
  payload,
});

export const doUpdateAlquranGuruFailed = (payload) => ({
  type: ActionType.UPDATE_ALQURANGURU_FAILED,
  payload,
});
