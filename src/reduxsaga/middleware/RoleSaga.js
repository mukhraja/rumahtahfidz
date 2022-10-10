import { call, put } from "redux-saga/effects";
import {
  doCreateRoleFailed,
  doCreateRoleSucceed,
  doDeleteRoleFailed,
  doDeleteRoleRequest,
  doGetRoleByIdFailed,
  doGetRoleByIdSucceed,
  doGetRoleFailed,
  doGetRoleSucceed,
  doUpdateRoleFailed,
  doUpdateRoleSucceed,
} from "../actions/Role";
import apiRole from "../api/api-role";

// GET
function* handleGetRole() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiRole.list);
    yield put(doGetRoleSucceed(result));
  } catch (error) {
    yield put(doGetRoleFailed(error));
  }
}

// GET BY ID
function* handleGetByIdRole(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiRole.getroleid, payload);
    yield put(doGetRoleByIdSucceed(result));
  } catch (error) {
    yield put(doGetRoleByIdFailed(error));
  }
}

// SANTRI
function* handleCreateRole(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiRole.createrole, payload);
    yield put(doCreateRoleSucceed(result));
  } catch (error) {
    yield put(doCreateRoleFailed(error));
  }
}

// HAPUS
function* handleDeleteRole(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiRole.deleterole, payload);
    yield put(doDeleteRoleRequest(payload));
  } catch (error) {
    yield put(doDeleteRoleFailed(error));
  }
}

// UPDATE
function* handleUpdateRole(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiRole.updaterole, payload);
    yield put(doUpdateRoleSucceed(payload));
  } catch (error) {
    yield put(doUpdateRoleFailed(error));
  }
}

export {
  handleGetRole,
  handleCreateRole,
  handleDeleteRole,
  handleGetByIdRole,
  handleUpdateRole,
};
