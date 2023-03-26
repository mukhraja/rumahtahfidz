import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { bacaiqro } from "../../../gambar";
import {
  doGetByRumahTahfidzRequest,
  doGetRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import { doCreateAlquranSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import { doGetGuruRequest } from "../../../reduxsaga/actions/Guru";
import { doCreateAlquranGuruRequest } from "../../../reduxsaga/actions/Alquranguru";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";
import { toast, Toaster } from "react-hot-toast";

const TambahAlquranGuru = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  const [listpondok, setListpondok] = useState([]);
  const [listguru, setListGuru] = useState([]);

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistguru = async () => {
        try {
          const data = await ApiSantri.getData("/guru/getAll");
          setListGuru(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistguru();
    } else if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f884") {
      const fetchlistguru = async () => {
        try {
          const data = await ApiSantri.getData(
            "/guru/getByMasterPondokId/" + userProfile.masterpondokId
          );
          setListGuru(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistguru();
    } else if (userProfile.role == "1a2832f9-ceb7-4ff9-930a-af176c88dcc5") {
      // dispatch(doGetSantriByUserIdRequest(userProfile.userId));
    } else {
      const fetchlistguru = async () => {
        try {
          const data = await ApiSantri.getData(
            "/guru/getByPondokId/" + userProfile.pondokId
          );
          setListGuru(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistguru();
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
    juz: Yup.string("Masukkan Juz Alquran").required("Masukkan Juz Alquran"),
    surah: Yup.string("Masukkan Surah Alquran").required(
      "Masukkan Surah Alquran"
    ),
    ayat: Yup.string("Masukkan ayat").required("Masukkan ayat"),
    halaman: Yup.string("Masukkan halaman").required("Masukkan halaman"),
    ket: Yup.string("Masukkan keterangan").required("Masukkan keterangan"),

    tgl_selesai: Yup.string("Masukkan tgl selesai").required(
      "Masukkan tgl selesai"
    ),
    guruId: Yup.string("Pilih Pengajar").required("Pilih Pengajar"),
  });

  const formik = useFormik({
    initialValues: {
      juz: "",
      surah: "",
      ayat: "",
      halaman: "",
      tgl_selesai: "",
      ket: "",
      guruId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        juz: values.juz,
        surah: values.surah,
        ayat: values.ayat,
        halaman: values.halaman,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
        guruId: values.guruId,
      };

      const TambahAlquran = async () => {
        const loadingToast = Alert.loading("Sedang menambahkan...");
        try {
          await ApiSantri.postData("/alquranguru/insert", payload);
          toast.dismiss(loadingToast);
          Alert.success("Berhasil ditambahkan !");
        } catch (error) {
          toast.dismiss(loadingToast);
          Alert.error(error.data.data);
        }
      };
      TambahAlquran();

      // setTimeout(() => {
      //   navigate("/dataalquranguru", { state: { refresh: true } });
      // }, 3000);
    },
  });

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { gurudata } = useSelector((state) => state.guruState);
  const { userProfile } = useSelector((state) => state.userState);

  const keterangan = ["mengulang", "belum lancar", "lanjut", "selesai"];

  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Tambah Hafalan Alquran
        </h1>
        <img src={bacaiqro} className="h-20" />
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
          <h1 className="block lg:col-span-2 col-span-4">Guru</h1>
          <select
            name="guruId"
            id="guruId"
            value={formik.values.guruId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="guruId"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Pengajar
            </option>
            {listguru
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
          {formik.touched.guruId && formik.errors.guruId ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.guruId}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Juz</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Juz Ke ..."
            name="juz"
            id="juz"
            value={formik.values.juz}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.juz && formik.errors.juz ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.juz}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Surah</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Surah Ke ..."
            name="surah"
            id="surah"
            value={formik.values.surah}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.surah && formik.errors.surah ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.surah}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Ayat</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Ayat Ke ..."
            name="ayat"
            id="ayat"
            value={formik.values.ayat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ayat && formik.errors.ayat ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.ayat}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Halaman</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Halaman ..."
            name="halaman"
            id="halaman"
            value={formik.values.halaman}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.halaman && formik.errors.halaman ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.halaman}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Tanggal Selesai</h1>
          <input
            type="date"
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
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
            onClick={() => navigate("/dataalquranguru")}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahAlquranGuru;
