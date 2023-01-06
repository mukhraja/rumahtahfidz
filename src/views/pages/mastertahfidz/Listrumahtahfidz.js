import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { rumahtahfidz } from "../../../gambar";
import { doGetByRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import Table, {
  ButtonLinkListRumahTahfidz,
  ButtonLinkRumahTahfidz,
  Jumlahorang,
  jumlahorang,
} from "../../components/datatable/Table";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Listrumahtahfidz = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { isLoading, rumahtahfidzdata } = useSelector(
    (state) => state.rumahTahfidzState
  );
  const { masterpondokdata } = useSelector((state) => state.masterPondokState);
  const { userProfile } = useSelector((state) => state.userState);

  const [databaru, setDatabaru] = useState([]);

  console.log("ini data baru", databaru);

  useEffect(() => {
    dispatch(doGetByRumahTahfidzRequest(id));
  }, []);

  useEffect(() => {
    setDatabaru(rumahtahfidzdata);
  }, [rumahtahfidzdata]);

  console.log(userProfile.pondokId);

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
          Cell: ButtonLinkListRumahTahfidz,
        },
      ]);
    } else if (rumahtahfidzdata.length > 2) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "NIT",
          accessor: "nit",
        },
        {
          Header: "Kepala Tahfiz",
          accessor: "chief",
        },
        {
          Header: "Ustadz/ah",
          accessor: "Gurus",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri",
          accessor: "Santris",
          Cell: Jumlahorang,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: ButtonLinkListRumahTahfidz,
        },
      ]);
    }
  }, [rumahtahfidzdata]);

  return (
    <div className="mx-4">
      {isLoading ? (
        <LoadingSpinnerLogin />
      ) : (
        <div>
          <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
              Daftar Rumah Tahfidz
            </h1>
            <img src={rumahtahfidz} className="h-20" />
          </div>
          <div className="mt-6">
            <Table columns={Display} data={databaru} url="tambah" />
          </div>
          <div className="z-30">
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Listrumahtahfidz;
