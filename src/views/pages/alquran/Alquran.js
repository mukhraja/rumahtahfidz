import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hafalquran } from "../../../gambar";
import { doGetAlquranAwalSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const Alquran = () => {
  const dispatch = useDispatch();

  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );

  useEffect(() => {
    dispatch(doGetAlquranAwalSantriRequest());
  }, []);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namasantri",
        },
        {
          Header: "Detail",
          accessor: "santriId",
          Cell: ButtonLinkIqro,
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namasantri",
        },
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
          Header: "Detail",
          accessor: "santriId",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namasantri",
      },
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
        Header: "Detail",
        accessor: "santriId",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Hafalan Qur'an
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={alquransantridata} url="tambah" />
      </div>
    </div>
  );
};

export default Alquran;
