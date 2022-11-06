import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hafalquran } from "../../../gambar";
import { doGetAlquranAwalGuruRequest, doGetAlquranGuruByRumahTahfidzRequest } from "../../../reduxsaga/actions/Alquranguru";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const AlquranGuru = () => {
  const dispatch = useDispatch();

  const { alqurangurudata } = useSelector((state) => state.alquranGuruState);
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if(userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883"){
    dispatch(doGetAlquranAwalGuruRequest());
  }else{
    dispatch(doGetAlquranGuruByRumahTahfidzRequest(userProfile.pondokId))
  }
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
          Header: "Surah",
          accessor: "surah",
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
          accessor: "guruId",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namaguru",
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
        accessor: "guruId",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  // const data = React.useMemo(() => alqurangurudata, [alqurangurudata]);
  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Hafalan Qur'an Guru
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={Display} data={alqurangurudata} url="tambah" />
      </div>
    </div>
  );
};

export default AlquranGuru;
