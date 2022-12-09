import * as ActionType from "../constants/AlquranSantri";

const INIT_STATE = {
  alquransantridata: [],
  isLoading: false,
  isRefresh: false,
};

const AlquranSantriReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_ALQURANSANTRI_SUCCEED:
      return applyGetAlquranSantriSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_ALQURANSANTRIAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_ALQURANSANTRIAWAL_SUCCEED:
      return applyGetAlquranAwalSantriSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_ALQURANSANTRI_SUCCEED:
      return applyGetByIdAlquranSantriSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_ALQURANSANTRI_SUCCEED:
      return applyGetAlquranByRumahTahfizSantriSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_ALQURANSANTRI_SUCCEED:
      return applyGetAlquranByMasterTahfizSantriSucceed(state, action);
    // CREATE
    case ActionType.CREATE_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_ALQURANSANTRI_SUCCEED:
      return applyCreateSantriSucceed(state, action);
    // Update
    case ActionType.UPDATE_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_ALQURANSANTRI_SUCCEED:
      return applyUpdateAlquranSantriSucceed(state, action);
    // DELETE
    case ActionType.DELETE_ALQURANSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_ALQURANSANTRI_SUCCEED:
      return applyDeleteAlquranSantriSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: [...payload.data],
  };
};

const applyGetAlquranSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: payload.data,
  };
};

const applyGetAlquranByRumahTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: [...payload.data],
  };
};

const applyGetAlquranByMasterTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: [...payload.data],
  };
};

const applyGetAlquranAwalSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: payload.data,
  };
};

const applyGetByIdAlquranSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: [payload.data],
  };
};

const applyUpdateAlquranSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    alquransantridata: [...payload.data],
  };
};

const applyDeleteAlquranSantriSucceed = (state, action) => {
  const { payload } = action;
  const Alqurandata = state.alquransantridata.filter((el) => el.id !== payload);
  console.log(Alqurandata);
  return {
    ...state,
    alquransantridata: [...Alqurandata],
    isLoading: false,
    isRefresh: false,
  };
};

export default AlquranSantriReducer;
