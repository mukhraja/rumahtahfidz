import { Route, Routes } from "react-router-dom";
import { Page } from "./views/layouts/Page";
import { Dashboard, Login, Pengajar, Rumahtahfiz, Santri } from "./views/pages";
import Tambahrumahtahfiz from "./views/pages/rumahtahfiz/Tambahrumahtahfiz";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Page />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<Page />}>
          <Route path="datarumahtahfiz" element={<Rumahtahfiz />} />
          <Route
            path="datarumahtahfiz/tambah"
            element={<Tambahrumahtahfiz />}
          />
          <Route path="datapengajar" element={<Pengajar />} />
          <Route path="datasantri" element={<Santri />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
