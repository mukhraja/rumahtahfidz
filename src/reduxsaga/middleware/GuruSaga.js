import { call, put } from "redux-saga/effects";
import { doGetGuruSucceed, doGetGuruFailed } from "../actions/Guru";
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

export { handleGetGuru };
