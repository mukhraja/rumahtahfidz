import { combineReducers } from "redux";
import GuruReducer from "./GuruReducer";

import RumahTahfidzReducer from "./RumahTahfidzReducer";
import SantriReducer from "./SantriReducer";
import IqroSantriReducer from "./IqroSantriReducer";
import SurahPendekSantriReducer from "./SurahPendekSantriReducer";
import AlquranSantriReducer from "./AlquranSantriReducer";
import UserState from "./UserReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  rumahTahfidzState: RumahTahfidzReducer,
  santriState: SantriReducer,
  guruState: GuruReducer,
  iqroSantriState: IqroSantriReducer,
  surahPendekSantriState: SurahPendekSantriReducer,
  alquranSantriState: AlquranSantriReducer,
  userState: UserReducer,
});

export default rootReducer;
