import { call, put } from "redux-saga/effects";
import {
  doCreateIqroSantriFailed,
  doCreateIqroSantriSucceed,
  doDeleteIqroSantriFailed,
  doDeleteIqroSantriSucceed,
  doGetIqroAwalSantriFailed,
  doGetIqroAwalSantriSucceed,
  doGetIqroSantriByIdFailed,
  doGetIqroSantriByIdSucceed,
  doGetIqroSantriFailed,
  doGetIqroSantriSucceed,
  doUpdateIqroSantriFailed,
  doUpdateIqroSantriSucceed,
} from "../actions/Iqrosantri";
import apiIqrosantri from "../api/api-iqrosantri";

// GET
function* handleGetIqroSantri(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiIqrosantri.list, payload);
    yield put(doGetIqroSantriSucceed(result));
  } catch (error) {
    yield put(doGetIqroSantriFailed(error));
  }
}

// GETLISTAWAL
function* handleGetIqroAwalSantri() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiIqrosantri.listawal);
    yield put(doGetIqroAwalSantriSucceed(result));
  } catch (error) {
    yield put(doGetIqroAwalSantriFailed(error));
  }
}

// GET BY ID
function* handleGetByIdIqroSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiIqrosantri.getiqroid, payload);
    yield put(doGetIqroSantriByIdSucceed(result));
  } catch (error) {
    yield put(doGetIqroSantriByIdFailed(error));
  }
}

// SANTRI
function* handleCreateIqroSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiIqrosantri.createiqro, payload);
    yield put(doCreateIqroSantriSucceed(result));
  } catch (error) {
    yield put(doCreateIqroSantriFailed(error));
  }
}

// HAPUS
function* handleDeleteIqroSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiIqrosantri.deleteiqro, payload);
    yield put(doDeleteIqroSantriSucceed(payload));
  } catch (error) {
    yield put(doDeleteIqroSantriFailed(error));
  }
}

// UPDATE
function* handleUpdateIqroSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiIqrosantri.updateiqro, payload);
    yield put(doUpdateIqroSantriSucceed(payload));
  } catch (error) {
    yield put(doUpdateIqroSantriFailed(error));
  }
}

export {
  handleGetIqroSantri,
  handleGetIqroAwalSantri,
  handleCreateIqroSantri,
  handleDeleteIqroSantri,
  handleGetByIdIqroSantri,
  handleUpdateIqroSantri,
};
