import { combineReducers } from "redux";
import GuruReducer from "./GuruReducer";

import RumahTahfidzReducer from "./RumahTahfidzReducer";
import SantriReducer from "./SantriReducer";

const rootReducer = combineReducers({
  rumahTahfidzState: RumahTahfidzReducer,
  santriState: SantriReducer,
  guruState: GuruReducer,
});

export default rootReducer;
