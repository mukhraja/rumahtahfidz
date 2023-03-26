import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Combobox } from "@headlessui/react";
import * as Yup from "yup";
import { bacajuz } from "../../../gambar";
import {
  doGetByRumahTahfidzRequest,
  doGetRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import { doCreateIqroSantriRequest } from "../../../reduxsaga/actions/Iqrosantri";
import { doCreateSurahPendekSantriRequest } from "../../../reduxsaga/actions/SurahPendekSantri";
import { CheckIcon } from "@heroicons/react/outline";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import ApiSantri from "../../../api/ApiSantri";
import { toast, Toaster } from "react-hot-toast";

const TambahSurahPendek = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  const [listpondok, setListpondok] = useState([]);
  const [listsantris, setSantris] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistsantri = async () => {
        try {
          const data = await ApiSantri.getData("/santri/getAll");
          setSantris(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistsantri();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchlistsantri = async () => {
        try {
          const data = await ApiSantri.getData(
            "/santri/getByMasterPondokId/" + userProfile.masterpondokId
          );
          setSantris(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistsantri();
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      // dispatch(doGetSantriByUserIdRequest(userProfile.userId));
    } else {
      const fetchlistsantri = async () => {
        try {
          const data = await ApiSantri.getData(
            "/santri/getByPondokId/" + userProfile.pondokId
          );
          setSantris(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistsantri();
    }
  }, []);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId="
          );
          setListpondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    } else {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId=" + userProfile.masterpondokId
          );
          setListpondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    }
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan surah pendek").required("Masukkan surah pendek"),
    tgl_selesai: Yup.string("Masukkan tgl selesai").required(
      "Masukkan tgl selesai"
    ),
    ket: Yup.string("Masukkan keterangan").required("Masukkan keterangan"),

    santriId: Yup.string("Pilih Santri").required("Pilih Santri"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      tgl_selesai: "",
      ket: "",
      santriId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        name: values.name,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
        santriId: values.santriId,
      };

      const tambahsurahpendek = async () => {
        const loadingToast = Alert.loading("Sedang menambahkan...");
        try {
          await ApiSantri.postData("/surahpendeksantri/insert", payload);
          toast.dismiss(loadingToast);
          Alert.success("Berhasil ditambahkan !");
        } catch (error) {
          toast.dismiss(loadingToast);
          Alert.error(error.data.data);
        }
      };
      tambahsurahpendek();

      // setTimeout(() => {
      //   navigate("/datasurahpendeksantri", { state: { refresh: true } });
      // }, 3000);
    },
  });

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { santridata } = useSelector((state) => state.santriState);
  const { userProfile } = useSelector((state) => state.userState);

  const juzamma = [
    "An Naba’",
    "An Nazi’at",
    "Abasa’",
    "At Takwir",
    "Al Infithar",
    "Al Muthaffifin",
    "Al Insyiqaq",
    "Al Buruj",
    "Ath Thariq",
    "Al A’laa",
    "Al Ghasyiah",
    "Al Fajr",
    "Al Balad",
    "Asy Syams",
    "Al Lail",
    "Ad Dhuha",
    "Asy Syarh",
    "At Tin",
    "Al ‘Alaq",
    "Al Qadr",
    "Al Bayyinah",
    "Az Zalzalah",
    "Al ‘Aadiyah",
    "Al Qari’ah",
    "At Takatsur",
    "Al ‘Ashr",
    "Al Humazah",
    "Al Fiil",
    "Quraisy",
    "Al Ma’un",
    "Al Kautsar",
    "Al Kafirun",
    "An Nashr",
    "Al Lahab",
    "Al Ikhlash",
    "Al Falaq",
    "An Nas",
  ];

  const keterangan = ["mengulang", "belum lancar", "lanjut", "selesai"];
  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Hafalan Surah Pendek
        </h1>
        <img src={bacajuz} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Tahfidz</h1>
          <select
            name="pondokId"
            id="pondokId"
            value={select}
            onChange={handleChange}
            autoComplete="pondokId"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Rumah Tahfidz
            </option>
            {listpondok
              .sort(function (a, b) {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
          </select>
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Hafalan</h1>
          <select
            name="santriId"
            id="santriId"
            value={formik.values.santriId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="santriId"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Santri
            </option>
            {listsantris
              .filter((e) => e.pondok_id === select)
              .sort(function (a, b) {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
          </select>
          {formik.touched.santriId && formik.errors.santriId ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.santriId}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Surah Pendek</h1>
          <select
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="name"
            data-dropup-auto="false"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Surah Pendek
            </option>
            {juzamma.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          {formik.touched.name && formik.errors.name ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.name}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Tanggal Selesai</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            type="date"
            name="tgl_selesai"
            id="tgl_selesai"
            value={formik.values.tgl_selesai}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tgl_selesai && formik.errors.tgl_selesai ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.tgl_selesai}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Keterangan</h1>
          <select
            name="ket"
            id="ket"
            value={formik.values.ket}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="ket"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Keterangan
            </option>
            {keterangan.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          {formik.touched.ket && formik.errors.ket ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.ket}
            </span>
          ) : null}
        </div>
        <div>
          <button
            className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm"
            type="button"
            onClick={formik.handleSubmit}
          >
            SIMPAN
          </button>
          <button
            className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2"
            onClick={() => navigate("/datasurahpendeksantri")}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahSurahPendek;
