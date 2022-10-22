import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { hafalquran } from "../../../gambar";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import {
  doCreateIqroSantriRequest,
  doGetAlquranSantriByIdRequest,
  doUpdateAlquranSantriRequest,
} from "../../../reduxsaga/actions/Alquransantri";
import {
  doGetAlquranGuruByIdRequest,
  doUpdateAlquranGuruRequest,
} from "../../../reduxsaga/actions/Alquranguru";

const EditAlquranGuru = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  console.log(select);

  const { alqurangurudata } = useSelector((state) => state.alquranGuruState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetAlquranGuruByIdRequest(payload));
  }, []);

  const validationSchema = Yup.object().shape({
    surah: Yup.string("Masukkan Surah Alquran").required(
      "Masukkan Surah Alquran"
    ),
    ayat: Yup.string("Masukkan ayat").required("Masukkan ayat"),
    halaman: Yup.string("Masukkan halaman").required("Masukkan halaman"),
    ket: Yup.string("Masukkan keterangan").required("Masukkan keterangan"),

    tgl_selesai: Yup.string("Masukkan tgl selesai").required(
      "Masukkan tgl selesai"
    ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namaguru: alqurangurudata.length ? alqurangurudata[0].Guru.name : null,
      surah: alqurangurudata.length ? alqurangurudata[0].surah : null,
      ayat: alqurangurudata.length ? alqurangurudata[0].ayat : null,
      halaman: alqurangurudata.length ? alqurangurudata[0].halaman : null,
      tgl_selesai: alqurangurudata.length
        ? alqurangurudata[0].tgl_selesai
        : null,
      ket: alqurangurudata.length ? alqurangurudata[0].ket : null,
      guruId: alqurangurudata.length ? alqurangurudata[0].Guru.id : null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id,
        surah: values.surah,
        ayat: values.ayat,
        halaman: values.halaman,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
      };

      dispatch(doUpdateAlquranGuruRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      // setTimeout(() => {
      //   navigate("/dataalquranguru", { state: { refresh: true } });
      // }, 3000);
    },
  });

  const keterangan = ["mengulang", "belum lancar", "selesai"];

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lf:text-2xl text-xl font-poppins">
          Hafalan Al - Qur'an
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Nama Guru"
            name="namaguru"
            id="namaguru"
            value={formik.values.namaguru}
            disabled
          />
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
            autoComplete="on"
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
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default EditAlquranGuru;
