import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pengajar } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doCreateGuruRequest } from "../../../reduxsaga/actions/Guru";
import moment from "moment";

const TambahPengajar = () => {
  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan nama ustadz/ah").required(
      "Masukkan nama pengajar"
    ),
    niu: Yup.string("Masukkan nomor identik ustadz/ah").required(
      "Masukkan nomor identik ustadz/ah"
    ),
    tempat: Yup.string("Masukkan tempat").required("Masukkan tempat"),
    datebirth: Yup.string("Masukkan tanggal lahir").required(
      "Masukkan tanggal lahir"
    ),
    gender: Yup.string("Masukkan jenis kelamin").required(
      "Masukkan nomor jenis kelamin"
    ),
    telephone: Yup.string("Masukkan nomor telephone").required(
      "Masukkan nomor telephone"
    ),
    address: Yup.string("Masukkan alamat").required("Masukkan alamat"),
    ayah: Yup.string("Masukkan nama ayah").required("Masukkan nama ayah"),
    ibu: Yup.string("Masukkan nama ibu").required("Masukkan nama ibu"),
    mulai_masuk: Yup.string("Pilih Tanggal Masuk").required(
      "Pilih Tanggal Masuk"
    ),
    mulai_vakum: Yup.string("Pilih Tanggal Vakum").required(
      "Pilih Tanggal Vakum"
    ),
    pondokId: Yup.string("Pilih Pondok ID").required("Pilih Pondok ID"),
    photo: Yup.string("Masukkan nama ibu").required("Upload Photo"),
  });

  const formik = useFormik({
    initialValues: {
      name: "ass",
      niu: "ass",
      tempat: "ass",
      datebirth: "",
      gender: "ass",
      telephone: "ass",
      education: "ass",
      address: "ass",
      ayah: "ass",
      ibu: "ass",
      mulai_masuk: "",
      mulai_vakum: "",
      pondokId: "",
      photo: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // const tanggalmasuk = (
      //   <Moment format="DD/MM/YYYY">{values.mulai_masuk}</Moment>
      // );
      // const tanggalvakum = (
      //   <Moment format="DD/MM/YYYY">{values.mulai_vakum}</Moment>
      // );

      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("niu", values.niu);
      payload.append("tempat", values.tempat);
      payload.append("datebirth", values.datebirth);
      payload.append("gender", values.gender);
      payload.append("telephone", values.telephone);
      payload.append("address", values.address);
      payload.append("ayah", values.ayah);
      payload.append("ibu", values.ibu);
      payload.append(
        "mulai_masuk",
        moment(values.mulai_masuk).format("DD/MM/YYYY")
      );
      payload.append(
        "mulai_vakum",
        moment(values.mulai_vakum).format("DD/MM/YYYY")
      );
      payload.append("pondokId", values.pondokId);
      payload.append("photo", values.photo);

      dispatch(doCreateGuruRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      // setTimeout(() => {
      //   navigate("/datapengajar", { state: { refresh: true } });
      // }, 3000);
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
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
          Tambah Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <form method="POST" action="#">
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              name="name"
              placeholder="Nama Pengajar"
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">NIU</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.niu}
              onChange={formik.handleChange}
              name="niu"
              id="niu"
              placeholder="Nomor Identik Ustadz/ Ustadzah"
            />
            {formik.touched.niu && formik.errors.niu ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.niu}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">
              Tempat / Tanggal Lahir
            </h1>
            <input
              type="text"
              className="border rounded-md block lg:col-span-1 mr-1 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.tempat}
              onChange={formik.handleChange}
              name="tempat"
              id="tempat"
              placeholder="Tempat"
            />
            <input
              type="date"
              className="border rounded-md block lg:col-span-1 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.datebirth}
              onChange={formik.handleChange}
              name="datebirth"
              id="datebirth"
              placeholder="Tempat / Tanggal Lahir"
            />
            {formik.touched.datebirth && formik.errors.datebirth ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.datebirth}
              </span>
            ) : null}
            {formik.touched.tempat && formik.errors.tempat ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.tempat}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Jenis Kelamin</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender"
              id="gender"
              placeholder="Jenis Kelamin"
            />
            {formik.touched.gender && formik.errors.gender ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.gender}
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Telepon</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              name="telephone"
              id="telephone"
              placeholder="Telepon"
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.telephone}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
            <textarea
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              onChange={formik.handleChange}
              name="address"
              id="address"
              placeholder="Alamat"
            ></textarea>
            {formik.touched.address && formik.errors.address ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.address}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-4">
            <h1 className="block lg:col-span-2 col-span-4">Orang Tua :</h1>
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Ayah</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.ayah}
              onChange={formik.handleChange}
              name="ayah"
              id="ayah"
              placeholder="Nama Ayah"
            />
            {formik.touched.ayah && formik.errors.ayah ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.ayah}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 mt-2 mb-4">
            <h1 className="block lg:col-span-2 col-span-4">Ibu</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.ibu}
              onChange={formik.handleChange}
              name="ibu"
              id="ibu"
              placeholder="Ibu"
            />
            {formik.touched.ibu && formik.errors.ibu ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.ibu}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Mulai Masuk</h1>
            <input
              type="date"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.mulai_masuk}
              onChange={formik.handleChange}
              name="mulai_masuk"
              id="mulai_masuk"
              placeholder="Mulai Masuk"
            />
            {formik.touched.mulai_masuk && formik.errors.mulai_masuk ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.mulai_masuk}
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Mulai Vakum</h1>
            <input
              type="date"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.mulai_vakum}
              onChange={formik.handleChange}
              name="mulai_vakum"
              id="mulai_vakum"
              placeholder="Mulai Vakum"
            />
            {formik.touched.mulai_vakum && formik.errors.mulai_vakum ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.mulai_vakum}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Penempatan</h1>
            <select
              name="pondokId"
              id="pondokId"
              value={formik.values.pondokId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="pondokId"
              class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            >
              <option value="" selected disabled hidden>
                Pilih Rumah Tahfidz
              </option>
              {rumahtahfidzdata.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
            {formik.touched.pondokId && formik.errors.pondokId ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                {formik.errors.pondokId}
              </span>
            ) : null}
          </div>

          <div class="col-span-4 row-span-2 py-2">
            <label className="block text-xs font-medium text-gray-700">
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
                    <div className="flex text-xs text-gray-600 center text-center">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="ml-4" onClick={onClearImage}>
                          Remove
                        </span>
                      </label>
                    </div>
                  </>
                )}

                <div className="text-xs text-gray-600 text-center">
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
                  <span className="my-1 text-xs text-red-600 w-full ml-3">
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
                navigate("/datapengajar", { state: { refresh: true } })
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

export default TambahPengajar;
