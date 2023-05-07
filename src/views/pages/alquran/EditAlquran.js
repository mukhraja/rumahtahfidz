import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { hafalquran } from "../../../gambar";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import {
  doCreateIqroSantriRequest,
  doGetAlquranSantriByIdRequest,
  doUpdateAlquranSantriRequest,
} from "../../../reduxsaga/actions/Alquransantri";
import moment from "moment";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";
import { toast, Toaster } from "react-hot-toast";

const EditAlquranSantri = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();

  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );

  const [alquran, setAlquran] = useState([]);

  useEffect(() => {
    const fetchalquran = async () => {
      try {
        const data = await ApiSantri.getData("/alquransantri/getid/" + id);

        setAlquran(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchalquran();
  }, []);

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
    santriId: Yup.string("Pilih Santri").required("Pilih Santri"),
  });

  const keterangan = ["mengulang", "belum lancar", "selesai"];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namesantri: alquran.length ? alquran[0].namasantri : null,
      juz: alquran.length ? alquran[0].juz : null,
      surah: alquran.length ? alquran[0].surah : null,
      ayat: alquran.length ? alquran[0].ayat : null,
      halaman: alquran.length ? alquran[0].halaman : null,
      tgl_selesai: alquran.length
        ? moment(alquran[0].tgl_selesai).format("YYYY-MM-DD")
        : null,
      ket: alquran.length ? alquran[0].ket : null,
      santriId: alquran.length ? alquran[0].id : null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id,
        juz: values.juz,
        surah: values.surah,
        ayat: values.ayat,
        halaman: values.halaman,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
      };

      const updatealquran = async () => {
        const loadingToast = Alert.loading("Sedang diperbaharui...");
        try {
          await ApiSantri.postData("/alquransantri/update/" + id, payload);
          toast.dismiss(loadingToast);
          Alert.success("Berhasil diperbaharui !");
        } catch (error) {
          toast.dismiss(loadingToast);
          Alert.error(error.data.data);
        }
      };
      updatealquran();

      // setTimeout(() => {
      //   navigate("/dataalquransantri", { state: { refresh: true } });
      // }, 3000);
    },
  });

  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Hafalan Al - Qur'an
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Santri</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Nama Santri"
            name="namesantri"
            id="namesantri"
            value={formik.values.namesantri}
            disabled
          />
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
            onClick={() => navigate("/dataalquransantri")}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAlquranSantri;
