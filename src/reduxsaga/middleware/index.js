import { takeEvery, all } from "redux-saga/effects";

// Khusus untuk constant
import * as ActionTypeRumahTahfidz from "../constants/RumahTahfidz";
import * as ActionTypeSantri from "../constants/Santri";
import * as ActionTypeGuru from "../constants/Guru";

// Khusus Middleware
import { handleGetRumahTahfdiz } from "./RumahTahfidzSaga";
import { handleGetSantri } from "./SantriSaga";
import { handleGetGuru } from "./GuruSaga";

function* watchAll() {
  yield all([
    takeEvery(
      ActionTypeRumahTahfidz.GET_RUMAHTAHFIDZ_REQUEST,
      handleGetRumahTahfdiz
    ),
    takeEvery(ActionTypeSantri.GET_SANTRI_REQUEST, handleGetSantri),
    takeEvery(ActionTypeGuru.GET_GURU_REQUEST, handleGetGuru),
  ]);
}

export default watchAll;
