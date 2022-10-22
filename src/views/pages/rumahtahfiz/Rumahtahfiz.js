import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  ButtonLinkRumahTahfidz,
} from "../../components/datatable/Table.js";
import {
  doGetRumahTahfidzRequest,
  doDeleteRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rumahtahfiz = () => {
  const dispatch = useDispatch();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
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
    } else
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
  }, []);

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "Nama",
  //       accessor: "name",
  //     },
  //     {
  //       Header: "NIT",
  //       accessor: "nit",
  //     },
  //     {
  //       Header: "Kepala Tahfiz",
  //       accessor: "chief",
  //     },
  //     {
  //       Header: "Detail",
  //       accessor: "id",
  //       Cell: ButtonLinkRumahTahfidz,
  //     },
  //   ],
  //   []
  // );

  // const data = React.useMemo(() => rumahtahfidzdata, [rumahtahfidzdata]);

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={rumahtahfidzdata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Rumahtahfiz;
