import * as ActionType from "../constants/Guru";

const INIT_STATE = {
  gurudata: [],
  isLoading: false,
  isRefresh: false,
};

const GuruReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_GURU_SUCCEED:
      return applyGetGuruSucceed(state, action);
    default:
      return state;
  }
};

const applyGetGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: payload.data,
  };
};

export default GuruReducer;
