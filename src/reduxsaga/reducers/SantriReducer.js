import * as ActionType from "../constants/Santri";

const INIT_STATE = {
  santridata: [],
  isLoading: false,
  isRefresh: false,
};

const SantriReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SANTRI_SUCCEED:
      return applyGetSantriSucceed(state, action);
    default:
      return state;
  }
};

const applyGetSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: payload.data,
  };
};

export default SantriReducer;
