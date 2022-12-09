import { takeEvery, all } from "redux-saga/effects";

// Khusus untuk constant
import * as ActionTypeRumahTahfidz from "../constants/RumahTahfidz";
import * as ActionTypeMasterPondok from "../constants/Masterpondok";
import * as ActionTypeSantri from "../constants/Santri";
import * as ActionTypeGuru from "../constants/Guru";
import * as ActionTypeIqroSantri from "../constants/IqroSantri";
import * as ActionTypeSurahPendekSantri from "../constants/SurahPendekSantri";
import * as ActionTypeAlquranSantri from "../constants/AlquranSantri";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeRole from "../constants/Role";
import * as ActionTypeIqroGuru from "../constants/IqroGuru";
import * as ActionTypeSurahPendekGuru from "../constants/SurahPendekGuru";
import * as ActionTypeAlquranGuru from "../constants/AlquranGuru";

// Khusus Middleware
import {
  handleGetRumahTahfdiz,
  handleGetByIdRumahTahfdiz,
  handleCreateRumahTahfdiz,
  handleDeleteRumahTahfdiz,
  handleUpdateRumahTahfdiz,
  handleUpdateNoFileRumahTahfdiz,
  handleGetByRumahTahfdiz,
  handleGetByPondokIdRumahTahfdiz,
} from "./RumahTahfidzSaga";
import {
  handleCreateSantri,
  handleDeleteSantri,
  handleGetByIdSantri,
  handleGetByMasterTahfidzSantri,
  handleGetByRumahTahfidzSantri,
  handleGetSantri,
  handleUpdateNoFileSantri,
  handleUpdateSantri,
} from "./SantriSaga";
import {
  handleCreateGuru,
  handleDeleteGuru,
  handleGetByIdGuru,
  handleGetByMasterTahfidzGuru,
  handleGetByRumahTahfidzGuru,
  handleGetGuru,
  handleUpdateGuru,
  handleUpdateNoFileGuru,
} from "./GuruSaga";
import {
  handleCreateIqroSantri,
  handleDeleteIqroSantri,
  handleGetByIdIqroSantri,
  handleGetByMasterTahfidzIqroSantri,
  handleGetByRumahTahfidzIqroSantri,
  handleGetIqroAwalSantri,
  handleGetIqroSantri,
  handleUpdateIqroSantri,
} from "./IqroSaga";
import {
  handleCreateSurahPendekSantri,
  handleDeleteSurahPendekSantri,
  handleGetByIdSurahPendekSantri,
  handleGetByMasterTahfidzSurahPendekSantri,
  handleGetByRumahTahfidzSurahPendekSantri,
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
  handleGetByRumahTahfidzAlquranSantri,
  handleGetByMasterTahfidzAlquranSantri,
} from "./AlquranSaga";
import {
  handleSignup,
  handleSignin,
  handleSignout,
  handleGetUser,
  handleGetByIdUser,
  handleCreateUser,
  handleUpdateUser,
  handleUpdateNoFileUser,
  handleDeleteUser,
  handleCreateNoFileUser,
  handleGetByRumahTahfidzUser,
  handleGetAdmin,
  handleGetByMasterTahfidzUser,
} from "./UserSaga";
import {
  handleCreateRole,
  handleDeleteRole,
  handleGetByIdRole,
  handleGetRole,
  handleUpdateRole,
} from "./RoleSaga";
import {
  handleCreateIqroGuru,
  handleDeleteIqroGuru,
  handleGetByIdIqroGuru,
  handleGetByMasterTahfidzIqroGuru,
  handleGetByRumahTahfidzIqroGuru,
  handleGetIqroAwalGuru,
  handleGetIqroGuru,
  handleUpdateIqroGuru,
} from "./IqroGuruSaga";
import {
  handleCreateSurahPendekGuru,
  handleDeleteSurahPendekGuru,
  handleGetByIdSurahPendekGuru,
  handleGetByMasterTahfidzSurahPendekGuru,
  handleGetByRumahTahfidzSurahPendekGuru,
  handleGetSurahPendekAwalGuru,
  handleGetSurahPendekGuru,
  handleUpdateSurahPendekGuru,
} from "./SurahPendekGuruSaga";
import {
  handleCreateAlquranGuru,
  handleDeleteAlquranGuru,
  handleGetByIdAlquranGuru,
  handleGetAlquranAwalGuru,
  handleGetAlquranGuru,
  handleUpdateAlquranGuru,
  handleGetByRumahTahfidzAlquranGuru,
  handleGetByMasterTahfidzAlquranGuru,
} from "./AlquranGuruSaga";
import {
  handleGetMasterPondok,
  handleGetByIdMasterPondok,
  handleCreateMasterPondok,
  handleDeleteMasterPondok,
  handleUpdateMasterPondok,
  handleUpdateNoFileMasterPondok,
  handleGetByMasterPondok,
} from "./MasterPondokSaga";

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
      ActionTypeRumahTahfidz.GET_BY_PONDOKID_RUMAHTAHFIDZ_REQUEST,
      handleGetByPondokIdRumahTahfdiz
    ),
    takeEvery(
      ActionTypeRumahTahfidz.GET_BY_RUMAHTAHFIDZ_REQUEST,
      handleGetByRumahTahfdiz
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
    // MasterPondok
    takeEvery(
      ActionTypeMasterPondok.GET_MASTERPONDOK_REQUEST,
      handleGetMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.GET_BY_ID_MASTERPONDOK_REQUEST,
      handleGetByIdMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.GET_BY_MASTERPONDOK_REQUEST,
      handleGetByMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.CREATE_MASTERPONDOK_REQUEST,
      handleCreateMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.UPDATE_MASTERPONDOK_REQUEST,
      handleUpdateMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.UPDATE_MASTERPONDOK_NOFILE_REQUEST,
      handleUpdateNoFileMasterPondok
    ),
    takeEvery(
      ActionTypeMasterPondok.DELETE_MASTERPONDOK_REQUEST,
      handleDeleteMasterPondok
    ),
    // Santri
    takeEvery(ActionTypeSantri.GET_SANTRI_REQUEST, handleGetSantri),
    takeEvery(ActionTypeSantri.GET_BY_ID_SANTRI_REQUEST, handleGetByIdSantri),
    takeEvery(
      ActionTypeSantri.GET_BY_RUMAHTAHFIDZ_SANTRI_REQUEST,
      handleGetByRumahTahfidzSantri
    ),
    takeEvery(
      ActionTypeSantri.GET_BY_MASTERTAHFIDZ_SANTRI_REQUEST,
      handleGetByMasterTahfidzSantri
    ),
    takeEvery(ActionTypeSantri.CREATE_SANTRI_REQUEST, handleCreateSantri),
    takeEvery(ActionTypeSantri.UPDATE_SANTRI_REQUEST, handleUpdateSantri),
    takeEvery(
      ActionTypeSantri.UPDATE_SANTRI_NOFILE_REQUEST,
      handleUpdateNoFileSantri
    ),
    takeEvery(ActionTypeSantri.DELETE_SANTRI_REQUEST, handleDeleteSantri),
    // GURU
    takeEvery(ActionTypeGuru.GET_GURU_REQUEST, handleGetGuru),
    takeEvery(ActionTypeGuru.GET_BY_ID_GURU_REQUEST, handleGetByIdGuru),
    takeEvery(
      ActionTypeGuru.GET_BY_RUMAHTAHFIDZ_GURU_REQUEST,
      handleGetByRumahTahfidzGuru
    ),
    takeEvery(
      ActionTypeGuru.GET_BY_MASTERTAHFIDZ_GURU_REQUEST,
      handleGetByMasterTahfidzGuru
    ),
    takeEvery(ActionTypeGuru.CREATE_GURU_REQUEST, handleCreateGuru),
    takeEvery(ActionTypeGuru.UPDATE_GURU_REQUEST, handleUpdateGuru),
    takeEvery(
      ActionTypeGuru.UPDATE_GURU_NOFILE_REQUEST,
      handleUpdateNoFileGuru
    ),
    takeEvery(ActionTypeGuru.DELETE_GURU_REQUEST, handleDeleteGuru),
    // Iqro Santri
    takeEvery(ActionTypeIqroSantri.GET_IQROSANTRI_REQUEST, handleGetIqroSantri),
    takeEvery(
      ActionTypeIqroSantri.GET_BY_ID_IQROSANTRI_REQUEST,
      handleGetByIdIqroSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.GET_BY_RUMAHTAHFIDZ_IQROSANTRI_REQUEST,
      handleGetByRumahTahfidzIqroSantri
    ),
    takeEvery(
      ActionTypeIqroSantri.GET_BY_MASTERTAHFIDZ_IQROSANTRI_REQUEST,
      handleGetByMasterTahfidzIqroSantri
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
      ActionTypeSurahPendekSantri.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKSANTRI_REQUEST,
      handleGetByRumahTahfidzSurahPendekSantri
    ),
    takeEvery(
      ActionTypeSurahPendekSantri.GET_BY_MASTERTAHFIDZ_SURAHPENDEKSANTRI_REQUEST,
      handleGetByMasterTahfidzSurahPendekSantri
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
      ActionTypeAlquranSantri.GET_BY_RUMAHTAHFIDZ_ALQURANSANTRI_REQUEST,
      handleGetByRumahTahfidzAlquranSantri
    ),
    takeEvery(
      ActionTypeAlquranSantri.GET_BY_MASTERTAHFIDZ_ALQURANSANTRI_REQUEST,
      handleGetByMasterTahfidzAlquranSantri
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
    takeEvery(ActionTypeUser.GET_USER_REQUEST, handleGetUser),
    takeEvery(ActionTypeUser.GET_BY_ADMIN_USER_REQUEST, handleGetAdmin),
    takeEvery(ActionTypeUser.GET_BY_ID_USER_REQUEST, handleGetByIdUser),
    takeEvery(
      ActionTypeUser.GET_BY_RUMAHTAHFIDZ_USER_REQUEST,
      handleGetByRumahTahfidzUser
    ),
    takeEvery(
      ActionTypeUser.GET_BY_MASTERTAHFIDZ_USER_REQUEST,
      handleGetByMasterTahfidzUser
    ),
    takeEvery(ActionTypeUser.CREATE_USER_REQUEST, handleCreateUser),
    takeEvery(
      ActionTypeUser.CREATE_USER_NOFILE_REQUEST,
      handleCreateNoFileUser
    ),
    takeEvery(ActionTypeUser.UPDATE_USER_REQUEST, handleUpdateUser),
    takeEvery(
      ActionTypeUser.UPDATE_USER_NOFILE_REQUEST,
      handleUpdateNoFileUser
    ),
    takeEvery(ActionTypeUser.DELETE_USER_REQUEST, handleDeleteUser),
    // Role
    takeEvery(ActionTypeRole.GET_ROLE_REQUEST, handleGetRole),
    takeEvery(ActionTypeRole.GET_BY_ID_ROLE_REQUEST, handleGetByIdRole),
    takeEvery(ActionTypeRole.CREATE_ROLE_REQUEST, handleCreateRole),
    takeEvery(ActionTypeRole.UPDATE_ROLE_REQUEST, handleUpdateRole),
    takeEvery(ActionTypeRole.DELETE_ROLE_REQUEST, handleDeleteRole),
    // Iqro Guru
    takeEvery(ActionTypeIqroGuru.GET_IQROGURU_REQUEST, handleGetIqroGuru),
    takeEvery(
      ActionTypeIqroGuru.GET_BY_ID_IQROGURU_REQUEST,
      handleGetByIdIqroGuru
    ),
    takeEvery(
      ActionTypeIqroGuru.GET_BY_RUMAHTAHFIDZ_IQROGURU_REQUEST,
      handleGetByRumahTahfidzIqroGuru
    ),
    takeEvery(
      ActionTypeIqroGuru.GET_BY_MASTERTAHFIDZ_IQROGURU_REQUEST,
      handleGetByMasterTahfidzIqroGuru
    ),
    takeEvery(
      ActionTypeIqroGuru.GET_IQROGURUAWAL_REQUEST,
      handleGetIqroAwalGuru
    ),
    takeEvery(ActionTypeIqroGuru.CREATE_IQROGURU_REQUEST, handleCreateIqroGuru),
    takeEvery(ActionTypeIqroGuru.UPDATE_IQROGURU_REQUEST, handleUpdateIqroGuru),
    takeEvery(ActionTypeIqroGuru.DELETE_IQROGURU_REQUEST, handleDeleteIqroGuru),
    // Surah Pendek Guru
    takeEvery(
      ActionTypeSurahPendekGuru.GET_SURAHPENDEKGURU_REQUEST,
      handleGetSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.GET_BY_ID_SURAHPENDEKGURU_REQUEST,
      handleGetByIdSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.GET_BY_RUMAHTAHFIDZ_SURAHPENDEKGURU_REQUEST,
      handleGetByRumahTahfidzSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.GET_BY_MASTERTAHFIDZ_SURAHPENDEKGURU_REQUEST,
      handleGetByMasterTahfidzSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.GET_SURAHPENDEKGURUAWAL_REQUEST,
      handleGetSurahPendekAwalGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.CREATE_SURAHPENDEKGURU_REQUEST,
      handleCreateSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.UPDATE_SURAHPENDEKGURU_REQUEST,
      handleUpdateSurahPendekGuru
    ),
    takeEvery(
      ActionTypeSurahPendekGuru.DELETE_SURAHPENDEKGURU_REQUEST,
      handleDeleteSurahPendekGuru
    ),
    // Alquran Guru
    takeEvery(
      ActionTypeAlquranGuru.GET_ALQURANGURU_REQUEST,
      handleGetAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.GET_BY_ID_ALQURANGURU_REQUEST,
      handleGetByIdAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.GET_BY_RUMAHTAHFIDZ_ALQURANGURU_REQUEST,
      handleGetByRumahTahfidzAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.GET_BY_MASTERTAHFIDZ_ALQURANGURU_REQUEST,
      handleGetByMasterTahfidzAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.GET_ALQURANGURUAWAL_REQUEST,
      handleGetAlquranAwalGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.CREATE_ALQURANGURU_REQUEST,
      handleCreateAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.UPDATE_ALQURANGURU_REQUEST,
      handleUpdateAlquranGuru
    ),
    takeEvery(
      ActionTypeAlquranGuru.DELETE_ALQURANGURU_REQUEST,
      handleDeleteAlquranGuru
    ),
  ]);
}

export default watchAll;
