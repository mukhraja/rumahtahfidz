import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { santri } from "../../../gambar";
import Table, {
  ButtonLinkSantri,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
const Santri = () => {
  const dispatch = useDispatch();

  const { santridata } = useSelector((state) => state.santriState);

  useEffect(() => {
    dispatch(doGetSantriRequest());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "NIS",
        accessor: "nis",
      },
      {
        Header: "Keluarga",
        accessor: "parent",
      },
      {
        Header: "Kota",
        accessor: "city",
      },
      {
        Header: "PONDOK",
        accessor: "Pondok.name",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLinkSantri,
      },
    ],
    []
  );

  // const data = React.useMemo(() => santridata, [santridata]);

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={santridata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Santri;
