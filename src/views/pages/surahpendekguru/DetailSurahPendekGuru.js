import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ApiSantri from "../../../api/ApiSantri";
import { bacaiqro } from "../../../gambar";
import { doGetGuruByIdRequest } from "../../../reduxsaga/actions/Guru";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { doGetSurahPendekGuruRequest } from "../../../reduxsaga/actions/SurahPendekGuru";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkAlquranGuruList,
  ButtonLinkIqro,
  ButtonLinkIqroList,
  ButtonLinkSurahPendekGuruList,
  ButtonLinkSurahPendekList,
  SelectColumnFilter,
  tanggalcustom,
} from "../../components/datatable/Table";

const DetailSurahPendekGuru = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { gurudata } = useSelector((state) => state.guruState);
  const { surahpendekgurudata } = useSelector(
    (state) => state.surahPendekGuruState
  );
  const { userProfile } = useSelector((state) => state.userState);

  const [listSurahPendek, setListSurahPendek] = useState([]);
  const [listguru, setListguru] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchdetailsurahpendek = async () => {
      try {
        const data = await ApiSantri.getData(
          "/surahpendekguru/getlisthafalan/" + id
        );

        setListSurahPendek(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchdetailsurahpendek();

    const fetchdetailsantri = async () => {
      try {
        const data = await ApiSantri.getData("/guru/getbyid/" + id);

        setListguru(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchdetailsantri();
  }, [refresh]);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "name",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkSurahPendekGuruList
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else if (
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
      ]);
    } else if (
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884"
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Keterangan",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkSurahPendekGuruList
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Surah",
          accessor: "name",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Keterangan",
          accessor: "ket",
        },
        {
          Header: "Update",
          accessor: "updatedAt",
          Cell: tanggalcustom,
        },
      ]);
    }
  }, []);

  // const data = React.useMemo(() => surahpendekgurudata, [surahpendekgurudata]);
  return (
    <div className="">
      <Toaster />
      {listguru.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
            Data Hafalan Surah Pendek {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        {listSurahPendek < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : (
          <Table
            columns={Display}
            data={listSurahPendek}
            url="/datasurahpendekguru/tambah"
          />
        )}
      </div>
    </div>
  );
};

export default DetailSurahPendekGuru;
