import { combineReducers } from "redux";

import RumahTahfidzReducer from "./RumahTahfidzReducer";
import SantriReducer from "./SantriReducer";

const rootReducer = combineReducers({
  rumahTahfidzState: RumahTahfidzReducer,
  santriState: SantriReducer,
});

export default rootReducer;
