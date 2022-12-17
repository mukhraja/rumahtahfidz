import { call, put } from "redux-saga/effects";
import {
  doGetAlquranGuruByRumahTahfidzFailed,
  doGetAlquranGuruByRumahTahfidzSucceed,
} from "../actions/Alquranguru";
import * as All from "../actions/Alquransantri";
import apiAlquransantri from "../api/api-alquransantri";

// GET
function* handleGetAlquranSantri(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiAlquransantri.list, payload);
    yield put(All.doGetAlquranSantriSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranSantriFailed(error));
  }
}

// GETLISTAWAL
function* handleGetAlquranAwalSantri() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiAlquransantri.listawal);
    yield put(All.doGetAlquranAwalSantriSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranAwalSantriFailed(error));
  }
}

// GET BY ID
function* handleGetByIdAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquransantri.getalquranid, payload);
    yield put(All.doGetAlquranSantriByIdSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranSantriByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquransantri.getalquranrumahtahfidz, payload);
    yield put(All.doGetAlquranSantriByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranSantriByRumahTahfidzFailed(error));
  }
}

// GET BY MASTERTAHFIZ
function* handleGetByMasterTahfidzAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(
      apiAlquransantri.getalquranmastertahfidz,
      payload
    );
    yield put(All.doGetAlquranSantriByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranSantriByRumahTahfidzFailed(error));
  }
}

// GET BY Alquran Santri
function* handleGetByUserIdAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquransantri.getalquranbyuserid, payload);
    yield put(All.doGetAlquranSantriByUserIdSucceed(result));
  } catch (error) {
    yield put(All.doGetAlquranSantriByUserIdFailed(error));
  }
}

// SANTRI
function* handleCreateAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiAlquransantri.createalquran, payload);
    yield put(All.doCreateAlquranSantriSucceed(result));
  } catch (error) {
    yield put(All.doCreateAlquranSantriFailed(error));
  }
}

// HAPUS
function* handleDeleteAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiAlquransantri.deletealquran, payload);
    yield put(All.doDeleteAlquranSantriSucceed(payload));
  } catch (error) {
    yield put(All.doDeleteAlquranSantriFailed(error));
  }
}

// UPDATE
function* handleUpdateAlquranSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiAlquransantri.updatealquran, payload);
    yield put(All.doUpdateAlquranSantriSucceed(payload));
  } catch (error) {
    yield put(All.doUpdateAlquranSantriFailed(error));
  }
}

export {
  handleGetAlquranSantri,
  handleGetAlquranAwalSantri,
  handleCreateAlquranSantri,
  handleDeleteAlquranSantri,
  handleGetByIdAlquranSantri,
  handleUpdateAlquranSantri,
  handleGetByRumahTahfidzAlquranSantri,
  handleGetByMasterTahfidzAlquranSantri,
  handleGetByUserIdAlquranSantri,
};
