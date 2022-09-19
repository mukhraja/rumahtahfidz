import { takeEvery, all } from "redux-saga/effects";

// Khusus untuk constant
import * as ActionTypeRumahTahfidz from "../constants/RumahTahfidz";
import * as ActionTypeSantri from "../constants/Santri";

// Khusus Middleware
import { handleGetRumahTahfdiz } from "./RumahTahfidzSaga";
import { handleGetSantri } from "./SantriSaga";

function* watchAll() {
  yield all([
    takeEvery(
      ActionTypeRumahTahfidz.GET_RUMAHTAHFIDZ_REQUEST,
      handleGetRumahTahfdiz
    ),
    takeEvery(ActionTypeSantri.GET_SANTRI_REQUEST, handleGetSantri),
  ]);
}

export default watchAll;
