import * as ActionType from "../constants/RumahTahfidz";

const INIT_STATE = {
  rumahtahfidzdata: [],
  isLoading: false,
  isRefresh: false,
};

const RumahTahfidzReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_RUMAHTAHFIDZ_SUCCEED:
      return applyGetRumahTahfidzSucceed(state, action);
    default:
      return state;
  }
};

const applyGetRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: payload.data,
  };
};

export default RumahTahfidzReducer;
