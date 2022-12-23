import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import Table, {
  ButtonLinkSantri,
  ButtonLinkUser,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doGetUserByMasterTahfidzRequest,
  doGetUserByRumahTahfidzRequest,
  doGetUserRequest,
} from "../../../reduxsaga/actions/User";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
const User = () => {
  const dispatch = useDispatch();

  const { isLoading, userdata } = useSelector((state) => state.userState);
  const { userProfile } = useSelector((state) => state.userState);

  // const [dataadmin, setDataadmin] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetUserByMasterTahfidzRequest(userProfile.masterpondokId));
    } else {
      dispatch(doGetUserByRumahTahfidzRequest(userProfile.pondokId));
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
          Cell: ButtonLinkUser,
        },
      ]);
    } else {
      setDisplay(
        [
          {
            Header: "Nama",
            accessor: "name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Telephone",
            accessor: "telephone",
          },
          {
            Header: "PONDOK",
            accessor: "Pondok.name",
            Filter: SelectColumnFilter, // new
            filter: "includes",
          },
          {
            Header: "Role",
            accessor: "Role.name",
            Filter: SelectColumnFilter, // new
            filter: "includes",
          },
          {
            Header: "Detail",
            accessor: "id",
            Cell: ButtonLinkUser,
          },
        ],
        []
      );
    }
  }, []);

  return (
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Pengguna
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={userdata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default User;
