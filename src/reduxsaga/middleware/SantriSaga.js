import { toast } from "react-toastify";
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
  doGetSantriByRumahTahfidzSucceed,
  doGetSantriByRumahTahfidzFailed,
  doGetSantriByMasterTahfidzRequest,
  doGetSantriByMasterTahfidzSucceed,
  doGetSantriByMasterTahfidzFailed,
  doGetSantriByUserIdRequest,
  doGetSantriByUserIdSucceed,
  doGetSantriByUserIdFailed,
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

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.getsantrirumahtahfidz, payload);
    yield put(doGetSantriByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetSantriByRumahTahfidzFailed(error));
  }
}

// GET BY MASTERTAHFIZ
function* handleGetByMasterTahfidzSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.getsantrimastertahfidz, payload);
    yield put(doGetSantriByMasterTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetSantriByMasterTahfidzFailed(error));
  }
}

// GET BY USER ID
function* handleGetByUserSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.getsantribyuserid, payload);
    yield put(doGetSantriByUserIdSucceed(result));
  } catch (error) {
    yield put(doGetSantriByUserIdFailed(error));
  }
}

// SANTRI
function* handleCreateSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiSantri.createsantri, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doCreateSantriSucceed(result));
      yield call(toast, "Data berhasil ditambahkan", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doCreateSantriFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// HAPUS
function* handleDeleteSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSantri.deletesantri, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Mohon Periksa Kembali", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doDeleteSantriSucceed(payload));
      yield call(toast, "Data berhasil dihapus", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doDeleteSantriFailed(error));
    yield call(toast, "Mohon Periksa Kembali", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE
function* handleUpdateSantri(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiSantri.updateSantri, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateSantriSucceed(payload));
      yield call(toast, "Data berhasil diperbaharui", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateSantriFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileSantri(action) {
  const { payload } = action;
  try {
    const result = yield call(apiSantri.updateSantriNoFile, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateNoFIleSantriSucceed(payload));
      yield call(toast, "Data berhasil ditambahkan", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateNoFIleSantriFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

export {
  handleGetSantri,
  handleCreateSantri,
  handleDeleteSantri,
  handleGetByIdSantri,
  handleUpdateSantri,
  handleUpdateNoFileSantri,
  handleGetByRumahTahfidzSantri,
  handleGetByMasterTahfidzSantri,
  handleGetByUserSantri,
};
