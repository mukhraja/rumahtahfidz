import * as ActionType from "../constants/SurahPendekSantri";

// GET
export const doGetSurahPendekSantriRequest = (payload) => ({
  type: ActionType.GET_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doGetSurahPendekSantriSucceed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doGetSurahPendekSantriFailed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// GETLISTAWAL
export const doGetSurahPendekAwalSantriRequest = () => ({
  type: ActionType.GET_SURAHPENDEKSANTRIAWAL_REQUEST,
});

export const doGetSurahPendekAwalSantriSucceed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKSANTRIAWAL_SUCCEED,
  payload,
});

export const doGetSurahPendekAwalSantriFailed = (payload) => ({
  type: ActionType.GET_SURAHPENDEKSANTRIAWAL_FAILED,
  payload,
});

// GET BY ID
export const doGetSurahPendekSantriByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doGetSurahPendekSantriByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doGetSurahPendekSantriByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetSurahPendekSantriByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doGetSurahPendekSantriByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doGetSurahPendekSantriByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetSurahPendekSantriByMasterTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doGetSurahPendekSantriByMasterTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doGetSurahPendekSantriByMasterTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetSurahPendekSantriByUserIdRequest = (payload) => ({
  type: ActionType.GET_BY_USERID_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doGetSurahPendekSantriByUserIdSucceed = (payload) => ({
  type: ActionType.GET_BY_USERID_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doGetSurahPendekSantriByUserIdFailed = (payload) => ({
  type: ActionType.GET_BY_USERID_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// CREATE
export const doCreateSurahPendekSantriRequest = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doCreateSurahPendekSantriSucceed = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doCreateSurahPendekSantriFailed = (payload) => ({
  type: ActionType.CREATE_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// DELETE

export const doDeleteSurahPendekSantriRequest = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doDeleteSurahPendekSantriSucceed = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doDeleteSurahPendekSantriFailed = (payload) => ({
  type: ActionType.DELETE_SURAHPENDEKSANTRI_FAILED,
  payload,
});

// Update
export const doUpdateSurahPendekSantriRequest = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKSANTRI_REQUEST,
  payload,
});

export const doUpdateSurahPendekSantriSucceed = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKSANTRI_SUCCEED,
  payload,
});

export const doUpdateSurahPendekSantriFailed = (payload) => ({
  type: ActionType.UPDATE_SURAHPENDEKSANTRI_FAILED,
  payload,
});
