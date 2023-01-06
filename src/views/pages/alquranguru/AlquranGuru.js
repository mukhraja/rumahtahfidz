import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hafalquran } from "../../../gambar";
import {
  doGetAlquranAwalGuruRequest,
  doGetAlquranGuruByMasterTahfidzRequest,
  doGetAlquranGuruByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/Alquranguru";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const AlquranGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, alqurangurudata } = useSelector(
    (state) => state.alquranGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetAlquranAwalGuruRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(
        doGetAlquranGuruByMasterTahfidzRequest(userProfile.masterpondokId)
      );
    } else {
      dispatch(doGetAlquranGuruByRumahTahfidzRequest(userProfile.pondokId));
    }
  }, []);

  const [databaru, setDatabaru] = useState([]);

  useEffect(() => {
    setDatabaru(
      alqurangurudata.sort(function (a, b) {
        if (a.namaguru < b.namaguru) {
          return -1;
        }
        if (a.namaguru > b.namaguru) {
          return 1;
        }
        return 0;
      })
    );
  }, [alqurangurudata]);

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
          Header: "Juz",
          accessor: "juz",
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
          Cell: perkecilnama,
        },
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Juz",
          accessor: "juz",
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
  }, [alqurangurudata]);

  // const data = React.useMemo(() => alqurangurudata, [alqurangurudata]);
  return (
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Hafalan Qur'an Guru
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {alqurangurudata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={databaru} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default AlquranGuru;
