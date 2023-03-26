import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ApiSantri from "../../../api/ApiSantri";
import { hafalquran } from "../../../gambar";
import {
  doGetAlquranAwalSantriRequest,
  doGetAlquranSantriByMasterTahfidzRequest,
  doGetAlquranSantriByRumahTahfidzRequest,
  doGetAlquranSantriByUserIdRequest,
} from "../../../reduxsaga/actions/Alquransantri";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Alquran = () => {
  const dispatch = useDispatch();

  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );
  const { isLoading, userProfile } = useSelector((state) => state.userState);

  const [alquran, setAlquran] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistalquran = async () => {
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getlistawal/?pondokId=&masterpondokId=&userId="
          );

          setAlquran(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchlistalquran();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchlistalquran = async () => {
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getlistawal/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId +
              "&userId="
          );

          setAlquran(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchlistalquran();
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      const fetchlistalquran = async () => {
        try {
          const data = await ApiSantri.getData(
            "/usersantri/hafalanalquransantri/" + userProfile.userId
          );

          setAlquran(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchlistalquran();
    } else {
      const fetchlistalquran = async () => {
        try {
          const data = await ApiSantri.getData(
            "/alquransantri/getlistawal/?pondokId= " +
              userProfile.pondokId +
              "&masterpondokId=&userId="
          );

          setAlquran(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchlistalquran();
    }
  }, []);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namasantri",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkIqro,
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namasantri",
          Cell: perkecilnama,
        },
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Juz",
          accessor: "juz",
        },
        {
          Header: "Ayat",
          accessor: "ayat",
        },
        {
          Header: "Halaman",
          accessor: "halaman",
        },
        {
          Header: "Keterangan",
          accessor: "ket",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namasantri",
      },
      {
        Header: "Surah",
        accessor: "surah",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Juz",
        accessor: "juz",
      },
      {
        Header: "Ayat",
        accessor: "ayat",
      },
      {
        Header: "Halaman",
        accessor: "halaman",
      },
      {
        Header: "Keterangan",
        accessor: "ket",
      },
      {
        Header: "Detail",
        accessor: "santri_id",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  return (
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Hafalan Qur'an
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {alquransantridata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={alquran} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default Alquran;
