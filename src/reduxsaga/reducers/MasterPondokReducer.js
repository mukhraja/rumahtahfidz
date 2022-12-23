import * as ActionType from "../constants/Masterpondok";

const INIT_STATE = {
  masterpondokdata: [],
  isLoading: false,
  isRefresh: false,
};

const MasterPondokReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GET
    case ActionType.GET_MASTERPONDOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_MASTERPONDOK_SUCCEED:
      return applyGetMasterPondokSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_MASTERPONDOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_MASTERPONDOK_SUCCEED:
      return applyGetByIdMasterPondokSucceed(state, action);
    // GETBYMasterPondok
    case ActionType.GET_BY_MASTERPONDOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERPONDOK_SUCCEED:
      return applyGetByRumahTahfizSucceed(state, action);
    // CREATE
    case ActionType.CREATE_MASTERPONDOK_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ActionType.CREATE_MASTERPONDOK_SUCCEED: {
      return applyCreateMasterPondokSucceed(state, action);
    }
    case ActionType.CREATE_MASTERPONDOK_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    // Update
    case ActionType.UPDATE_MASTERPONDOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_MASTERPONDOK_SUCCEED:
      return applyUpdateMasterPondokSucceed(state, action);
    // UPDATE NO FILE
    case ActionType.UPDATE_MASTERPONDOK_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_MASTERPONDOK_NOFILE_SUCCEED:
      return applyUpdateNoFileMasterPondokSucceed(state, action);
    // DELETE
    case ActionType.DELETE_MASTERPONDOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_MASTERPONDOK_SUCCEED:
      return applyDeleteMasterPondokSucceed(state, action);
    // DEFAULT
    default:
      return state;
  }
};

const applyCreateMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: [...state.masterpondokdata, { ...payload.data }],
    // masterpondokdata: [...payload.data],
    isLoading: false,
  };
};

const applyGetMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: payload.data,
    isLoading: false,
  };
};

const applyGetByIdMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: [payload.data],
    isLoading: false,
  };
};

const applyGetByRumahTahfizSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: [...payload.data],
    isLoading: false,
  };
};

const applyUpdateMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: [{ id: payload.get("id") }],
    isLoading: false,
  };
};

const applyUpdateNoFileMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    masterpondokdata: [payload],
    isLoading: false,
  };
};

const applyDeleteMasterPondokSucceed = (state, action) => {
  const { payload } = action;
  const masterpondok = state.masterpondokdata.filter((el) => el.id !== payload);
  console.log(masterpondok);
  return {
    ...state,
    masterpondokdata: [...masterpondok],
    isLoading: false,
    isRefresh: false,
  };
};

export default MasterPondokReducer;
