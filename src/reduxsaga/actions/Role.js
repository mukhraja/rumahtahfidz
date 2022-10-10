import * as ActionType from "../constants/Role";

// GET
export const doGetRoleRequest = () => ({
  type: ActionType.GET_ROLE_REQUEST,
});

export const doGetRoleSucceed = (payload) => ({
  type: ActionType.GET_ROLE_SUCCEED,
  payload,
});

export const doGetRoleFailed = (payload) => ({
  type: ActionType.GET_ROLE_FAILED,
  payload,
});

// GET BY ID
export const doGetRoleByIdRequest = (payload) => ({
  type: ActionType.GET_BY_ID_ROLE_REQUEST,
  payload,
});

export const doGetRoleByIdSucceed = (payload) => ({
  type: ActionType.GET_BY_ID_ROLE_SUCCEED,
  payload,
});

export const doGetRoleByIdFailed = (payload) => ({
  type: ActionType.GET_BY_ID_ROLE_FAILED,
  payload,
});

// CREATE
export const doCreateRoleRequest = (payload) => ({
  type: ActionType.CREATE_ROLE_REQUEST,
  payload,
});

export const doCreateRoleSucceed = (payload) => ({
  type: ActionType.CREATE_ROLE_SUCCEED,
  payload,
});

export const doCreateRoleFailed = (payload) => ({
  type: ActionType.CREATE_ROLE_FAILED,
  payload,
});

// DELETE

export const doDeleteRoleRequest = (payload) => ({
  type: ActionType.DELETE_ROLE_REQUEST,
  payload,
});

export const doDeleteRoleSucceed = (payload) => ({
  type: ActionType.DELETE_ROLE_SUCCEED,
  payload,
});

export const doDeleteRoleFailed = (payload) => ({
  type: ActionType.DELETE_ROLE_FAILED,
  payload,
});

// Update
export const doUpdateRoleRequest = (payload) => ({
  type: ActionType.UPDATE_ROLE_REQUEST,
  payload,
});

export const doUpdateRoleSucceed = (payload) => ({
  type: ActionType.UPDATE_ROLE_SUCCEED,
  payload,
});

export const doUpdateRoleFailed = (payload) => ({
  type: ActionType.UPDATE_ROLE_FAILED,
  payload,
});
