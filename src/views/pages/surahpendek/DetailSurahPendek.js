import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bacaiqro } from "../../../gambar";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { doGetSurahPendekSantriRequest } from "../../../reduxsaga/actions/SurahPendekSantri";
import config from "../../../reduxsaga/config/config";
import Table, {
  ButtonLinkIqro,
  ButtonLinkIqroList,
  ButtonLinkSurahPendekList,
  SelectColumnFilter,
  tanggalcustom,
} from "../../components/datatable/Table";

const DetailSurahPendek = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
    dispatch(doGetSurahPendekSantriRequest(payload));
  }, []);

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
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkSurahPendekList,
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
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkSurahPendekList,
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
      ]);
    }
  }, []);

  return (
    <div className="">
      {santridata.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
            Data Hafalan Surah Pendek {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        {surahpendeksantridata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : (
          <Table
            columns={Display}
            data={surahpendeksantridata}
            url="/datasurahpendeksantri/tambah"
          />
        )}
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default DetailSurahPendek;
