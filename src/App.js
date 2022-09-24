import { Route, Routes } from "react-router-dom";
import { Page } from "./views/layouts/Page";
import { Dashboard, Login, Pengajar, Rumahtahfiz, Santri } from "./views/pages";
import Iqro from "./views/pages/iqro/Iqro";
import Tambahiqro from "./views/pages/iqro/Tambahiqro";
import Detailrumahtahfiz from "./views/pages/rumahtahfiz/Detailrumahtahfiz";
import Editrumahtahfiz from "./views/pages/rumahtahfiz/Editrumahtahfiz";
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
          <Route
            path="datarumahtahfiz/detail/:id"
            element={<Detailrumahtahfiz />}
          />
          <Route path="iqro" element={<Iqro />} />
          <Route path="iqro/tambah" element={<Tambahiqro />} />
          <Route
            path="datarumahtahfiz/edit/:id"
            element={<Editrumahtahfiz />}
          />
          <Route path="datapengajar" element={<Pengajar />} />
          <Route path="datasantri" element={<Santri />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
