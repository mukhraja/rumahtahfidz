import { call, put } from "redux-saga/effects";
import {
  doGetMasterPondokSucceed,
  doGetMasterPondokFailed,
  doGetMasterPondokByIdSucceed,
  doGetMasterPondokByIdFailed,
  doCreateMasterPondokSucceed,
  doCreateMasterPondokFailed,
  doDeleteMasterPondokSucceed,
  doDeleteMasterPondokFailed,
  doUpdateNoFIleMasterPondokSucceed,
  doUpdateNoFIleMasterPondokFailed,
  doUpdateMasterPondokSucceed,
  doUpdateMasterPondokFailed,
  doGetByMasterPondokSucceed,
  doGetByMasterPondokFailed,
} from "../actions/Masterpondok";
import apiMasterpondok from "../api/api-masterpondok";

// GET
function* handleGetMasterPondok() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiMasterpondok.list);
    yield put(doGetMasterPondokSucceed(result));
  } catch (error) {
    yield put(doGetMasterPondokFailed(error));
  }
}

// GET BY ID
function* handleGetByIdMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiMasterpondok.getmasterpondokid, payload);
    yield put(doGetMasterPondokByIdSucceed(result));
  } catch (error) {
    yield put(doGetMasterPondokByIdFailed(error));
  }
}

// GET BY Master Pondok
function* handleGetByMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiMasterpondok.getbymasterpondoks, payload);
    yield put(doGetByMasterPondokSucceed(result));
  } catch (error) {
    yield put(doGetByMasterPondokFailed(error));
  }
}

// CREATE
function* handleCreateMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiMasterpondok.createmasterpondok, payload);
    yield put(doCreateMasterPondokSucceed(result));
  } catch (error) {
    yield put(doCreateMasterPondokFailed(error));
  }
}

// HAPUS
function* handleDeleteMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiMasterpondok.deletemasterpondok, payload);
    yield put(doDeleteMasterPondokSucceed(payload));
  } catch (error) {
    yield put(doDeleteMasterPondokFailed(error));
  }
}

// UPDATE
function* handleUpdateMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiMasterpondok.updatemasterpondok, payload);
    yield put(doUpdateMasterPondokSucceed(payload));
  } catch (error) {
    yield put(doUpdateMasterPondokFailed(error));
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileMasterPondok(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(
      apiMasterpondok.updatemasterpondokNoFile,
      payload
    );
    yield put(doUpdateNoFIleMasterPondokSucceed(payload));
  } catch (error) {
    yield put(doUpdateNoFIleMasterPondokFailed(error));
  }
}

export {
  handleGetMasterPondok,
  handleCreateMasterPondok,
  handleDeleteMasterPondok,
  handleGetByIdMasterPondok,
  handleUpdateMasterPondok,
  handleUpdateNoFileMasterPondok,
  handleGetByMasterPondok,
};
