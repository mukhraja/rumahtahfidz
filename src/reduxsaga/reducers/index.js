import { combineReducers } from "redux";
import GuruReducer from "./GuruReducer";

import RumahTahfidzReducer from "./RumahTahfidzReducer";
import MasterPondokReducer from "./MasterPondokReducer";
import SantriReducer from "./SantriReducer";
import IqroSantriReducer from "./IqroSantriReducer";
import SurahPendekSantriReducer from "./SurahPendekSantriReducer";
import AlquranSantriReducer from "./AlquranSantriReducer";
import IqroGuruReducer from "./IqroGuruReducer";
import SurahPendekGuruReducer from "./SurahPendekGuruReducer";
import AlquranGuruReducer from "./AlquranGuruReducer";
import UserReducer from "./UserReducer";
import RoleReducer from "./RoleReducer";

const rootReducer = combineReducers({
  rumahTahfidzState: RumahTahfidzReducer,
  masterPondokState: MasterPondokReducer,
  santriState: SantriReducer,
  guruState: GuruReducer,
  iqroSantriState: IqroSantriReducer,
  surahPendekSantriState: SurahPendekSantriReducer,
  alquranSantriState: AlquranSantriReducer,
  iqroGuruState: IqroGuruReducer,
  surahPendekGuruState: SurahPendekGuruReducer,
  alquranGuruState: AlquranGuruReducer,
  userState: UserReducer,
  roleState: RoleReducer,
});

export default rootReducer;
