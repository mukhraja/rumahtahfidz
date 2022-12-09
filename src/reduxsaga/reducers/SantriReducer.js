import * as ActionType from "../constants/Santri";

const INIT_STATE = {
  santridata: [],
  isLoading: false,
  isRefresh: false,
};

const SantriReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_SANTRI_SUCCEED:
      return applyGetSantriSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_SANTRI_SUCCEED:
      return applyGetByIdSantriSucceed(state, action);
    // GETBYRUMAHTAHFIDZ
    case ActionType.GET_BY_RUMAHTAHFIDZ_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_RUMAHTAHFIDZ_SANTRI_SUCCEED:
      return applyGetByRumahTahfizSantriSucceed(state, action);
    // GETBYMASTERTAHFIDZ
    case ActionType.GET_BY_MASTERTAHFIDZ_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_MASTERTAHFIDZ_SANTRI_SUCCEED:
      return applyGetByMasterTahfizSantriSucceed(state, action);
    // CREATE
    case ActionType.CREATE_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_SANTRI_SUCCEED:
      return applyCreateSantriSucceed(state, action);
    // Update
    case ActionType.UPDATE_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_SANTRI_SUCCEED:
      return applyUpdateSantriSucceed(state, action);
    // UPDATE NO FILE
    case ActionType.UPDATE_SANTRI_NOFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_SANTRI_NOFILE_SUCCEED:
      return applyUpdateNoFileSantriSucceed(state, action);
    // DELETE
    case ActionType.DELETE_SANTRI_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_SANTRI_SUCCEED:
      return applyDeleteSantriSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [...payload.data],
  };
};

const applyGetSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: payload.data,
  };
};

const applyGetByIdSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [payload.data],
  };
};

const applyGetByRumahTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [...payload.data],
  };
};

const applyGetByMasterTahfizSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [...payload.data],
  };
};

const applyUpdateSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [{ id: payload.get("id") }],
  };
};

const applyUpdateNoFileSantriSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    santridata: [payload],
  };
};

const applyDeleteSantriSucceed = (state, action) => {
  const { payload } = action;
  const santri = state.santridata.filter((el) => el.id !== payload);
  console.log(santri);
  return {
    ...state,
    santridata: [...santri],
    isLoading: false,
    isRefresh: false,
  };
};

export default SantriReducer;
