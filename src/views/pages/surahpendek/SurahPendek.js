import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacajuz } from "../../../gambar";
import { doGetSurahPendekAwalSantriRequest } from "../../../reduxsaga/actions/SurahPendekSantri";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const SurahPendek = () => {
  const dispatch = useDispatch();

  const { surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );

  useEffect(() => {
    dispatch(doGetSurahPendekAwalSantriRequest());
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
          Header: "Surah Pendek",
          accessor: "name",
        },

        {
          Header: "Keterangan",
          accessor: "ket",
        },
        {
          Header: "Pondok",
          accessor: "namapondok",
          Filter: SelectColumnFilter, // new
          filter: "includes",
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
        Header: "Surah Pendek",
        accessor: "name",
      },

      {
        Header: "Keterangan",
        accessor: "ket",
      },
      {
        Header: "Pondok",
        accessor: "namapondok",
        Filter: SelectColumnFilter, // new
        filter: "includes",
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
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-xl lg:text-2xl font-poppins">
          Data Surah Pendek
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={surahpendeksantridata} url="tambah" />
      </div>
    </div>
  );
};

export default SurahPendek;
