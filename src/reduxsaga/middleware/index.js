import { takeEvery, all } from "redux-saga/effects";

// Khusus untuk constant
import * as ActionTypeRumahTahfidz from "../constants/RumahTahfidz";
import * as ActionTypeSantri from "../constants/Santri";
import * as ActionTypeGuru from "../constants/Guru";

// Khusus Middleware
import {
  handleGetRumahTahfdiz,
  handleGetByIdRumahTahfdiz,
  handleCreateRumahTahfdiz,
  handleDeleteRumahTahfdiz,
  handleUpdateRumahTahfdiz,
  handleUpdateNoFileRumahTahfdiz,
} from "./RumahTahfidzSaga";
import { handleGetSantri } from "./SantriSaga";
import { handleGetGuru } from "./GuruSaga";

function* watchAll() {
  yield all([
    // RumahTahfidz
    takeEvery(
      ActionTypeRumahTahfidz.GET_RUMAHTAHFIDZ_REQUEST,
      handleGetRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.GET_BY_ID_RUMAHTAHFIDZ_REQUEST,
      handleGetByIdRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.CREATE_RUMAHTAHFIDZ_REQUEST,
      handleCreateRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.UPDATE_RUMAHTAHFIDZ_REQUEST,
      handleUpdateRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.UPDATE_RUMAHTAHFIDZ_NOFILE_REQUEST,
      handleUpdateNoFileRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.DELETE_RUMAHTAHFIDZ_REQUEST,
      handleDeleteRumahTahfdiz
    ),
    // Santri
    takeEvery(ActionTypeSantri.GET_SANTRI_REQUEST, handleGetSantri),
    takeEvery(ActionTypeGuru.GET_GURU_REQUEST, handleGetGuru),
  ]);
}

export default watchAll;
