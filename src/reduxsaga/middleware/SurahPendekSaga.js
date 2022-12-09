import { call, put } from "redux-saga/effects";
import {
  doCreateSurahPendekSantriFailed,
  doCreateSurahPendekSantriRequest,
  doCreateSurahPendekSantriSucceed,
  doDeleteSurahPendekSantriFailed,
  doDeleteSurahPendekSantriRequest,
  doDeleteSurahPendekSantriSucceed,
  doGetSurahPendekAwalSantriFailed,
  doGetSurahPendekAwalSantriRequest,
  doGetSurahPendekAwalSantriSucceed,
  doGetSurahPendekSantriByIdFailed,
  doGetSurahPendekSantriByIdSucceed,
  doGetSurahPendekSantriByMasterTahfidzFailed,
  doGetSurahPendekSantriByMasterTahfidzSucceed,
  doGetSurahPendekSantriByRumahTahfidzFailed,
  doGetSurahPendekSantriByRumahTahfidzSucceed,
  doGetSurahPendekSantriFailed,
  doGetSurahPendekSantriSucceed,
  doUpdateSurahPendekSantriFailed,
  doUpdateSurahPendekSantriRequest,
  doUpdateSurahPendekSantriSucceed,
} from "../actions/SurahPendekSantri";
import apiIqrosantri from "../api/api-iqrosantri";
import apiSurahpendeksantri from "../api/api-surahpendeksantri";

// GET
function* handleGetSurahPendekSantri(action) {
  const { payload } = action;
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSurahpendeksantri.list, payload);
    yield put(doGetSurahPendekSantriSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekSantriFailed(error));
  }
}

// GETLISTAWAL
function* handleGetSurahPendekAwalSantri() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSurahpendeksantri.listawal);
    yield put(doGetSurahPendekAwalSantriSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekAwalSantriFailed(error));
  }
}

// GET BY ID
function* handleGetByIdSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSurahpendeksantri.getsurahpendekid, payload);
    yield put(doGetSurahPendekSantriByIdSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekSantriByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(
      apiSurahpendeksantri.getsurahpendekrumahtahfidz,
      payload
    );
    yield put(doGetSurahPendekSantriByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekSantriByRumahTahfidzFailed(error));
  }
}

// GET BY MASTER TAHFIZ
function* handleGetByMasterTahfidzSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(
      apiSurahpendeksantri.getsurahpendekmastertahfidz,
      payload
    );
    yield put(doGetSurahPendekSantriByMasterTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetSurahPendekSantriByMasterTahfidzFailed(error));
  }
}

// SANTRI
function* handleCreateSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSurahpendeksantri.createsurahpendek, payload);
    yield put(doCreateSurahPendekSantriSucceed(result));
  } catch (error) {
    yield put(doCreateSurahPendekSantriFailed(error));
  }
}

// HAPUS
function* handleDeleteSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSurahpendeksantri.deletesurahpendek, payload);
    yield put(doDeleteSurahPendekSantriSucceed(payload));
  } catch (error) {
    yield put(doDeleteSurahPendekSantriFailed(error));
  }
}

// UPDATE
function* handleUpdateSurahPendekSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSurahpendeksantri.updatesurahpendek, payload);
    yield put(doUpdateSurahPendekSantriSucceed(payload));
  } catch (error) {
    yield put(doUpdateSurahPendekSantriFailed(error));
  }
}

export {
  handleGetSurahPendekSantri,
  handleGetSurahPendekAwalSantri,
  handleCreateSurahPendekSantri,
  handleDeleteSurahPendekSantri,
  handleGetByIdSurahPendekSantri,
  handleUpdateSurahPendekSantri,
  handleGetByRumahTahfidzSurahPendekSantri,
  handleGetByMasterTahfidzSurahPendekSantri,
};
