import * as ActionType from "../constants/IqroSantri";

const INIT_STATE = {
  iqrosantridata: [],
  isLoading: false,
  isRefresh: false,
};

const IqroSantriReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_IQROSANTRI_SUCCEED:
      return applyGetIqroSantriSucceed(state, action);
    // GETLISTAWAL
    case ActionType.GET_IQROSANTRIAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_IQROSANTRIAWAL_SUCCEED:
      return applyGetIqroAwalSantriSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_IQROSANTRI_SUCCEED:
      return applyGetByIdIqroSantriSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_IQROSANTRI_SUCCEED:
      return applyGetIqroSantriByRumahTahfizSantriSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_IQROSANTRI_SUCCEED:
      return applyGetIqroSantriByMasterTahfizSantriSucceed(state, action);
    // GETBYUSERID
    case ActionType.GET_BY_USERID_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_USERID_IQROSANTRI_SUCCEED:
      return applyGetIqroSantriByUserIdSantriSucceed(state, action);
    // CREATE
    case ActionType.CREATE_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_IQROSANTRI_SUCCEED:
      return applyCreateSantriSucceed(state, action);
    // Update
    case ActionType.UPDATE_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_IQROSANTRI_SUCCEED:
      return applyUpdateIqroSantriSucceed(state, action);
    // DELETE
    case ActionType.DELETE_IQROSANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_IQROSANTRI_SUCCEED:
      return applyDeleteIqroSantriSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [...payload.data],
  };
};

const applyGetIqroSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: payload.data,
  };
};

const applyGetIqroSantriByRumahTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [...payload.data],
  };
};

const applyGetIqroSantriByMasterTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [...payload.data],
  };
};

const applyGetIqroSantriByUserIdSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [...payload.data],
  };
};

const applyGetIqroAwalSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: payload.data,
  };
};

const applyGetByIdIqroSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [payload.data],
  };
};

const applyUpdateIqroSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    iqrosantridata: [...payload.data],
  };
};

const applyDeleteIqroSantriSucceed = (state, action) => {
  const { payload } = action;
  const iqrodata = state.iqrosantridata.filter((el) => el.id !== payload);
  console.log(iqrodata);
  return {
    ...state,
    iqrosantridata: [...iqrodata],
    isLoading: false,
    isRefresh: false,
  };
};

export default IqroSantriReducer;
