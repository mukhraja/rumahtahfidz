import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bacaiqro } from "../../../gambar";
import {
  doGetIqroAwalGuruRequest,
  doGetIqroGuruByMasterTahfidzRequest,
  doGetIqroGuruByRumahTahfidzRequest,
  doGetIqroSantriRequest,
} from "../../../reduxsaga/actions/IqroGuru";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const IqroGuru = () => {
  const dispatch = useDispatch();

  const { isLoading, iqrogurudata } = useSelector(
    (state) => state.iqroGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      dispatch(doGetIqroAwalGuruRequest());
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      dispatch(doGetIqroGuruByMasterTahfidzRequest(userProfile.masterpondokId));
    } else {
      dispatch(doGetIqroGuruByRumahTahfidzRequest(userProfile.pondokId));
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

  return (
    <div className="">
      {isLoading ? <LoadingSpinnerLogin /> : ""}
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data IQRO Guru
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        {/* {iqrogurudata < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : ( */}
        <Table columns={Display} data={iqrogurudata} url="tambah" />
        {/* )} */}
      </div>
    </div>
  );
};

export default IqroGuru;
