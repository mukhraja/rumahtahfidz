import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pengajar } from "../../../gambar";
import {
  doGetGuruByMasterTahfidzRequest,
  doGetGuruByRumahTahfidzRequest,
  doGetGuruRequest,
} from "../../../reduxsaga/actions/Guru";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table, {
  AvatarCell,
  ButtonLinkGuru,
  perkecilnama,
  SelectColumnFilter,
  StatusPill,
  tanggalcustom,
} from "../../components/datatable/Table.js";
import Alert from "../../../utils/Alert";
import { Toaster } from "react-hot-toast";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import ApiSantri from "../../../api/ApiSantri";

const Pengajar = () => {
  const dispatch = useDispatch();

  const { isLoading, gurudata } = useSelector((state) => state.guruState);
  const { userProfile } = useSelector((state) => state.userState);
  const [listgurus, setGurus] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      async function fetchlistguru() {
        try {
          const data = await ApiSantri.getData("/guru/getAll");
          setGurus(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      }

      fetchlistguru();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      async function fetchlistguru() {
        try {
          const data = await ApiSantri.getData(
            "/guru/getByMasterPondokId/" + userProfile.masterpondokId
          );
          setGurus(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      }

      fetchlistguru();
    } else {
      async function fetchlistguru() {
        try {
          const data = await ApiSantri.getData(
            "/guru/getByPondokId/" + userProfile.pondokId
          );
          setGurus(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      }

      fetchlistguru();
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
            <ButtonLinkGuru value={props.value} onRefresh={handleRefresh} />
          ),
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
          Cell: perkecilnama,
        },
        {
          Header: "NIU",
          accessor: "niu",
        },
        {
          Header: "MASUK",
          accessor: "mulai_masuk",
          Cell: tanggalcustom,
        },
        {
          Header: "VAKUM",
          accessor: "mulai_vakum",
          Cell: tanggalcustom,
        },
        {
          Header: "PONDOK",
          accessor: "nama_pondok",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkGuru value={props.value} onRefresh={handleRefresh} />
          ),
        },
      ]);
    }
  }, [listgurus]);

  return (
    <div>
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
      <div className="mt-6 px-4 text-gray-500">
        <Table columns={Display} data={listgurus} url="tambah" />
      </div>
    </div>
  );
};

export default Pengajar;
