import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";

import {
  doSignupSucceed,
  doSignupFailed,
  doSigninSucceed,
  doSignoutSucceed,
  doShowAuthMessage,
  doGetUserSucceed,
  doGetUserFailed,
  doGetUserByIdSucceed,
  doGetUserByIdFailed,
  doCreateUserSucceed,
  doCreateUserFailed,
  doDeleteUserSucceed,
  doDeleteUserFailed,
  doUpdateUserSucceed,
  doUpdateUserFailed,
  doUpdateNoFIleUserSucceed,
  doUpdateNoFIleUserFailed,
  doCreateUserNoFileRequest,
  doCreateUserNoFileFailed,
  doCreateUserNoFileSucceed,
  doGetUserByRumahTahfidzRequest,
  doGetUserByRumahTahfidzFailed,
  doGetUserByRumahTahfidzSucceed,
} from "../actions/User";
import apiUser from "../api/api-user";

function* handleSignup(action) {
  const { payload } = action;
  try {
    const result = yield call(apiUser.signup, payload);
    yield put(doSignupSucceed(result.data));
  } catch (error) {
    yield put(doSignupFailed(error));
  }
}

function* handleSignin(action) {
  const { payload } = action;
  console.log(payload);
  try {
    const result = yield call(apiUser.signin, payload);
    if (Object.keys(result.data.profile).length === 0) {
      yield put(
        doShowAuthMessage({ message: "user or password not match, try again" })
      );
    } else {
      localStorage.setItem("token", result.data.token);
      yield put(doSigninSucceed(result.data));
    }
    //localStorage.setItem('@profile', JSON.stringify(result.data.profile));
  } catch (error) {
    yield put(
      doShowAuthMessage({ message: "user or password not match, try again" })
    );
  }
}

function* handleSignout(action) {
  const { payload } = action;
  try {
    localStorage.clear();
    yield put(doSignoutSucceed(payload));
  } catch (error) {
    yield put(doSignupFailed(error));
  }
}

function* handleGetUser() {
  console.log("sudah sampai di middleware");

  try {
    const result = yield call(apiUser.list);
    yield put(doGetUserSucceed(result));
  } catch (error) {
    yield put(doGetUserFailed(error));
  }
}

// GET BY ID
function* handleGetByIdUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiUser.getuserid, payload);
    yield put(doGetUserByIdSucceed(result));
  } catch (error) {
    yield put(doGetUserByIdFailed(error));
  }
}

// GET BY RUMAHTAHFIZ
function* handleGetByRumahTahfidzUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiUser.getuserrumahtahfidz, payload);
    yield put(doGetUserByRumahTahfidzSucceed(result));
  } catch (error) {
    yield put(doGetUserByRumahTahfidzFailed(error));
  }
}

// CREATE
function* handleCreateUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiUser.createuser, payload);
    yield put(doCreateUserSucceed(result));
  } catch (error) {
    yield put(doCreateUserFailed(error));
  }
}

// CREATE NO FILE
function* handleCreateNoFileUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;

  try {
    const result = yield call(apiUser.createNoFileuser, payload);
    yield put(doCreateUserNoFileSucceed(result));
  } catch (error) {
    yield put(doCreateUserNoFileFailed(error));
  }
}

// HAPUS
function* handleDeleteUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiUser.deleteuser, payload);
    yield put(doDeleteUserSucceed(payload));
  } catch (error) {
    yield put(doDeleteUserFailed(error));
  }
}

// UPDATE
function* handleUpdateUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiUser.updateuser, payload);
    yield put(doUpdateUserSucceed(payload));
  } catch (error) {
    yield put(doUpdateUserFailed(error));
  }
}

// UPDATE NO FILE
function* handleUpdateNoFileUser(action) {
  console.log("sudah sampai di middleware");
  const { payload } = action;
  console.log(payload);

  try {
    const result = yield call(apiUser.updateuserNoFile, payload);
    yield put(doUpdateNoFIleUserSucceed(payload));
  } catch (error) {
    yield put(doUpdateNoFIleUserFailed(error));
  }
}

export {
  handleSignup,
  handleSignin,
  handleSignout,
  handleCreateUser,
  handleDeleteUser,
  handleGetByIdUser,
  handleGetUser,
  handleUpdateNoFileUser,
  handleUpdateUser,
  handleCreateNoFileUser,
  handleGetByRumahTahfidzUser
};
