import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ApiSantri from "../../../api/ApiSantri";
import { hafalquran } from "../../../gambar";
import {
  doGetAlquranAwalGuruRequest,
  doGetAlquranGuruByMasterTahfidzRequest,
  doGetAlquranGuruByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/Alquranguru";
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

const AlquranGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, alqurangurudata } = useSelector(
    (state) => state.alquranGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  const [alquran, setAlquran] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistalquran = async () => {
        try {
          const data = await ApiSantri.getData(
            "/alquranguru/getlistawal/?pondokId=&masterpondokId=&userId="
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
            "/alquranguru/getlistawal/?pondokId=&masterpondokId=" +
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
            "/usersantri/hafalanalquranguru/" + userProfile.userId
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
            "/alquranguru/getlistawal/?pondokId= " +
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
          accessor: "namaguru",
        },
        {
          Header: "Surah",
          accessor: "surah",
        },
        {
          Header: "Juz",
          accessor: "juz",
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
          accessor: "namaguru",
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

  // const data = React.useMemo(() => alqurangurudata, [alqurangurudata]);
  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Hafalan Qur'an Guru
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {alqurangurudata < 1 ? (
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

export default AlquranGuru;
