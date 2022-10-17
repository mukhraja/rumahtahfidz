import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { santri } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  doCreateSantriRequest,
  doGetSantriRequest,
} from "../../../reduxsaga/actions/Santri";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";

const TambahSantri = () => {
  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan nama santri").required(
      "Masukkan nama santri"
    ),
    nis: Yup.string("Masukkan nomor identik santri").required(
      "Masukkan nomor identik santri"
    ),
    address: Yup.string("Masukkan alamat").required(
      "Masukkan alamat"
    ),
    datebirth: Yup.string("Masukkan tanggal lahir").required(
      "Masukkan tanggal lahir"
    ),
    gender: Yup.string("Masukkan jenis kelamin").required(
      "Masukkan nomor jenis kelamin"
    ),
     education: Yup.string("Masukkan pendidikan").required(
      "Masukkan nomor pendidikan"
    ),
    city: Yup.string("Masukkan kota").required(
      "Masukkan kota"
    ),
    province: Yup.string("Masukkan province").required(
      "Masukkan provinsi"
    ),
    parent: Yup.string("Masukkan nama orang tua").required(
      "Masukkan nama orang tua"
    ),
    telephone: Yup.string("Masukkan nomor telephone").required(
      "Masukkan nomor telephone"
    ),
    tgl_masuk: Yup.string("Pilih Tanggal Masuk").required(
      "Pilih Tanggal Masuk"
    ),
    pondokId: Yup.string("Pilih Pondok ID").required(
      "Pilih Pondok ID"
    ),
    photo: Yup.string("Masukkan nama ibu").required(
      "Upload Photo"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      nis: "",
      address: "",
      datebirth: "",
      gender: "",
      education: "",
      city: "",
      province: "",
      parent: "",
      telephone: "",
      tgl_masuk: "",
      pondokId: "",
      photo: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("nis", values.nis);
      payload.append("address", values.address);
      payload.append("datebirth", values.datebirth);
      payload.append("gender", values.gender);
      payload.append("education", values.education);
      payload.append("city", values.city);
      payload.append("province", values.province);
      payload.append("parent", values.parent);
      payload.append("telephone", values.telephone);
      payload.append("tgl_masuk", values.tgl_masuk);
      payload.append("pondokId", values.pondokId);
      payload.append("photo", values.photo);

      dispatch(doCreateSantriRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      setTimeout(() => {
        navigate("/datasantri", { state: { refresh: true } });
      }, 3000);
    },
  });

  const [previewImg, setPreviewImg] = useState();
  const [uploaded, setUploaded] = useState(false);

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      formik.setFieldValue("photo", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPreviewImg(null);
  };

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Tambah Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-sm">
        <form method="POST" action="#">
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Nama</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              name="name"
              placeholder="Nama Santri"
            />
             {formik.touched.name && formik.errors.name ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">NIS</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.nis}
              onChange={formik.handleChange}
              name="nis"
              id="nis"
              placeholder="Nomor Identik santri"
            />
             {formik.touched.nis && formik.errors.nis ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.nis}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Alamat</h1>
            <textarea
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              onChange={formik.handleChange}
              name="address"
              id="address"
              placeholder="Alamat"
            >
              
            </textarea>
            {formik.touched.address && formik.errors.address ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.address}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Tempat / Tanggal Lahir</h1>
            <input
              type="date"
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.datebirth}
              onChange={formik.handleChange}
              name="datebirth"
              id="datebirth"
              placeholder="Tempat / Tanggal Lahir"
            />
            {formik.touched.datebirth && formik.errors.datebirth ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.datebirth}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Jenis Kelamin</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
              id="gender"
              placeholder="Jenis Kelamin"
            />
            {formik.touched.gender && formik.errors.gender ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.gender}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Pendidikan</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.education}
              onChange={formik.handleChange}
              name="education"
              id="education"
              placeholder="Pendidikan"
            />
            {formik.touched.education && formik.errors.education ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.education}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Kota</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.city}
              onChange={formik.handleChange}
              name="city"
              id="city"
              placeholder="Kota"
            />
            {formik.touched.city && formik.errors.city ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.city}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Provinsi</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.province}
              onChange={formik.handleChange}
              name="province"
              id="province"
              placeholder="Provinsi"
            />
             {formik.touched.province && formik.errors.province ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.province}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Orang tua / Wali</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.parent}
              onChange={formik.handleChange}
              name="parent"
              id="parent"
              placeholder="Orang tua"
            />
            {formik.touched.parent && formik.errors.parent ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.parent}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Telepon</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              name="telephone"
              id="telephone"
              placeholder="Telepon"
            />
             {formik.touched.telephone && formik.errors.telephone ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.telephone}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Tanggal Masuk</h1>
            <input
              type="date"
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.tgl_masuk}
              onChange={formik.handleChange}
              name="tgl_masuk"
              id="tgl_masuk"
              placeholder="Tanggal Masuk"
            />
             {formik.touched.tgl_masuk && formik.errors.tgl_masuk ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.tgl_masuk}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Penempatan</h1>
            <select
              name="pondokId"
              id="pondokId"
              value={formik.values.pondokId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="pondokId"
              class="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            >
              <option value="" selected disabled hidden>
                Pilih Rumah Tahfidz
              </option>
              {rumahtahfidzdata.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
            {formik.touched.pondokId && formik.errors.pondokId ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.pondokId}
              </span>
            ) : null}
          </div>

          <div class="col-span-4 row-span-2 py-2">
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {uploaded === false ? (
                  <svg
                    className="h-6 w-6 text-gray-200"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <>
                    <img
                      src={previewImg}
                      center
                      alt="image"
                      className=" h-20 w-20"
                    />
                    <div className="flex text-sm text-gray-600 center text-center">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="ml-4" onClick={onClearImage}>
                          Remove
                        </span>
                      </label>
                    </div>
                  </>
                )}

                <div className="text-sm text-gray-600 text-center">
                  <label
                    htmlFor="photo"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      id="photo"
                      accept="image/*"
                      onChange={uploadOnChange("file")}
                      className="sr-only"
                    />
                  </label>
                </div>
                {formik.touched.photo && formik.errors.photo ? (
                  <span className="my-1 text-sm text-red-600 w-full ml-3">
                    {formik.errors.photo}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="z-30">
            <ToastContainer autoClose={2000} />
          </div>

          {/*  */}
          <div>
            <button
              className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
              type="button"
              onClick={formik.handleSubmit}
            >
              SIMPAN
            </button>
            <button
              className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
              onClick={() =>
                navigate("/datasantri", { state: { refresh: true } })
              }
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahSantri;
