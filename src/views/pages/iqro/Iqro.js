import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalSantriRequest,
  doGetIqroSantriByMasterTahfidzRequest,
  doGetIqroSantriByRumahTahfidzRequest,
  doGetIqroSantriByUserIdRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import Table, {
  ButtonLinkIqro,
  SelectColumnFilter,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Iqro = () => {
  const dispatch = useDispatch();

  const { isLoading, iqrosantridata } = useSelector(
    (state) => state.iqroSantriState
  );
  const { userProfile } = useSelector((state) => state.userState);

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
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetIqroAwalSantriRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(
        doGetIqroSantriByMasterTahfidzRequest(userProfile.masterpondokId)
      );
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      dispatch(doGetIqroSantriByUserIdRequest(userProfile.userId));
    } else {
      dispatch(doGetIqroSantriByRumahTahfidzRequest(userProfile.pondokId));
    }
  }, []);

  // const data = React.useMemo(() => iqrosantridata, [iqrosantridata]);
  return (
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data IQRO
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {iqrosantridata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : (
          <Table columns={Display} data={iqrosantridata} url="tambah" />
        )}
      </div>
    </div>
  );
};

export default Iqro;
