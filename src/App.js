import { Navigate, Route, Routes } from "react-router-dom";
import RedirectPage from "./views/components/redirectpage/RedirectPage";
import { Page } from "./views/layouts/Page";
import {
  Dashboard,
  Landing,
  Login,
  Pengajar,
  Rumahtahfiz,
  Santri,
} from "./views/pages";
import DetailIqro from "./views/pages/iqro/DetailIqro";
import EditIqroSantri from "./views/pages/iqro/EditIqroSantri";
import Iqro from "./views/pages/iqro/Iqro";
import Tambahiqro from "./views/pages/iqro/Tambahiqro";
import Detailrumahtahfiz from "./views/pages/rumahtahfiz/Detailrumahtahfiz";
import Editrumahtahfiz from "./views/pages/rumahtahfiz/Editrumahtahfiz";
import Tambahrumahtahfiz from "./views/pages/rumahtahfiz/Tambahrumahtahfiz";
import DetailSantri from "./views/pages/santri/DetailSantri";
import EditSantri from "./views/pages/santri/EditSantri";
import TambahSantri from "./views/pages/santri/TambahSantri";
import DetailSurahPendek from "./views/pages/surahpendek/DetailSurahPendek";
import EditSurahPendekSantri from "./views/pages/surahpendek/EditSurahPendek";
import SurahPendek from "./views/pages/surahpendek/SurahPendek";
import TambahSurahPendek from "./views/pages/surahpendek/TambahSurahPendek";
import Alquran from "./views/pages/alquran/Alquran";
import DetailAlquran from "./views/pages/alquran/DetailAlquran";
import EditAlquranSantri from "./views/pages/alquran/EditAlquran";
import TambahAlquran from "./views/pages/alquran/TambahAlquran";
import LaporanSantri from "./views/pages/laporan/santri/LaporanSantri";
import { useSelector } from "react-redux";
import User from "./views/pages/user/User";
import Database from "./views/pages/database/Database";
import DetailUser from "./views/pages/user/DetailUser";
import TambahUser from "./views/pages/user/TambahUser";
import EditUser from "./views/pages/user/EditUser";
import InfoUser from "./views/pages/user/InfoUser";
import DetailPengajar from "./views/pages/pengajar/DetailPengajar";
import TambahPengajar from "./views/pages/pengajar/TambahPengajar";
import EditPengajar from "./views/pages/pengajar/EditPengajar";
import IqroGuru from "./views/pages/iqroguru/IqroGuru";
import SurahPendekGuru from "./views/pages/surahpendekguru/SurahPendekGuru";
import AlquranGuru from "./views/pages/alquranguru/AlquranGuru";
import DetailIqroGuru from "./views/pages/iqroguru/DetailIqroGuru";
import EditIqroGuru from "./views/pages/iqroguru/EditIqroGuru";
import TambahIqroGuru from "./views/pages/iqroguru/TambahIqroGuru";
import DetailSurahPendekGuru from "./views/pages/surahpendekguru/DetailSurahPendekGuru";
import EditSurahPendekGuru from "./views/pages/surahpendekguru/EditSurahPendekGuru";
import TambahSurahPendekGuru from "./views/pages/surahpendekguru/TambahSurahPendekGuru";
import TambahAlquranGuru from "./views/pages/alquranguru/TambahAlquranGuru";
import DetailAlquranGuru from "./views/pages/alquranguru/DetailAlquranGuru";
import EditAlquranGuru from "./views/pages/alquranguru/EditAlquranGuru";
import LaporanPengajar from "./views/pages/laporan/pengajar/LaporanPengajar";
import Dashboard2 from "./views/pages/dashboard/Dashboard2";

function App() {
  const { isLoggedIn } = useSelector((state) => state.userState);

  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard2 />} /> */}
        <Route path="/" element={<Login />} />
        <Route element={<Page />}>
          <Route
            path="dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Route>
        {/* Rumah Tahfiz */}
        <Route element={<Page />}>
          <Route
            path="datarumahtahfiz"
            element={isLoggedIn ? <Rumahtahfiz /> : <Navigate to="/" />}
          />
          <Route
            path="datarumahtahfiz/tambah"
            element={isLoggedIn ? <Tambahrumahtahfiz /> : <Navigate to="/" />}
          />
          <Route
            path="datarumahtahfiz/edit/:id"
            element={isLoggedIn ? <Editrumahtahfiz /> : <Navigate to="/" />}
          />
          <Route
            path="datarumahtahfiz/detail/:id"
            element={isLoggedIn ? <Detailrumahtahfiz /> : <Navigate to="/" />}
          />
          {/* Dataiqrosantri */}
          <Route
            path="dataiqrosantri"
            element={isLoggedIn ? <Iqro /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqrosantri/tambah"
            element={isLoggedIn ? <Tambahiqro /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqrosantri/detail/:id"
            element={isLoggedIn ? <DetailIqro /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqrosantri/edit/:id"
            element={isLoggedIn ? <EditIqroSantri /> : <Navigate to="/" />}
          />
          {/* Datasurahpendeksantri */}
          <Route
            path="datasurahpendeksantri"
            element={isLoggedIn ? <SurahPendek /> : <Navigate to="/" />}
          />
          <Route
            path="datasurahpendeksantri/tambah"
            element={isLoggedIn ? <TambahSurahPendek /> : <Navigate to="/" />}
          />
          <Route
            path="datasurahpendeksantri/detail/:id"
            element={isLoggedIn ? <DetailSurahPendek /> : <Navigate to="/" />}
          />
          <Route
            path="datasurahpendeksantri/edit/:id"
            element={
              isLoggedIn ? <EditSurahPendekSantri /> : <Navigate to="/" />
            }
          />
          {/* Dataalquransantri */}
          <Route
            path="dataalquransantri"
            element={isLoggedIn ? <Alquran /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquransantri/tambah"
            element={isLoggedIn ? <TambahAlquran /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquransantri/detail/:id"
            element={isLoggedIn ? <DetailAlquran /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquransantri/edit/:id"
            element={isLoggedIn ? <EditAlquranSantri /> : <Navigate to="/" />}
          />
          {/* Dataiqroguru */}
          <Route
            path="dataiqroguru"
            element={isLoggedIn ? <IqroGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqroguru/tambah"
            element={isLoggedIn ? <TambahIqroGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqroguru/detail/:id"
            element={isLoggedIn ? <DetailIqroGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataiqropengajar/edit/:id"
            element={isLoggedIn ? <EditIqroGuru /> : <Navigate to="/" />}
          />
          {/* Datasurahpendekguru */}
          <Route
            path="datasurahpendekguru"
            element={isLoggedIn ? <SurahPendekGuru /> : <Navigate to="/" />}
          />
          <Route
            path="datasurahpendekguru/tambah"
            element={
              isLoggedIn ? <TambahSurahPendekGuru /> : <Navigate to="/" />
            }
          />
          <Route
            path="datasurahpendekguru/detail/:id"
            element={
              isLoggedIn ? <DetailSurahPendekGuru /> : <Navigate to="/" />
            }
          />
          <Route
            path="datasurahpendekguru/edit/:id"
            element={isLoggedIn ? <EditSurahPendekGuru /> : <Navigate to="/" />}
          />
          {/* Dataalquranguru */}
          <Route
            path="dataalquranguru"
            element={isLoggedIn ? <AlquranGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquranguru/tambah"
            element={isLoggedIn ? <TambahAlquranGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquranguru/detail/:id"
            element={isLoggedIn ? <DetailAlquranGuru /> : <Navigate to="/" />}
          />
          <Route
            path="dataalquranguru/edit/:id"
            element={isLoggedIn ? <EditAlquranGuru /> : <Navigate to="/" />}
          />
          {/* Pengajar */}
          <Route
            path="datapengajar"
            element={isLoggedIn ? <Pengajar /> : <Navigate to="/" />}
          />
          <Route
            path="datapengajar/detail/:id"
            element={isLoggedIn ? <DetailPengajar /> : <Navigate to="/" />}
          />
          <Route
            path="datapengajar/tambah"
            element={isLoggedIn ? <TambahPengajar /> : <Navigate to="/" />}
          />
          <Route
            path="datapengajar/edit/:id"
            element={isLoggedIn ? <EditPengajar /> : <Navigate to="/" />}
          />
          {/* Datasantri */}
          <Route
            path="datasantri"
            element={isLoggedIn ? <Santri /> : <Navigate to="/" />}
          />
          <Route
            path="datasantri/tambah"
            element={isLoggedIn ? <TambahSantri /> : <Navigate to="/" />}
          />
          <Route
            path="datasantri/detail/:id"
            element={isLoggedIn ? <DetailSantri /> : <Navigate to="/" />}
          />
          <Route
            path="datasantri/edit/:id"
            element={isLoggedIn ? <EditSantri /> : <Navigate to="/" />}
          />
          {/* User */}
          <Route
            path="datauser"
            element={isLoggedIn ? <User /> : <Navigate to="/" />}
          />
          <Route
            path="datauser/tambah"
            element={isLoggedIn ? <TambahUser /> : <Navigate to="/" />}
          />
          <Route
            path="datauser/edit/:id"
            element={isLoggedIn ? <EditUser /> : <Navigate to="/" />}
          />
          <Route
            path="datauser/detail/:id"
            element={isLoggedIn ? <DetailUser /> : <Navigate to="/" />}
          />
          {/* Laporan Santri */}
          <Route
            path="laporansantri"
            element={isLoggedIn ? <LaporanSantri /> : <Navigate to="/" />}
          />
          {/* Laporan Pengajar */}
          <Route
            path="laporanpengajar"
            element={isLoggedIn ? <LaporanPengajar /> : <Navigate to="/" />}
          />
          {/* Database */}
          <Route
            path="database"
            element={isLoggedIn ? <Database /> : <Navigate to="/" />}
          />
          {/* User Information */}
          <Route
            path="profile/:id"
            element={isLoggedIn ? <InfoUser /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
