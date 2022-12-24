import { toast } from "react-toastify";
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
  doGetByRumahTahfidzSucceed,
  doGetByRumahTahfidzFailed,
  doGetByPondokIdRumahTahfidzRequest,
  doGetByPondokIdRumahTahfidzFailed,
  doGetByPondokIdRumahTahfidzSucceed,
} from "../actions/RumahTahfidz";
import apiRumahtahfidz from "../api/api-rumahtahfidz";

// GET
function* handleGetRumahTahfdiz() {
  try {
    const result = yield call(apiRumahtahfidz.list);
    if (result.code === "ERR_NETWORK") {
      yield put(doGetRumahTahfidzFailed());
    } else {
      yield put(doGetRumahTahfidzSucceed(result));
    }
  } catch (error) {
    yield put(doGetRumahTahfidzFailed(error));
  }
}

// GET BY ID
function* handleGetByIdRumahTahfdiz(action) {
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.getrumahid, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      localStorage.clear();
    } else {
      yield put(doGetRumahTahfidzByIdSucceed(result));
    }
  } catch (error) {
    yield put(doGetRumahTahfidzByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIDZ
function* handleGetByRumahTahfdiz(action) {
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.getbyrumahtahfidz, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      localStorage.clear();
    } else {
      yield put(doGetByRumahTahfidzSucceed(result));
    }
  } catch (error) {
    yield put(doGetByRumahTahfidzFailed(error));
  }
}

// GET BY PONDOKID RUMAHTAHFIDZ
function* handleGetByPondokIdRumahTahfdiz(action) {
  const { payload } = action;

  try {
    const result = yield call(
      apiRumahtahfidz.getbypondokidrumahtahfidz,
      payload
    );
    if (result.code === "ERR_BAD_REQUEST") {
      localStorage.clear();
    } else {
      yield put(doGetByPondokIdRumahTahfidzSucceed(result));
    }
  } catch (error) {
    yield put(doGetByPondokIdRumahTahfidzFailed(error));
  }
}

// CREATE
function* handleCreateRumahTahfdiz(action) {
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.createrumah, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doCreateRumahTahfidzSucceed(result));
      yield call(toast, "Data berhasil ditambahkan", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doCreateRumahTahfidzFailed(error));
    yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// HAPUS
function* handleDeleteRumahTahfdiz(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRumahtahfidz.deleterumah, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan data yang dihapus", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doDeleteRumahTahfidzSucceed(payload));
      yield call(toast, "Data berhasil dihapus", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doDeleteRumahTahfidzFailed(error));
    yield call(toast, "Pastikan data yang dihapus", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE
function* handleUpdateRumahTahfdiz(action) {
  const { payload } = action;
  try {
    const result = yield call(apiRumahtahfidz.updaterumah, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateRumahTahfidzSucceed(payload));
      yield call(toast, "Data berhasil diperbaharui", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateRumahTahfidzFailed(error));
    yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileRumahTahfdiz(action) {
  const { payload } = action;

  try {
    const result = yield call(apiRumahtahfidz.updaterumahNoFile, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateNoFIleRumahTahfidzSucceed(payload));
      yield call(toast, "Data berhasil diperharui", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateNoFIleRumahTahfidzFailed(error));
    yield call(toast, "Pastikan Nama dan NIT Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

export {
  handleGetRumahTahfdiz,
  handleCreateRumahTahfdiz,
  handleDeleteRumahTahfdiz,
  handleGetByIdRumahTahfdiz,
  handleUpdateRumahTahfdiz,
  handleUpdateNoFileRumahTahfdiz,
  handleGetByRumahTahfdiz,
  handleGetByPondokIdRumahTahfdiz,
};
