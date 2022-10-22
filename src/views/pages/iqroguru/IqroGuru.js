import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalGuruRequest,
  doGetIqroSantriRequest,
} from "../../../reduxsaga/actions/IqroGuru";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import axios from "axios";
import config from "../../../reduxsaga/config/config";

const IqroGuru = () => {
  const dispatch = useDispatch();

  const { iqrogurudata } = useSelector((state) => state.iqroGuruState);

  const [data, setData] = useState([]);

  useEffect(() => {
    // (async () => {
    dispatch(doGetIqroAwalGuruRequest());
    // })();
    // setDataUpdate(iqrogurudata);
  }, []);

  useEffect(() => {
    // (async () => {
    axios
      .get(config.domain + "/iqroguru/listawal")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
    // })();
  }, []);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namaguru",
        },
        {
          Header: "Detail",
          accessor: "guruId",
          Cell: ButtonLinkIqro,
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "namaguru",
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
      ]);
    }
  }, []);

  console.log(data);
  // console.log(iqrogurudata);
  const columns = useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namaguru",
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

  // const data = useMemo(() => iqrogurudata, []);

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data IQRO Guru
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={iqrogurudata} url="tambah" />
      </div>
    </div>
  );
};

export default IqroGuru;
