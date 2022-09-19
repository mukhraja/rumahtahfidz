import { call, put } from "redux-saga/effects";
import {
  doGetRumahTahfidzSucceed,
  doGetRumahTahfidzFailed,
} from "../actions/RumahTahfidz";
import apiRumahtahfidz from "../api/api-rumahtahfidz";

function* handleGetRumahTahfdiz() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiRumahtahfidz.list);
    yield put(doGetRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetRumahTahfidzFailed(error));
  }
}

export { handleGetRumahTahfdiz };
