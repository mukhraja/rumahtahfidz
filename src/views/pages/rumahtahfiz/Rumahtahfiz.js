import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  ButtonLinkRumahTahfidz,
  Jumlahorang,
} from "../../components/datatable/Table.js";
import {
  doGetRumahTahfidzRequest,
  doDeleteRumahTahfidzRequest,
  doGetRumahTahfidzByIdRequest,
  doGetByRumahTahfidzRequest,
  doGetByPondokIdRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetMasterPondokRequest } from "../../../reduxsaga/actions/Masterpondok";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Rumahtahfiz = () => {
  const dispatch = useDispatch();

  const { isLoading, rumahtahfidzdata } = useSelector(
    (state) => state.rumahTahfidzState
  );
  const { masterpondokdata } = useSelector((state) => state.masterPondokState);
  const { userProfile } = useSelector((state) => state.userState);

  const [databaru, setDatabaru] = useState([]);

  useEffect(() => {
    setDatabaru(rumahtahfidzdata);
  }, [rumahtahfidzdata]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetByRumahTahfidzRequest(userProfile.masterpondokId));
    } else {
      dispatch(doGetByPondokIdRumahTahfidzRequest(userProfile.pondokId));
    }
  }, []);

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
          Cell: ButtonLinkRumahTahfidz,
        },
      ]);
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
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
          Cell: ButtonLinkRumahTahfidz,
        },
      ]);
    } else if (rumahtahfidzdata.length > 2) {
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
          Header: "Ustadz/ah",
          accessor: "Gurus",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri",
          accessor: "Santris",
          Cell: Jumlahorang,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkRumahTahfidz,
        },
      ]);
    }
  }, [rumahtahfidzdata]);

  return (
    <div className="mx-4">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
          Data Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6">
        <Table columns={Display} data={databaru} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Rumahtahfiz;
