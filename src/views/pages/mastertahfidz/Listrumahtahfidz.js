import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { rumahtahfidz } from "../../../gambar";
import { doGetByRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import Table, {
  ButtonLinkListRumahTahfidz,
  ButtonLinkRumahTahfidz,
} from "../../components/datatable/Table";

const Listrumahtahfidz = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { masterpondokdata } = useSelector((state) => state.masterPondokState);
  const { userProfile } = useSelector((state) => state.userState);

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    dispatch(doGetByRumahTahfidzRequest(id));
  }, []);

  console.log(userProfile.pondokId);

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
          Cell: ButtonLinkListRumahTahfidz,
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
          Cell: ButtonLinkListRumahTahfidz,
        },
      ]);
  }, []);

  return (
    <div className="mx-4">
      <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
          Daftar Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6">
        <Table columns={Display} data={rumahtahfidzdata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Listrumahtahfidz;
