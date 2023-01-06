import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacajuz } from "../../../gambar";
import {
  doGetSurahPendekAwalSantriRequest,
  doGetSurahPendekSantriByMasterTahfidzRequest,
  doGetSurahPendekSantriByRumahTahfidzRequest,
  doGetSurahPendekSantriByUserIdRequest,
} from "../../../reduxsaga/actions/SurahPendekSantri";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  perkecilnama,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const SurahPendek = () => {
  const dispatch = useDispatch();

  const { isLoading, surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetSurahPendekAwalSantriRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(
        doGetSurahPendekSantriByMasterTahfidzRequest(userProfile.masterpondokId)
      );
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      dispatch(doGetSurahPendekSantriByUserIdRequest(userProfile.userId));
    } else {
      dispatch(
        doGetSurahPendekSantriByRumahTahfidzRequest(userProfile.pondokId)
      );
    }
  }, []);

  const [databaru, setDatabaru] = useState([]);

  useEffect(() => {
    setDatabaru(
      surahpendeksantridata.sort(function (a, b) {
        if (a.namasantri < b.namasantri) {
          return -1;
        }
        if (a.namasantri > b.namasantri) {
          return 1;
        }
        return 0;
      })
    );
  }, [surahpendeksantridata]);

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
          accessor: "santriId",
          Cell: ButtonLinkIqro,
        },
      ]);
    }
  }, [surahpendeksantridata]);

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
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-xl lg:text-2xl font-poppins">
          Data Surah Pendek
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {surahpendeksantridata < 1 ? (
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

export default SurahPendek;
