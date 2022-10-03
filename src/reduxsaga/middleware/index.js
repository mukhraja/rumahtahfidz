import { takeEvery, all } from "redux-saga/effects";

// Khusus untuk constant
import * as ActionTypeRumahTahfidz from "../constants/RumahTahfidz";
import * as ActionTypeSantri from "../constants/Santri";
import * as ActionTypeGuru from "../constants/Guru";
import * as ActionTypeIqroSantri from "../constants/IqroSantri";
import * as ActionTypeSurahPendekSantri from "../constants/SurahPendekSantri";
import * as ActionTypeAlquranSantri from "../constants/AlquranSantri";
import * as ActionTypeUser from "../constants/User";

// Khusus Middleware
import {
  handleGetRumahTahfdiz,
  handleGetByIdRumahTahfdiz,
  handleCreateRumahTahfdiz,
  handleDeleteRumahTahfdiz,
  handleUpdateRumahTahfdiz,
  handleUpdateNoFileRumahTahfdiz,
} from "./RumahTahfidzSaga";
import {
  handleCreateSantri,
  handleDeleteSantri,
  handleGetByIdSantri,
  handleGetSantri,
  handleUpdateNoFileSantri,
  handleUpdateSantri,
} from "./SantriSaga";
import { handleGetGuru } from "./GuruSaga";
import {
  handleCreateIqroSantri,
  handleDeleteIqroSantri,
  handleGetByIdIqroSantri,
  handleGetIqroAwalSantri,
  handleGetIqroSantri,
  handleUpdateIqroSantri,
} from "./IqroSaga";
import {
  handleCreateSurahPendekSantri,
  handleDeleteSurahPendekSantri,
  handleGetByIdSurahPendekSantri,
  handleGetSurahPendekAwalSantri,
  handleGetSurahPendekSantri,
  handleUpdateSurahPendekSantri,
} from "./SurahPendekSaga";
import {
  handleCreateAlquranSantri,
  handleDeleteAlquranSantri,
  handleGetByIdAlquranSantri,
  handleGetAlquranAwalSantri,
  handleGetAlquranSantri,
  handleUpdateAlquranSantri,
} from "./AlquranSaga";
import { handleSignup, handleSignin, handleSignout } from "./UserSaga";

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
    takeEvery(ActionTypeSantri.GET_BY_ID_SANTRI_REQUEST, handleGetByIdSantri),
    takeEvery(ActionTypeSantri.CREATE_SANTRI_REQUEST, handleCreateSantri),
    takeEvery(ActionTypeSantri.UPDATE_SANTRI_REQUEST, handleUpdateSantri),
    takeEvery(
      ActionTypeSantri.UPDATE_SANTRI_NOFILE_REQUEST,
      handleUpdateNoFileSantri
    ),
    takeEvery(ActionTypeSantri.DELETE_SANTRI_REQUEST, handleDeleteSantri),
    // GURU
    takeEvery(ActionTypeGuru.GET_GURU_REQUEST, handleGetGuru),
    // Iqro Santri
    takeEvery(ActionTypeIqroSantri.GET_IQROSANTRI_REQUEST, handleGetIqroSantri),
    takeEvery(
      ActionTypeIqroSantri.GET_BY_ID_IQROSANTRI_REQUEST,
      handleGetByIdIqroSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.GET_IQROSANTRIAWAL_REQUEST,
      handleGetIqroAwalSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.CREATE_IQROSANTRI_REQUEST,
      handleCreateIqroSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.UPDATE_IQROSANTRI_REQUEST,
      handleUpdateIqroSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.DELETE_IQROSANTRI_REQUEST,
      handleDeleteIqroSantri
    ),
    // Surah Pendek Santri
    takeEvery(
      ActionTypeSurahPendekSantri.GET_SURAHPENDEKSANTRI_REQUEST,
      handleGetSurahPendekSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.GET_BY_ID_SURAHPENDEKSANTRI_REQUEST,
      handleGetByIdSurahPendekSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.GET_SURAHPENDEKSANTRIAWAL_REQUEST,
      handleGetSurahPendekAwalSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.CREATE_SURAHPENDEKSANTRI_REQUEST,
      handleCreateSurahPendekSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.UPDATE_SURAHPENDEKSANTRI_REQUEST,
      handleUpdateSurahPendekSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.DELETE_SURAHPENDEKSANTRI_REQUEST,
      handleDeleteSurahPendekSantri
    ),
    // Alquran Santri
    takeEvery(
      ActionTypeAlquranSantri.GET_ALQURANSANTRI_REQUEST,
      handleGetAlquranSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.GET_BY_ID_ALQURANSANTRI_REQUEST,
      handleGetByIdAlquranSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.GET_ALQURANSANTRIAWAL_REQUEST,
      handleGetAlquranAwalSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.CREATE_ALQURANSANTRI_REQUEST,
      handleCreateAlquranSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.UPDATE_ALQURANSANTRI_REQUEST,
      handleUpdateAlquranSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.DELETE_ALQURANSANTRI_REQUEST,
      handleDeleteAlquranSantri
    ),
    // USER
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
