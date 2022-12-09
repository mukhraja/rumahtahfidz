import * as ActionType from "../constants/Santri";

// GET
export const doGetSantriRequest = () => ({
  type: ActionType.GET_SANTRI_REQUEST,
});

export const doGetSantriSucceed = (payload) => ({
  type: ActionType.GET_SANTRI_SUCCEED,
  payload,
});

export const doGetSantriFailed = (payload) => ({
  type: ActionType.GET_SANTRI_FAILED,
  payload,
});

// GET BY ID
export const doGetSantriByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_SANTRI_REQUEST,
  payload,
});

export const doGetSantriByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_SANTRI_SUCCEED,
  payload,
});

export const doGetSantriByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_SANTRI_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetSantriByRumahTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SANTRI_REQUEST,
  payload,
});

export const doGetSantriByRumahTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SANTRI_SUCCEED,
  payload,
});

export const doGetSantriByRumahTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_RUMAHTAHFIDZ_SANTRI_FAILED,
  payload,
});

// GET BY RUMAHTAHFIZ
export const doGetSantriByMasterTahfidzRequest = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SANTRI_REQUEST,
  payload,
});

export const doGetSantriByMasterTahfidzSucceed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SANTRI_SUCCEED,
  payload,
});

export const doGetSantriByMasterTahfidzFailed = (payload) => ({
  type: ActionType.GET_BY_MASTERTAHFIDZ_SANTRI_FAILED,
  payload,
});

// CREATE
export const doCreateSantriRequest = (payload) => ({
  type: ActionType.CREATE_SANTRI_REQUEST,
  payload,
});

export const doCreateSantriSucceed = (payload) => ({
  type: ActionType.CREATE_SANTRI_SUCCEED,
  payload,
});

export const doCreateSantriFailed = (payload) => ({
  type: ActionType.CREATE_SANTRI_FAILED,
  payload,
});

// DELETE

export const doDeleteSantriRequest = (payload) => ({
  type: ActionType.DELETE_SANTRI_REQUEST,
  payload,
});

export const doDeleteSantriSucceed = (payload) => ({
  type: ActionType.DELETE_SANTRI_SUCCEED,
  payload,
});

export const doDeleteSantriFailed = (payload) => ({
  type: ActionType.DELETE_SANTRI_FAILED,
  payload,
});

// Update
export const doUpdateSantriRequest = (payload) => ({
  type: ActionType.UPDATE_SANTRI_REQUEST,
  payload,
});

export const doUpdateSantriSucceed = (payload) => ({
  type: ActionType.UPDATE_SANTRI_SUCCEED,
  payload,
});

export const doUpdateSantriFailed = (payload) => ({
  type: ActionType.UPDATE_SANTRI_FAILED,
  payload,
});
// UPDATENOFILE

export const doUpdateNoFIleSantriRequest = (payload) => ({
  type: ActionType.UPDATE_SANTRI_NOFILE_REQUEST,
  payload,
});

export const doUpdateNoFIleSantriSucceed = (payload) => ({
  type: ActionType.UPDATE_SANTRI_NOFILE_SUCCEED,
  payload,
});

export const doUpdateNoFIleSantriFailed = (payload) => ({
  type: ActionType.UPDATE_SANTRI_NOFILE_FAILED,
  payload,
});
