import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacajuz } from "../../../gambar";
import {
  doGetSurahPendekAwalGuruRequest,
  doGetSurahPendekGuruByMasterTahfidzRequest,
  doGetSurahPendekGuruByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/SurahPendekGuru";
import Table, {
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const SurahPendekGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, surahpendekgurudata } = useSelector(
    (state) => state.surahPendekGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetSurahPendekAwalGuruRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(
        doGetSurahPendekGuruByMasterTahfidzRequest(userProfile.masterpondokId)
      );
    } else {
      dispatch(doGetSurahPendekGuruByRumahTahfidzRequest(userProfile.pondokId));
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
      ]);
    }
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "namaguru",
        Cell: perkecilnama,
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
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Surah Pendek Guru
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {surahpendekgurudata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={surahpendekgurudata} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default SurahPendekGuru;
