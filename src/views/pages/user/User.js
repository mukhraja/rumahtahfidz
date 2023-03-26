import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import Table, {
  ButtonLinkSantri,
  ButtonLinkUser,
  perkecilemail,
  perkecilnama,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import {
  doGetUserByMasterTahfidzRequest,
  doGetUserByRumahTahfidzRequest,
  doGetUserRequest,
} from "../../../reduxsaga/actions/User";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import ApiSantri from "../../../api/ApiSantri";
import { Toaster } from "react-hot-toast";
import Alert from "../../../utils/Alert";
const User = () => {
  const dispatch = useDispatch();

  const { isLoading, userdata } = useSelector((state) => state.userState);
  const { userProfile } = useSelector((state) => state.userState);

  // const [dataadmin, setDataadmin] = useState([]);

  const [listuser, setListuser] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchlistuser = async () => {
        try {
          const data = await ApiSantri.getData(
            "/user/bymasterpondok/" + userProfile.masterpondokId
          );
          setListuser(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistuser();
    } else {
      const fetchlistuser = async () => {
        try {
          const data = await ApiSantri.getData(
            "/user/bypondok/" + userProfile.pondokId
          );
          setListuser(data);
          setLoading(false);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistuser();
    }
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
            Header: "PONDOK",
            accessor: "nama_pondok",
            Filter: SelectColumnFilter, // new
            filter: "includes",
          },
          {
            Header: "Role",
            accessor: "nama_role",
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
          Data Pengguna
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={listuser} url="tambah" />
      </div>
    </div>
  );
};

export default User;
