import * as ActionType from "../constants/RumahTahfidz";

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
