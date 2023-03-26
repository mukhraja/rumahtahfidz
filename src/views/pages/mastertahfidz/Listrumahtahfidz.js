import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ApiSantri from "../../../api/ApiSantri";
import { rumahtahfidz } from "../../../gambar";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkListRumahTahfidz,
  Jumlahorang,
  jumlahorang,
} from "../../components/datatable/Table";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

const Listrumahtahfidz = () => {
  const { id } = useParams();

  // const dispatch = useDispatch();

  // const { isLoading, rumahtahfidzdata } = useSelector(
  //   (state) => state.rumahTahfidzState
  // );
  // const { masterpondokdata } = useSelector((state) => state.masterPondokState);
  const { userProfile } = useSelector((state) => state.userState);

  // const [databaru, setDatabaru] = useState([]);

  // console.log("ini data baru", databaru);

  const [listpondok, setListpondok] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    // dispatch(doGetByRumahTahfidzRequest(id));

    const fetchlistmasterpondok = async () => {
      try {
        const data = await ApiSantri.getData(
          "/pondok/getlist/?masterpondokId=" + id
        );
        setLoading(false);
        setListpondok(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchlistmasterpondok();
  }, [refresh]);
  // useEffect(() => {
  //   setDatabaru(rumahtahfidzdata);
  // }, [rumahtahfidzdata]);

  // console.log(userProfile.pondokId);

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
          Cell: (props) => (
            <ButtonLinkListRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else {
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
          Header: "Ustadz/ah Aktif",
          accessor: "total_guru_aktif",
          Cell: Jumlahorang,
        },
        {
          Header: "Ustadz/ah Vakum",
          accessor: "total_guru_vakum",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri Aktif",
          accessor: "total_santri_aktif",
          Cell: Jumlahorang,
        },
        {
          Header: "Santri Vakum",
          accessor: "total_santri_vakum",
          Cell: Jumlahorang,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkListRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    }
  }, [listpondok]);

  return (
    <div className="mx-4">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className=" w-full">
        <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
            Daftar Rumah Tahfidz
          </h1>
          <img src={rumahtahfidz} className="h-20" />
        </div>
        <div className="mt-6">
          <Table columns={Display} data={listpondok} url="tambah" />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Listrumahtahfidz;
