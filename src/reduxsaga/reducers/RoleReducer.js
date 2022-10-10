import * as ActionType from "../constants/Role";

const INIT_STATE = {
  roledata: [],
  isLoading: false,
  isRefresh: false,
};

const RoleReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // GETALL
    case ActionType.GET_ROLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_ROLE_SUCCEED:
      return applyGetRoleSucceed(state, action);
    // GETBYID
    case ActionType.GET_BY_ID_ROLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_BY_ID_ROLE_SUCCEED:
      return applyGetByIdRoleSucceed(state, action);
    // CREATE
    case ActionType.CREATE_ROLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.CREATE_ROLE_SUCCEED:
      return applyCreateRoleSucceed(state, action);
    // Update
    case ActionType.UPDATE_ROLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.UPDATE_ROLE_SUCCEED:
      return applyUpdateRoleSucceed(state, action);
    // DELETE
    case ActionType.DELETE_ROLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.DELETE_ROLE_SUCCEED:
      return applyDeleteRoleSucceed(state, action);
    default:
      return state;
  }
};

const applyCreateRoleSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    roledata: [...payload.data],
  };
};

const applyGetRoleSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    roledata: payload.data,
  };
};

const applyGetByIdRoleSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    roledata: [payload.data],
  };
};

const applyUpdateRoleSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    roledata: [...payload.data],
  };
};

const applyUpdateNoFileRoleSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    roledata: [payload],
  };
};

const applyDeleteRoleSucceed = (state, action) => {
  const { payload } = action;
  const Role = state.roledata.filter((el) => el.id !== payload);
  console.log(Role);
  return {
    ...state,
    roledata: [...Role],
    isLoading: false,
    isRefresh: false,
  };
};

export default RoleReducer;
