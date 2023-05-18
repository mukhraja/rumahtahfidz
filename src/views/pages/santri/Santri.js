import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { santri } from "../../../gambar";
import Table, {
  ButtonLinkSantri,
  perkecilnama,
  SelectColumnFilter,
  tanggalcustom,
} from "../../components/datatable/Table.js";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";
import { Toaster } from "react-hot-toast";

const Santri = () => {
  const { userProfile } = useSelector((state) => state.userState);
  const [Loading, setLoading] = useState(true);
  const [listsantris, setSantris] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchListSantri = async () => {
      try {
        let endpoint = "";

        if (userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883") {
          endpoint = "/santri/getAll";
        } else if (
          userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884"
        ) {
          endpoint =
            "/santri/getByMasterPondokId/" + userProfile.masterpondokId;
        } else if (
          userProfile.role === "1a2832f9-ceb7-4ff9-930a-af176c88dcc5"
        ) {
          endpoint = "/usersantri/byuserid/" + userProfile.userId;
        } else {
          endpoint = "/santri/getByPondokId/" + userProfile.pondokId;
        }

        const data = await ApiSantri.getData(endpoint);
        setSantris(data);
        setLoading(false);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchListSantri();
  }, [refresh]);

  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const updateDisplay = () => {
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
              <ButtonLinkSantri value={props.value} onRefresh={handleRefresh} />
            ),
          },
        ]);
      } else {
        setDisplay([
          {
            Header: "Nama",
            accessor: "name",
            Cell: perkecilnama,
          },
          {
            Header: "NIS",
            accessor: "nis",
          },
          {
            Header: "MASUK",
            accessor: "mulai_masuk",
            Cell: tanggalcustom,
          },
          {
            Header: "VAKUM",
            accessor: "mulai_vakum",
            Cell: tanggalcustom,
          },
          {
            Header: "PONDOK",
            accessor: "nama_pondok",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Detail",
            accessor: "id",
            Cell: (props) => (
              <ButtonLinkSantri value={props.value} onRefresh={handleRefresh} />
            ),
          },
        ]);
      }
    };

    updateDisplay();
    window.addEventListener("resize", updateDisplay);

    return () => {
      window.removeEventListener("resize", updateDisplay);
    };
  }, []);

  return (
    <div className="">
      {Loading == true ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="mt-6 px-4 text-gray-500">
        <Table columns={display} data={listsantris} url="tambah" />
      </div>
    </div>
  );
};

export default Santri;
