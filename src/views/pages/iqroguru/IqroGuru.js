import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ApiSantri from "../../../api/ApiSantri";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalGuruRequest,
  doGetIqroGuruByMasterTahfidzRequest,
  doGetIqroGuruByRumahTahfidzRequest,
  doGetIqroSantriRequest,
} from "../../../reduxsaga/actions/IqroGuru";
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

const IqroGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, iqrogurudata } = useSelector(
    (state) => state.iqroGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  const [iqro, setIqro] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchiqro = async () => {
        try {
          const data = await ApiSantri.getData(
            "/iqroguru/getlistawal/?pondokId=&masterpondokId=&userId="
          );

          setIqro(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchiqro();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchiqro = async () => {
        try {
          const data = await ApiSantri.getData(
            "/iqroguru/getlistawal/?pondokId=&masterpondokId=" +
              userProfile.masterpondokId +
              "&userId="
          );

          setIqro(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchiqro();
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      const fetchiqro = async () => {
        try {
          const data = await ApiSantri.getData(
            "/usersantri/hafalaniqroguru/" + userProfile.userId
          );

          setIqro(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchiqro();
    } else {
      const fetchiqro = async () => {
        try {
          const data = await ApiSantri.getData(
            "/iqroguru/getlistawal/?pondokId=" +
              userProfile.pondokId +
              "&masterpondokId=&userId="
          );

          setIqro(data);
        } catch (error) {
          Alert.error("Periksa Jaringan anda !");
        }
      };
      fetchiqro();
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
          Header: "Iqro",
          accessor: "name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
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

  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data IQRO Guru
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {iqrogurudata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={iqro} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default IqroGuru;
