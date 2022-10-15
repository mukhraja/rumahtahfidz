import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bacaiqro } from "../../../gambar";
import { doGetAlquranSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import config from "../../../reduxsaga/config/config";
import Table, {
  ButtonLinkAlquranList,
  ButtonLinkIqro,
  ButtonLinkIqroList,
  SelectColumnFilter,
} from "../../components/datatable/Table";

const DetailAlquran = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
    dispatch(doGetAlquranSantriRequest(payload));
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
        Cell: ButtonLinkAlquranList,
      },
    ],
    []
  );

  // const data = React.useMemo(() => alquransantridata, [alquransantridata]);
  return (
    <div className=" overflow-hidden">
      {santridata.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Data Hafalan Alquran {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        <Table
          columns={columns}
          data={alquransantridata}
          url="/dataalquransantri/tambah"
        />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default DetailAlquran;
