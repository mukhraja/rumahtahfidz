import { call, put } from "redux-saga/effects";
import {
  doGetRumahTahfidzSucceed,
  doGetRumahTahfidzFailed,
  doGetRumahTahfidzByIdSucceed,
  doGetRumahTahfidzByIdFailed,
  doCreateRumahTahfidzSucceed,
  doCreateRumahTahfidzFailed,
  doDeleteRumahTahfidzSucceed,
  doDeleteRumahTahfidzFailed,
  doUpdateNoFIleRumahTahfidzSucceed,
  doUpdateNoFIleRumahTahfidzFailed,
  doUpdateRumahTahfidzSucceed,
  doUpdateRumahTahfidzFailed,
} from "../actions/RumahTahfidz";
import apiRumahtahfidz from "../api/api-rumahtahfidz";

// GET
function* handleGetRumahTahfdiz() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiRumahtahfidz.list);
    yield put(doGetRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetRumahTahfidzFailed(error));
  }
}

// GET BY ID
function* handleGetByIdRumahTahfdiz(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.getrumahid, payload);
    yield put(doGetRumahTahfidzByIdSucceed(result));
  } catch (error) {
    yield put(doGetRumahTahfidzByIdFailed(error));
  }
}

// CREATE
function* handleCreateRumahTahfdiz(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.createrumah, payload);
    yield put(doCreateRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doCreateRumahTahfidzFailed(error));
  }
}

// HAPUS
function* handleDeleteRumahTahfdiz(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiRumahtahfidz.deleterumah, payload);
    yield put(doDeleteRumahTahfidzSucceed(payload));
  } catch (error) {
    yield put(doDeleteRumahTahfidzFailed(error));
  }
}

// UPDATE
function* handleUpdateRumahTahfdiz(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiRumahtahfidz.updaterumah, payload);
    yield put(doUpdateRumahTahfidzSucceed(payload));
  } catch (error) {
    yield put(doUpdateRumahTahfidzFailed(error));
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileRumahTahfdiz(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiRumahtahfidz.updaterumahNoFile, payload);
    yield put(doUpdateNoFIleRumahTahfidzSucceed(payload));
  } catch (error) {
    yield put(doUpdateNoFIleRumahTahfidzFailed(error));
  }
}

export {
  handleGetRumahTahfdiz,
  handleCreateRumahTahfdiz,
  handleDeleteRumahTahfdiz,
  handleGetByIdRumahTahfdiz,
  handleUpdateRumahTahfdiz,
  handleUpdateNoFileRumahTahfdiz,
};
