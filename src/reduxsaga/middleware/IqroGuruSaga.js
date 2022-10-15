import { call, put } from "redux-saga/effects";
import {
  doCreateIqroGuruFailed,
  doCreateIqroGuruSucceed,
  doDeleteIqroGuruFailed,
  doDeleteIqroGuruSucceed,
  doGetIqroAwalGuruFailed,
  doGetIqroAwalGuruSucceed,
  doGetIqroGuruByIdFailed,
  doGetIqroGuruByIdSucceed,
  doGetIqroGuruFailed,
  doGetIqroGuruSucceed,
  doUpdateIqroGuruFailed,
  doUpdateIqroGuruSucceed,
} from "../actions/IqroGuru";
import apiIqroguru from "../api/api-iqroguru";

// GET
function* handleGetIqroGuru(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiIqroguru.list, payload);
    yield put(doGetIqroGuruSucceed(result));
  } catch (error) {
    yield put(doGetIqroGuruFailed(error));
  }
}

// GETLISTAWAL
function* handleGetIqroAwalGuru() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiIqroguru.listawal);
    yield put(doGetIqroAwalGuruSucceed(result));
  } catch (error) {
    yield put(doGetIqroAwalGuruFailed(error));
  }
}

// GET BY ID
function* handleGetByIdIqroGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiIqroguru.getiqroid, payload);
    yield put(doGetIqroGuruByIdSucceed(result));
  } catch (error) {
    yield put(doGetIqroGuruByIdFailed(error));
  }
}

// Guru
function* handleCreateIqroGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiIqroguru.createiqro, payload);
    yield put(doCreateIqroGuruSucceed(result));
  } catch (error) {
    yield put(doCreateIqroGuruFailed(error));
  }
}

// HAPUS
function* handleDeleteIqroGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiIqroguru.deleteiqro, payload);
    yield put(doDeleteIqroGuruSucceed(payload));
  } catch (error) {
    yield put(doDeleteIqroGuruFailed(error));
  }
}

// UPDATE
function* handleUpdateIqroGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiIqroguru.updateiqro, payload);
    yield put(doUpdateIqroGuruSucceed(payload));
  } catch (error) {
    yield put(doUpdateIqroGuruFailed(error));
  }
}

export {
  handleGetIqroGuru,
  handleGetIqroAwalGuru,
  handleCreateIqroGuru,
  handleDeleteIqroGuru,
  handleGetByIdIqroGuru,
  handleUpdateIqroGuru,
};
