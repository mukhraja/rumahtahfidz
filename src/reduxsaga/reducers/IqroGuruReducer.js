import * as ActionType from "../constants/IqroGuru";

const INIT_STATE = {
  iqrogurudata: [],
  isLoading: false,
  isRefresh: false,
};

const IqroGuruReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_IQROGURU_SUCCEED:
      return applyGetIqroGuruSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_IQROGURUAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_IQROGURUAWAL_SUCCEED:
      return applyGetIqroAwalGuruSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_IQROGURU_SUCCEED:
      return applyGetByIdIqroGuruSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_IQROGURU_SUCCEED:
      return applyGetIqroGuruByRumahTahfizGuruSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_IQROGURU_SUCCEED:
      return applyGetIqroGuruByMasterTahfizGuruSucceed(state, action);
    // CREATE
    case ActionType.CREATE_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_IQROGURU_SUCCEED:
      return applyCreateGuruSucceed(state, action);
    // Update
    case ActionType.UPDATE_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_IQROGURU_SUCCEED:
      return applyUpdateIqroGuruSucceed(state, action);
    // DELETE
    case ActionType.DELETE_IQROGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_IQROGURU_SUCCEED:
      return applyDeleteIqroGuruSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: [...payload.data],
    isLoading: false,
  };
};

const applyGetIqroGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: payload.data,
    isLoading: false,
  };
};

const applyGetIqroGuruByRumahTahfizGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: [...payload.data],
    isLoading: false,
  };
};

const applyGetIqroGuruByMasterTahfizGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: [...payload.data],
    isLoading: false,
  };
};

const applyGetIqroAwalGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: payload.data,
    isLoading: false,
  };
};

const applyGetByIdIqroGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: [payload.data],
    isLoading: false,
  };
};

const applyUpdateIqroGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrogurudata: [...payload.data],
    isLoading: false,
  };
};

const applyDeleteIqroGuruSucceed = (state, action) => {
  const { payload } = action;
  const iqrodata = state.iqrogurudata.filter((el) => el.id !== payload);
  console.log(iqrodata);
  return {
    ...state,
    iqrogurudata: [...iqrodata],
    isLoading: false,
    isRefresh: false,
  };
};

export default IqroGuruReducer;
