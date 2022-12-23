import { toast } from "react-toastify";
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
  doGetGuruByMasterTahfidzSucceed,
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

// GET BY MASTERTAHFIZ
function* handleGetByMasterTahfidzGuru(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiGuru.getgurumastertahfidz, payload);
    yield put(doGetGuruByMasterTahfidzSucceed(result));
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
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doCreateGuruSucceed(result));
      yield call(toast, "Data berhasil ditambahkan", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doCreateGuruFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// HAPUS
function* handleDeleteGuru(action) {
  const { payload } = action;

  try {
    const result = yield call(apiGuru.deleteguru, payload);

    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan data benar", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doDeleteGuruSucceed(payload));
      yield call(toast, "Data berhasil dihapus", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doDeleteGuruFailed(error));
    yield call(toast, "Pastikan data benar", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE
function* handleUpdateGuru(action) {
  const { payload } = action;

  try {
    const result = yield call(apiGuru.updateguru, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateGuruSucceed(payload));
      yield call(toast, "Data berhasil diperbaharui", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateGuruFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileGuru(action) {
  const { payload } = action;

  try {
    const result = yield call(apiGuru.updateguruNoFile, payload);
    if (result.code === "ERR_BAD_REQUEST") {
      yield call(toast, "Pastikan NIS Tidak Sama", {
        type: toast.TYPE.ERROR,
      });
    } else {
      yield put(doUpdateNoFIleGuruSucceed(payload));
      yield call(toast, "Data berhasil diperbaharui", {
        type: toast.TYPE.SUCCESS,
      });
    }
  } catch (error) {
    yield put(doUpdateNoFIleGuruFailed(error));
    yield call(toast, "Pastikan NIS Tidak Sama", {
      type: toast.TYPE.ERROR,
    });
  }
}

export {
  handleGetGuru,
  handleCreateGuru,
  handleGetByIdGuru,
  handleUpdateGuru,
  handleDeleteGuru,
  handleUpdateNoFileGuru,
  handleGetByRumahTahfidzGuru,
  handleGetByMasterTahfidzGuru,
};
