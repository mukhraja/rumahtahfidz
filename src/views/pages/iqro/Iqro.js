import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalSantriRequest,
  doGetIqroSantriRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const Iqro = () => {
  const dispatch = useDispatch();

  const { iqrosantridata } = useSelector((state) => state.iqroSantriState);

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
          Header: "Detail",
          accessor: "santriId",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namasantri",
      },
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
        Header: "Detail",
        accessor: "guruId",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(doGetIqroAwalSantriRequest());
  }, []);

  // const data = React.useMemo(() => iqrosantridata, [iqrosantridata]);
  return (
    <div className=" overflow-hidden font-poppins">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data IQRO
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={iqrosantridata} url="tambah" />
      </div>
    </div>
  );
};

export default Iqro;
