import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacajuz } from "../../../gambar";
import { doGetSurahPendekAwalGuruRequest } from "../../../reduxsaga/actions/SurahPendekGuru";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const SurahPendekGuru = () => {
  const dispatch = useDispatch();

  const { surahpendekgurudata } = useSelector(
    (state) => state.surahPendekGuruState
  );

  useEffect(() => {
    dispatch(doGetSurahPendekAwalGuruRequest());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namaguru",
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
        accessor: "guruId",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  // const data = React.useMemo(() => surahpendekgurudata, [surahpendekgurudata]);
  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Surah Pendek Guru
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={surahpendekgurudata} url="tambah" />
      </div>
    </div>
  );
};

export default SurahPendekGuru;
