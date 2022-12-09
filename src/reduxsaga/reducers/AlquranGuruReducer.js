import * as ActionType from "../constants/AlquranGuru";

const INIT_STATE = {
  alqurangurudata: [],
  isLoading: false,
  isRefresh: false,
};

const AlquranGuruReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_ALQURANGURU_SUCCEED:
      return applyGetAlquranGuruSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_ALQURANGURUAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_ALQURANGURUAWAL_SUCCEED:
      return applyGetAlquranAwalGuruSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_ALQURANGURU_SUCCEED:
      return applyGetByIdAlquranGuruSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_SUCCEED:
      return applyGetAlquranByRumahTahfizSantriSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_ALQURANGURU_SUCCEED:
      return applyGetAlquranByMasterTahfizSantriSucceed(state, action);
    // CREATE
    case ActionType.CREATE_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_ALQURANGURU_SUCCEED:
      return applyCreateGuruSucceed(state, action);
    // Update
    case ActionType.UPDATE_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_ALQURANGURU_SUCCEED:
      return applyUpdateAlquranGuruSucceed(state, action);
    // DELETE
    case ActionType.DELETE_ALQURANGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_ALQURANGURU_SUCCEED:
      return applyDeleteAlquranGuruSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: [...payload.data],
  };
};

const applyGetAlquranGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: payload.data,
  };
};

const applyGetAlquranByRumahTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: [...payload.data],
  };
};

const applyGetAlquranByMasterTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: [...payload.data],
  };
};

const applyGetAlquranAwalGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: payload.data,
  };
};

const applyGetByIdAlquranGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: [payload.data],
  };
};

const applyUpdateAlquranGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alqurangurudata: [...payload.data],
  };
};

const applyDeleteAlquranGuruSucceed = (state, action) => {
  const { payload } = action;
  const Alqurandata = state.alqurangurudata.filter((el) => el.id !== payload);
  console.log(Alqurandata);
  return {
    ...state,
    alqurangurudata: [...Alqurandata],
    isLoading: false,
    isRefresh: false,
  };
};

export default AlquranGuruReducer;
