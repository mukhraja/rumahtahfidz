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
