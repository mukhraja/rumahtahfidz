import { call, put } from "redux-saga/effects";
import * as All from "../actions/Alquranguru";
import apiAlquranguru from "../api/api-alquranguru";

// GET
function* handleGetAlquranGuru(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiAlquranguru.list, payload);
    yield put(All.doGetAlquranGuruSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranGuruFailed(error));
  }
}

// GETLISTAWAL
function* handleGetAlquranAwalGuru() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiAlquranguru.listawal);
    yield put(All.doGetAlquranAwalGuruSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranAwalGuruFailed(error));
  }
}

// GET BY ID
function* handleGetByIdAlquranGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquranguru.getalquranid, payload);
    yield put(All.doGetAlquranGuruByIdSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranGuruByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzAlquranGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquranguru.getalquranrumahtahfidz, payload);
    yield put(All.doGetAlquranGuruByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranGuruByRumahTahfidzFailed(error));
  }
}

// Guru
function* handleCreateAlquranGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquranguru.createalquran, payload);
    yield put(All.doCreateAlquranGuruSucceed(result));
  } catch (error) {
    yield put(All.doCreateAlquranGuruFailed(error));
  }
}

// HAPUS
function* handleDeleteAlquranGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiAlquranguru.deletealquran, payload);
    yield put(All.doDeleteAlquranGuruSucceed(payload));
  } catch (error) {
    yield put(All.doDeleteAlquranGuruFailed(error));
  }
}

// UPDATE
function* handleUpdateAlquranGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiAlquranguru.updatealquran, payload);
    yield put(All.doUpdateAlquranGuruSucceed(payload));
  } catch (error) {
    yield put(All.doUpdateAlquranGuruFailed(error));
  }
}

export {
  handleGetAlquranGuru,
  handleGetAlquranAwalGuru,
  handleCreateAlquranGuru,
  handleDeleteAlquranGuru,
  handleGetByIdAlquranGuru,
  handleUpdateAlquranGuru,
  handleGetByRumahTahfidzAlquranGuru
};
