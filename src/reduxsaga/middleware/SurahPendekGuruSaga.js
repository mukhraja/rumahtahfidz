import { call, put } from "redux-saga/effects";
import {
  doCreateSurahPendekGuruFailed,
  doCreateSurahPendekGuruRequest,
  doCreateSurahPendekGuruSucceed,
  doDeleteSurahPendekGuruFailed,
  doDeleteSurahPendekGuruRequest,
  doDeleteSurahPendekGuruSucceed,
  doGetSurahPendekAwalGuruFailed,
  doGetSurahPendekAwalGuruRequest,
  doGetSurahPendekAwalGuruSucceed,
  doGetSurahPendekGuruByIdFailed,
  doGetSurahPendekGuruByIdSucceed,
  doGetSurahPendekGuruByRumahTahfidzFailed,
  doGetSurahPendekGuruByRumahTahfidzSucceed,
  doGetSurahPendekGuruFailed,
  doGetSurahPendekGuruSucceed,
  doUpdateSurahPendekGuruFailed,
  doUpdateSurahPendekGuruRequest,
  doUpdateSurahPendekGuruSucceed,
} from "../actions/SurahPendekGuru";
import apiSurahpendekguru from "../api/api-surahpendekguru";

// GET
function* handleGetSurahPendekGuru(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSurahpendekguru.list, payload);
    yield put(doGetSurahPendekGuruSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekGuruFailed(error));
  }
}

// GETLISTAWAL
function* handleGetSurahPendekAwalGuru() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSurahpendekguru.listawal);
    yield put(doGetSurahPendekAwalGuruSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekAwalGuruFailed(error));
  }
}

// GET BY ID
function* handleGetByIdSurahPendekGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSurahpendekguru.getsurahpendekid, payload);
    yield put(doGetSurahPendekGuruByIdSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekGuruByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzSurahPendekGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSurahpendekguru.getsurahpendekrumahtahfidz, payload);
    yield put(doGetSurahPendekGuruByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekGuruByRumahTahfidzFailed(error));
  }
}

// Guru
function* handleCreateSurahPendekGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSurahpendekguru.createsurahpendek, payload);
    yield put(doCreateSurahPendekGuruSucceed(result));
  } catch (error) {
    yield put(doCreateSurahPendekGuruFailed(error));
  }
}

// HAPUS
function* handleDeleteSurahPendekGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSurahpendekguru.deletesurahpendek, payload);
    yield put(doDeleteSurahPendekGuruSucceed(payload));
  } catch (error) {
    yield put(doDeleteSurahPendekGuruFailed(error));
  }
}

// UPDATE
function* handleUpdateSurahPendekGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSurahpendekguru.updatesurahpendek, payload);
    yield put(doUpdateSurahPendekGuruSucceed(payload));
  } catch (error) {
    yield put(doUpdateSurahPendekGuruFailed(error));
  }
}

export {
  handleGetSurahPendekGuru,
  handleGetSurahPendekAwalGuru,
  handleCreateSurahPendekGuru,
  handleDeleteSurahPendekGuru,
  handleGetByIdSurahPendekGuru,
  handleUpdateSurahPendekGuru,
  handleGetByRumahTahfidzSurahPendekGuru
};
