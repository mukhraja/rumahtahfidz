import * as ActionType from "../constants/Santri";

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
