import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  ButtonLinkRumahTahfidz,
  Jumlahorang,
} from "../../components/datatable/Table.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetMasterPondokRequest } from "../../../reduxsaga/actions/Masterpondok";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import config from "../../../reduxsaga/config/config";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";
import { Toaster } from "react-hot-toast";

const Rumahtahfiz = () => {
  const { userProfile } = useSelector((state) => state.userState);
  const [pondok, setPondok] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId="
          );
          setLoading(false);
          setPondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };

      fetchlistpondok();
    } else {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId=" + userProfile.masterpondokId
          );
          setLoading(false);
          setPondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };

      fetchlistpondok();
    }
  }, [refresh]);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else if (
      userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" ||
      userProfile.role == "1b864518-299d-469c-b270-4d4b9d5b120f"
    ) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "NIT",
          accessor: "nit",
        },
        {
          Header: "Kepala Tahfiz",
          accessor: "chief",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "NIT",
          accessor: "nit",
        },
        {
          Header: "Kepala Tahfiz",
          accessor: "chief",
        },
        {
          Header: "Ustadz/ah Aktif",
          accessor: "total_guru_aktif",
          Cell: Jumlahorang,
        },
        {
          Header: "Ustadz/ah Vakum",
          accessor: "total_guru_vakum",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri Aktif",
          accessor: "total_santri_aktif",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri Vakum",
          accessor: "total_santri_vakum",
          Cell: Jumlahorang,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    }
  }, []);

  return (
    <div className="mx-4">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
          Data Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6">
        <Table columns={Display} data={pondok} url="tambah" />
      </div>
    </div>
  );
};

export default Rumahtahfiz;
