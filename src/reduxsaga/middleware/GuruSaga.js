import { call, put } from "redux-saga/effects";
import {
  doGetGuruSucceed,
  doGetGuruFailed,
  doGetGuruByIdSucceed,
  doGetGuruByIdFailed,
  doCreateGuruSucceed,
  doCreateGuruFailed,
  doDeleteGuruSucceed,
  doDeleteGuruFailed,
  doUpdateGuruSucceed,
  doUpdateGuruFailed,
  doUpdateNoFIleGuruSucceed,
  doUpdateNoFIleGuruFailed,
  doGetGuruByRumahTahfidzSucceed,
  doGetGuruByRumahTahfidzFailed,
} from "../actions/Guru";
import apiGuru from "../api/api-guru";

function* handleGetGuru() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiGuru.list);
    yield put(doGetGuruSucceed(result));
  } catch (error) {
    yield put(doGetGuruFailed(error));
  }
}

// GET BY ID
function* handleGetByIdGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiGuru.getguruid, payload);
    yield put(doGetGuruByIdSucceed(result));
  } catch (error) {
    yield put(doGetGuruByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiGuru.getgururumahtahfidz, payload);
    yield put(doGetGuruByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetGuruByRumahTahfidzFailed(error));
  }
}

// Guru
function* handleCreateGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiGuru.createguru, payload);
    yield put(doCreateGuruSucceed(result));
  } catch (error) {
    yield put(doCreateGuruFailed(error));
  }
}

// HAPUS
function* handleDeleteGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiGuru.deleteguru, payload);
    yield put(doDeleteGuruSucceed(payload));
  } catch (error) {
    yield put(doDeleteGuruFailed(error));
  }
}

// UPDATE
function* handleUpdateGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiGuru.updateguru, payload);
    yield put(doUpdateGuruSucceed(payload));
  } catch (error) {
    yield put(doUpdateGuruFailed(error));
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiGuru.updateguruNoFile, payload);
    yield put(doUpdateNoFIleGuruSucceed(payload));
  } catch (error) {
    yield put(doUpdateNoFIleGuruFailed(error));
  }
}

export {
  handleGetGuru,
  handleCreateGuru,
  handleGetByIdGuru,
  handleUpdateGuru,
  handleDeleteGuru,
  handleUpdateNoFileGuru,
  handleGetByRumahTahfidzGuru
};
