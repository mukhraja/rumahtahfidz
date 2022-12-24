import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import Table, {
  ButtonLinkUser,
  perkecilemail,
  perkecilnama,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetByAdminUserRequest } from "../../../reduxsaga/actions/User";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
const Admin = () => {
  const dispatch = useDispatch();

  const { isLoading, userdata } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetByAdminUserRequest());
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
            Cell: perkecilnama,
          },
          {
            Header: "Email",
            accessor: "email",
            Cell: perkecilemail,
          },
          {
            Header: "Telephone",
            accessor: "telephone",
          },
          {
            Header: "Pondok",
            accessor: "Pondok.name",
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
          Data Administrator
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

export default Admin;
