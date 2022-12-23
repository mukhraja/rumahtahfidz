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
    // GETBYID
    case ActionType.GET_BY_ID_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_GURU_SUCCEED:
      return applyGetByIdGuruSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_GURU_SUCCEED:
      return applyGetByRumahTahfizGuruSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_GURU_SUCCEED:
      return applyGetByMasterTahfizGuruSucceed(state, action);
    // CREATE
    case ActionType.CREATE_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_GURU_SUCCEED:
      return applyCreateGuruSucceed(state, action);
    // Update
    case ActionType.UPDATE_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_GURU_SUCCEED:
      return applyUpdateGuruSucceed(state, action);
    // UPDATE NO FILE
    case ActionType.UPDATE_GURU_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_GURU_NOFILE_SUCCEED:
      return applyUpdateNoFileGuruSucceed(state, action);
    // DELETE
    case ActionType.DELETE_GURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_GURU_SUCCEED:
      return applyDeleteGuruSucceed(state, action);
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

const applyCreateGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [...state.gurudata, { ...payload.data }],
  };
};

const applyGetByIdGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [payload.data],
  };
};

const applyGetByRumahTahfizGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [...payload.data],
  };
};

const applyGetByMasterTahfizGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [...payload.data],
  };
};

const applyUpdateGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [{ id: payload.get("id") }],
  };
};

const applyUpdateNoFileGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    gurudata: [payload],
  };
};

const applyDeleteGuruSucceed = (state, action) => {
  const { payload } = action;
  const Guru = state.gurudata.filter((el) => el.id !== payload);
  console.log(Guru);
  return {
    ...state,
    gurudata: [...Guru],
    isLoading: false,
    isRefresh: false,
  };
};

export default GuruReducer;
