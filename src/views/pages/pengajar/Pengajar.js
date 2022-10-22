import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pengajar } from "../../../gambar";
import { doGetGuruRequest } from "../../../reduxsaga/actions/Guru";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table, {
  AvatarCell,
  ButtonLinkGuru,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const Pengajar = () => {
  const dispatch = useDispatch();

  const { gurudata } = useSelector((state) => state.guruState);

  useEffect(() => {
    dispatch(doGetGuruRequest());
  }, []);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkGuru,
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "NIU",
          accessor: "niu",
        },
        {
          Header: "MASUK",
          accessor: "mulai_masuk",
        },
        {
          Header: "VAKUM",
          accessor: "mulai_vakum",
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
          Cell: ButtonLinkGuru,
        },
      ]);
    }
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "NIU",
        accessor: "niu",
      },
      {
        Header: "MASUK",
        accessor: "mulai_masuk",
      },
      {
        Header: "VAKUM",
        accessor: "mulai_vakum",
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
        Cell: ButtonLinkGuru,
      },
    ],
    []
  );

  // const data = React.useMemo(() => gurudata, [gurudata]);
  return (
    <div>
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={gurudata} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Pengajar;
