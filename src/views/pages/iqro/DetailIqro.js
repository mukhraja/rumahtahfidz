import axios from "axios";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiSantri from "../../../api/ApiSantri";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroSantriByIdRequest,
  doGetIqroSantriRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkIqro,
  ButtonLinkIqroList,
  SelectColumnFilter,
  tanggalcustom,
} from "../../components/datatable/Table";

const DetailIqro = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { santridata } = useSelector((state) => state.santriState);
  const { iqrosantridata } = useSelector((state) => state.iqroSantriState);
  const { userProfile } = useSelector((state) => state.userState);
  const [listiqro, setListIqro] = useState([]);
  const [listsantris, setListsantris] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchiqro = async () => {
      try {
        const data = await ApiSantri.getData(
          "/iqrosantri/getlisthafalan/" + id
        );

        setListIqro(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchiqro();

    const fetchdetailsantri = async () => {
      try {
        const data = await ApiSantri.getData("/santri/getbyid/" + id);

        setListsantris(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchdetailsantri();
  }, [refresh]);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Iqro",
          accessor: "name",
        },
        {
          Header: "Hal",
          accessor: "halaman",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkIqroList value={props.value} onRefresh={handleRefresh} />
          ),
        },
      ]);
    } else if (
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Iqro",
          accessor: "name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Hal",
          accessor: "halaman",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
      ]);
    } else if (
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884"
    ) {
      setDisplay([
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
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Update",
          accessor: "updated_at",
          Cell: tanggalcustom,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkIqroList value={props.value} onRefresh={handleRefresh} />
          ),
        },
      ]);
    } else {
      setDisplay([
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
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Update",
          accessor: "updated_at",
          Cell: tanggalcustom,
        },
      ]);
    }
  }, []);

  return (
    <div className="">
      <Toaster />
      {listsantris.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
            Data Hafalan IQRO{" "}
            {listiqro.length > 2 ? listiqro[0].nama_santri : null}
          </h1>
          <img
            src={
              config.urlImage + "/" + listiqro.length > 2
                ? listiqro[0].photo
                : null
            }
            className="h-20"
          />
        </div>
      ))}
      <div className="mt-6 px-4">
        {listiqro < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : (
          <Table
            columns={Display}
            data={listiqro}
            url="/dataiqrosantri/tambah"
          />
        )}
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default DetailIqro;
