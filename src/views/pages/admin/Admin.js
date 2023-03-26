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
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import { Toaster } from "react-hot-toast";
import Alert from "../../../utils/Alert";
import ApiSantri from "../../../api/ApiSantri";
const Admin = () => {
  const dispatch = useDispatch();

  const { isLoading, userdata } = useSelector((state) => state.userState);

  const [listuser, setListuser] = useState([]);

  const { userProfile } = useSelector((state) => state.userState);

  const [refresh, setRefresh] = useState(false);
  const [Loading, setLoading] = useState(true);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchlistuser = async () => {
      try {
        const data = await ApiSantri.getData(
          "/user/byrole/8b273d68-fe09-422d-a660-af3d8312f884"
        );
        setListuser(data);
        setLoading(false);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };
    fetchlistuser();
  }, [refresh]);

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
          Cell: (props) => (
            <ButtonLinkUser value={props.value} onRefresh={handleRefresh} />
          ),
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
            accessor: "nama_pondok",
            Filter: SelectColumnFilter, // new
            filter: "includes",
          },
          {
            Header: "Detail",
            accessor: "id",
            Cell: (props) => (
              <ButtonLinkUser value={props.value} onRefresh={handleRefresh} />
            ),
          },
        ],
        []
      );
    }
  }, []);

  return (
    <div className="">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Administrator
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="mt-6 px-4 text-gray-500">
        <Table columns={Display} data={listuser} url="tambah" />
      </div>
    </div>
  );
};

export default Admin;
