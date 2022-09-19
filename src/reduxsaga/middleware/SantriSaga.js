import { call, put } from "redux-saga/effects";
import { doGetSantriSucceed, doGetSantriFailed } from "../actions/Santri";
import apiSantri from "../api/api-santri";

function* handleGetSantri() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiSantri.list);
    yield put(doGetSantriSucceed(result));
  } catch (error) {
    yield put(doGetSantriFailed(error));
  }
}

export { handleGetSantri };
