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
import moment from "moment";

const EditAlquranSantri = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  console.log(select);

  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );

  useEffect(() => {
    const payload = { id };
    dispatch(doGetAlquranSantriByIdRequest(payload));
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
    santriId: Yup.string("Pilih Santri").required("Pilih Santri"),
  });

  const keterangan = ["mengulang", "belum lancar", "selesai"];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namesantri: alquransantridata.length
        ? alquransantridata[0].Santri.name
        : null,
      surah: alquransantridata.length ? alquransantridata[0].surah : null,
      ayat: alquransantridata.length ? alquransantridata[0].ayat : null,
      halaman: alquransantridata.length ? alquransantridata[0].halaman : null,
      tgl_selesai: alquransantridata.length
        ? moment(alquransantridata[0].tgl_selesai).format("YYYY-MM-DD")
        : null,
      ket: alquransantridata.length ? alquransantridata[0].ket : null,
      santriId: alquransantridata.length
        ? alquransantridata[0].Santri.id
        : null,
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

      dispatch(doUpdateAlquranSantriRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      // setTimeout(() => {
      //   navigate("/dataalquransantri", { state: { refresh: true } });
      // }, 3000);
    },
  });

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Hafalan Al - Qur'an
        </h1>
        <img src={hafalquran} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Nama</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Nama Santri"
            name="namesantri"
            id="namesantri"
            value={formik.values.namesantri}
            disabled
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Surah</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Surah Ke ..."
            name="surah"
            id="surah"
            value={formik.values.surah}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.surah && formik.errors.surah ? (
            <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
              {formik.errors.surah}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Ayat</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Ayat Ke ..."
            name="ayat"
            id="ayat"
            value={formik.values.ayat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ayat && formik.errors.ayat ? (
            <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
              {formik.errors.ayat}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Halaman</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Halaman ..."
            name="halaman"
            id="halaman"
            value={formik.values.halaman}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.halaman && formik.errors.halaman ? (
            <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
              {formik.errors.halaman}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Tanggal Selesai</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            type="date"
            name="tgl_selesai"
            id="tgl_selesai"
            value={formik.values.tgl_selesai}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tgl_selesai && formik.errors.tgl_selesai ? (
            <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
              {formik.errors.tgl_selesai}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Keterangan</h1>
          <select
            name="ket"
            id="ket"
            value={formik.values.ket}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="ket"
            class="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Keterangan
            </option>
            {keterangan.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          {formik.touched.ket && formik.errors.ket ? (
            <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
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
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default EditAlquranSantri;
