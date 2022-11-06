import * as ActionType from "../constants/SurahPendekGuru";

const INIT_STATE = {
  surahpendekgurudata: [],
  isLoading: false,
  isRefresh: false,
};

const SurahPendekGuruReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SURAHPENDEKGURU_SUCCEED:
      return applyGetSurahPendekGuruSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_SURAHPENDEKGURUAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SURAHPENDEKGURUAWAL_SUCCEED:
      return applyGetSurahPendekAwalGuruSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_SURAHPENDEKGURU_SUCCEED:
      return applyGetSurahPendekGuruSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKGURU_SUCCEED:
      return applyGetSurahPendekByRumahTahfizGuruSucceed(state, action);
    // CREATE
    case ActionType.CREATE_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_SURAHPENDEKGURU_SUCCEED:
      return applyCreateSurahPendekGuruSucceed(state, action);
    // Update
    case ActionType.UPDATE_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_SURAHPENDEKGURU_SUCCEED:
      return applyUpdateSurahPendekGuruSucceed(state, action);
    // DELETE
    case ActionType.DELETE_SURAHPENDEKGURU_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_SURAHPENDEKGURU_SUCCEED:
      return applyDeleteSurahPendekGuruSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateSurahPendekGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: [...payload.data],
  };
};

const applyGetSurahPendekGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: payload.data,
  };
};

const applyGetSurahPendekByRumahTahfizGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: [...payload.data],
  };
};

const applyGetSurahPendekAwalGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: payload.data,
  };
};

const applyGetByIdSurahPendekGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: [payload.data],
  };
};

const applyUpdateSurahPendekGuruSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    surahpendekgurudata: [...payload.data],
  };
};

const applyDeleteSurahPendekGuruSucceed = (state, action) => {
  const { payload } = action;
  const surahpendek = state.surahpendekgurudata.filter(
    (el) => el.id !== payload
  );
  console.log(surahpendek);
  return {
    ...state,
    surahpendekgurudata: [...surahpendek],
    isLoading: false,
    isRefresh: false,
  };
};

export default SurahPendekGuruReducer;
