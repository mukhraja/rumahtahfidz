import { combineReducers } from "redux";
import GuruReducer from "./GuruReducer";

import RumahTahfidzReducer from "./RumahTahfidzReducer";
import SantriReducer from "./SantriReducer";
import IqroSantriReducer from "./IqroSantriReducer";
import SurahPendekSantriReducer from "./SurahPendekSantriReducer";
import AlquranSantriReducer from "./AlquranSantriReducer";
import UserReducer from "./UserReducer";
import RoleReducer from "./RoleReducer";

const rootReducer = combineReducers({
  rumahTahfidzState: RumahTahfidzReducer,
  santriState: SantriReducer,
  guruState: GuruReducer,
  iqroSantriState: IqroSantriReducer,
  surahPendekSantriState: SurahPendekSantriReducer,
  alquranSantriState: AlquranSantriReducer,
  userState: UserReducer,
  roleState: RoleReducer,
});

export default rootReducer;
