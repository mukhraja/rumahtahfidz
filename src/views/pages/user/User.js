import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import Table, {
  ButtonLinkSantri,
  ButtonLinkUser,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetUserRequest } from "../../../reduxsaga/actions/User";
const User = () => {
  const dispatch = useDispatch();

  const { userdata } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(doGetUserRequest());
  }, []);

  const columns = React.useMemo(
    () => [
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
        Header: "Address",
        accessor: "address",
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

  // const data = React.useMemo(() => userdata, [userdata]);

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Pengguna
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={userdata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default User;
