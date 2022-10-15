import * as ActionType from "../constants/SurahPendekGuru";

// GET
export const doGetSurahPendekGuruRequest = (payload) => ({
  type: ActionType.GET_SURAHPENDEKGURU_REQUEST,
  payload,
});

export const doGetSurahPendekGuruSucceed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKGURU_SUCCEED,
  payload,
});

export const doGetSurahPendekGuruFailed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKGURU_FAILED,
  payload,
});

// GETLISTAWAL
export const doGetSurahPendekAwalGuruRequest = () => ({
  type: ActionType.GET_SURAHPENDEKGURUAWAL_REQUEST,
});

export const doGetSurahPendekAwalGuruSucceed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKGURUAWAL_SUCCEED,
  payload,
});

export const doGetSurahPendekAwalGuruFailed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKGURUAWAL_FAILED,
  payload,
});

// GET BY ID
export const doGetSurahPendekGuruByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKGURU_REQUEST,
  payload,
});

export const doGetSurahPendekGuruByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKGURU_SUCCEED,
  payload,
});

export const doGetSurahPendekGuruByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKGURU_FAILED,
  payload,
});

// CREATE
export const doCreateSurahPendekGuruRequest = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKGURU_REQUEST,
  payload,
});

export const doCreateSurahPendekGuruSucceed = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKGURU_SUCCEED,
  payload,
});

export const doCreateSurahPendekGuruFailed = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKGURU_FAILED,
  payload,
});

// DELETE

export const doDeleteSurahPendekGuruRequest = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKGURU_REQUEST,
  payload,
});

export const doDeleteSurahPendekGuruSucceed = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKGURU_SUCCEED,
  payload,
});

export const doDeleteSurahPendekGuruFailed = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKGURU_FAILED,
  payload,
});

// Update
export const doUpdateSurahPendekGuruRequest = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKGURU_REQUEST,
  payload,
});

export const doUpdateSurahPendekGuruSucceed = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKGURU_SUCCEED,
  payload,
});

export const doUpdateSurahPendekGuruFailed = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKGURU_FAILED,
  payload,
});
