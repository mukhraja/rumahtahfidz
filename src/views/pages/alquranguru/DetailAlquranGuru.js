import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bacaiqro } from "../../../gambar";
import {
  doGetAlquranGuruByIdRequest,
  doGetAlquranGuruRequest,
} from "../../../reduxsaga/actions/Alquranguru";
import { doGetAlquranSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import { doGetGuruByIdRequest } from "../../../reduxsaga/actions/Guru";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import config from "../../../reduxsaga/config/config";
import Table, {
  ButtonLinkAlquranGuruList,
  ButtonLinkAlquranList,
  ButtonLinkIqro,
  ButtonLinkIqroList,
  SelectColumnFilter,
} from "../../components/datatable/Table";

const DetailAlquranGuru = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gurudata } = useSelector((state) => state.guruState);
  const { alqurangurudata } = useSelector((state) => state.alquranGuruState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetGuruByIdRequest(payload));
    dispatch(doGetAlquranGuruRequest(payload));
  }, []);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkAlquranGuruList,
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Ayat",
          accessor: "ayat",
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
          Header: "Update",
          accessor: "updatedAt",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkAlquranGuruList,
        },
      ]);
    }
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Surah",
        accessor: "surah",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Ayat",
        accessor: "ayat",
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
        Header: "Update",
        accessor: "updatedAt",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLinkAlquranGuruList,
      },
    ],
    []
  );

  // const data = React.useMemo(() => alqurangurudata, [alqurangurudata]);
  return (
    <div className="">
      {gurudata.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Data Hafalan Alquran {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        <Table
          columns={Display}
          data={alqurangurudata}
          url="/dataalquranguru/tambah"
        />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default DetailAlquranGuru;
