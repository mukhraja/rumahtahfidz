import { call, put } from "redux-saga/effects";
import {
  doUpdateNoFIleRumahTahfidzFailed,
  doUpdateNoFIleRumahTahfidzSucceed,
} from "../actions/RumahTahfidz";
import {
  doGetSantriSucceed,
  doGetSantriFailed,
  doCreateSantriSucceed,
  doCreateSantriFailed,
  doDeleteSantriSucceed,
  doDeleteSantriFailed,
  doGetSantriByIdSucceed,
  doGetSantriByIdFailed,
  doUpdateSantriSucceed,
  doUpdateSantriFailed,
  doUpdateNoFIleSantriRequest,
  doUpdateNoFIleSantriSucceed,
  doUpdateNoFIleSantriFailed,
} from "../actions/Santri";
import apiSantri from "../api/api-santri";

// GET
function* handleGetSantri() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSantri.list);
    yield put(doGetSantriSucceed(result));
  } catch (error) {
    yield put(doGetSantriFailed(error));
  }
}

// GET BY ID
function* handleGetByIdSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.getsantriid, payload);
    yield put(doGetSantriByIdSucceed(result));
  } catch (error) {
    yield put(doGetSantriByIdFailed(error));
  }
}

// SANTRI
function* handleCreateSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.createsantri, payload);
    yield put(doCreateSantriSucceed(result));
  } catch (error) {
    yield put(doCreateSantriFailed(error));
  }
}

// HAPUS
function* handleDeleteSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSantri.deletesantri, payload);
    yield put(doDeleteSantriSucceed(payload));
  } catch (error) {
    yield put(doDeleteSantriFailed(error));
  }
}

// UPDATE
function* handleUpdateSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSantri.updateSantri, payload);
    yield put(doUpdateSantriSucceed(payload));
  } catch (error) {
    yield put(doUpdateSantriFailed(error));
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSantri.updateSantriNoFile, payload);
    yield put(doUpdateNoFIleSantriSucceed(payload));
  } catch (error) {
    yield put(doUpdateNoFIleSantriFailed(error));
  }
}

export {
  handleGetSantri,
  handleCreateSantri,
  handleDeleteSantri,
  handleGetByIdSantri,
  handleUpdateSantri,
  handleUpdateNoFileSantri,
};
