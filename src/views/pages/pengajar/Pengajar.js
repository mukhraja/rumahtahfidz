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
import Moment from "react-moment";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Pengajar = () => {
  const dispatch = useDispatch();

  const { isLoading, gurudata } = useSelector((state) => state.guruState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetGuruRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetGuruByMasterTahfidzRequest(userProfile.masterpondokId));
    } else {
      dispatch(doGetGuruByRumahTahfidzRequest(userProfile.pondokId));
    }
  }, []);

  const [Display, setDisplay] = useState([]);

  const [databaru, setDatabaru] = useState([]);

  useEffect(() => {
    setDatabaru(
      gurudata.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );
  }, [gurudata]);

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
          Cell: ButtonLinkGuru,
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
          accessor: "Pondok.name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkGuru,
        },
      ]);
    }
  }, [gurudata]);

  // const data = React.useMemo(() => gurudata, [gurudata]);
  return (
    <div>
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
      <div className="mt-6 px-4 text-gray-500">
        <Table columns={Display} data={databaru} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Pengajar;
