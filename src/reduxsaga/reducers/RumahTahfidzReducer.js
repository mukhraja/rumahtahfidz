import * as ActionType from "../constants/RumahTahfidz";

const INIT_STATE = {
  rumahtahfidzdata: [],
  isLoading: false,
  isRefresh: false,
};

const RumahTahfidzReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GET
    case ActionType.GET_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_RUMAHTAHFIDZ_SUCCEED:
      return applyGetRumahTahfidzSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_RUMAHTAHFIDZ_SUCCEED:
      return applyGetByIdRumahTahfidzSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_SUCCEED:
      return applyGetByRumahTahfizSucceed(state, action);
    // CREATE
    case ActionType.CREATE_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_RUMAHTAHFIDZ_SUCCEED:
      return applyCreateRumahTahfidzSucceed(state, action);
    // Update
    case ActionType.UPDATE_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_RUMAHTAHFIDZ_SUCCEED:
      return applyUpdateRumahTahfidzSucceed(state, action);
    // UPDATE NO FILE
    case ActionType.UPDATE_RUMAHTAHFIDZ_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_RUMAHTAHFIDZ_NOFILE_SUCCEED:
      return applyUpdateNoFileRumahTahfidzSucceed(state, action);
    // DELETE
    case ActionType.DELETE_RUMAHTAHFIDZ_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_RUMAHTAHFIDZ_SUCCEED:
      return applyDeleteRumahTahfidzSucceed(state, action);
    // DEFAULT
    default:
      return state;
  }
};

const applyCreateRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: [...payload.data],
  };
};

const applyGetRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: payload.data,
  };
};

const applyGetByIdRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: [payload.data],
  };
};

const applyGetByRumahTahfizSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: [...payload.data],
  };
};

const applyUpdateRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: [{ id: payload.get("id") }],
  };
};

const applyUpdateNoFileRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    rumahtahfidzdata: [payload],
  };
};

const applyDeleteRumahTahfidzSucceed = (state, action) => {
  const { payload } = action;
  const rumahtahfiz = state.rumahtahfidzdata.filter((el) => el.id !== payload);
  console.log(rumahtahfiz);
  return {
    ...state,
    rumahtahfidzdata: [...rumahtahfiz],
    isLoading: false,
    isRefresh: false,
  };
};



export default RumahTahfidzReducer;
