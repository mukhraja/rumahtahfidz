import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ApiSantri from "../../../api/ApiSantri";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalSantriRequest,
  doGetIqroSantriByMasterTahfidzRequest,
  doGetIqroSantriByRumahTahfidzRequest,
  doGetIqroSantriByUserIdRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Iqro = () => {
  const dispatch = useDispatch();

  const { isLoading, iqrosantridata } = useSelector(
    (state) => state.iqroSantriState
  );

  const { userProfile } = useSelector((state) => state.userState);

  const [iqro, setIqro] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchiqro = async () => {
        try {
          const data = await ApiSantri.getData(
            "/iqrosantri/getlistawal/?pondokId=&masterpondokId=&userId="
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
            "/iqrosantri/getlistawal/?pondokId=&masterpondokId=" +
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
            "/usersantri/hafalaniqrosantri/" + userProfile.userId
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
            "/iqrosantri/getlistawal/?pondokId= " +
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
          Header: "Pondok",
          accessor: "pondokname",
          Filter: SelectColumnFilter,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, []);

  // const data = React.useMemo(() => iqrosantridata, [iqrosantridata]);
  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data IQRO
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {iqrosantridata < 1 ? (
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

export default Iqro;
