import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ApiSantri from "../../../api/ApiSantri";
import { bacajuz } from "../../../gambar";
import {
  doGetSurahPendekAwalGuruRequest,
  doGetSurahPendekGuruByMasterTahfidzRequest,
  doGetSurahPendekGuruByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/SurahPendekGuru";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import IqroGuru from "../iqroguru/IqroGuru";

const SurahPendekGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, surahpendekgurudata } = useSelector(
    (state) => state.surahPendekGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  const [surahpendek, setSurahPendek] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchsurahpendek = async () => {
        try {
          const data = await ApiSantri.getData(
            "/surahpendekguru/getlistawal/?pondokId=&masterpondokId=&userId="
          );

          setSurahPendek(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchsurahpendek();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchsurahpendek = async () => {
        try {
          const data = await ApiSantri.getData(
            "/surahpendekguru/getlistawal/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId +
              "&userId="
          );

          setSurahPendek(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchsurahpendek();
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      const fetchsurahpendek = async () => {
        try {
          const data = await ApiSantri.getData(
            "/usersantri/hafalansurahpendekguru/" + userProfile.userId
          );

          setSurahPendek(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchsurahpendek();
    } else {
      const fetchsurahpendek = async () => {
        try {
          const data = await ApiSantri.getData(
            "/surahpendekguru/getlistawal/?pondokId= " +
              userProfile.pondokId +
              "&masterpondokId=&userId="
          );

          setSurahPendek(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchsurahpendek();
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
          Header: "Surah Pendek",
          accessor: "name",
        },

        {
          Header: "Keterangan",
          accessor: "ket",
        },
        {
          Header: "Pondok",
          accessor: "pondokname",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, [surahpendekgurudata]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namaguru",
        Cell: perkecilnama,
      },
      {
        Header: "Surah Pendek",
        accessor: "surah",
      },

      {
        Header: "Keterangan",
        accessor: "ket",
      },
      {
        Header: "Pondok",
        accessor: "pondokName",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  // const data = React.useMemo(() => surahpendekgurudata, [surahpendekgurudata]);
  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Surah Pendek Guru
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {surahpendekgurudata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={surahpendek} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default SurahPendekGuru;
