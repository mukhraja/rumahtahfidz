import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { rumahtahfidz } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import {
  doGetRumahTahfidzByIdRequest,
  doGetRumahTahfidzRequest,
  doUpdateNoFIleRumahTahfidzRequest,
  doUpdateRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import config from "../../../reduxsaga/config/config";
import {
  doGetSantriByIdRequest,
  doUpdateNoFIleSantriRequest,
  doUpdateSantriRequest,
} from "../../../reduxsaga/actions/Santri";

const EditSantri = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan nama santri").required("Masukkan nama santri"),
    nis: Yup.string("Masukkan nomor identik santri").required(
      "Masukkan nomor identik santri"
    ),
    address: Yup.string("Masukkan alamat").required("Masukkan alamat"),
    datebirth: Yup.string("Masukkan tanggal lahir").required(
      "Masukkan tanggal lahir"
    ),
    gender: Yup.string("Masukkan jenis kelamin").required(
      "Masukkan nomor jenis kelamin"
    ),
    education: Yup.string("Masukkan pendidikan").required(
      "Masukkan nomor pendidikan"
    ),
    city: Yup.string("Masukkan kota").required("Masukkan kota"),
    province: Yup.string("Masukkan province").required("Masukkan provinsi"),
    parent: Yup.string("Masukkan nama orang tua").required(
      "Masukkan nama orang tua"
    ),
    telephone: Yup.string("Masukkan nomor telephone").required(
      "Masukkan nomor telephone"
    ),
    tgl_masuk: Yup.string("Pilih Tanggal Masuk").required(
      "Pilih Tanggal Masuk"
    ),
    pondokId: Yup.string("Pilih Pondok ID").required("Pilih Pondok ID"),
    photo: Yup.string("Masukkan nama ibu").required("Upload Photo"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: santridata.length ? santridata[0].name : null,
      nis: santridata.length ? santridata[0].nis : null,
      address: santridata.length ? santridata[0].address : null,
      datebirth: santridata.length ? santridata[0].datebirth : null,
      gender: santridata.length ? santridata[0].gender : null,
      education: santridata.length ? santridata[0].education : null,
      city: santridata.length ? santridata[0].city : null,
      province: santridata.length ? santridata[0].province : null,
      parent: santridata.length ? santridata[0].parent : null,
      telephone: santridata.length ? santridata[0].telephone : null,
      tgl_masuk: santridata.length ? santridata[0].tgl_masuk : null,
      pondokId: santridata.length ? santridata[0].pondokId : null,
      photo: santridata.length ? santridata[0].photo : undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (uploaded === true) {
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
        payload.append("id", id);
        dispatch(doUpdateSantriRequest(payload));
        toast.success("Data berhasil diupdate...");
        // setTimeout(() => {
        //   navigate("/datsantri");
        // }, 3000);
      } else {
        const payload = {
          id,
          name: values.name,
          nis: values.nis,
          address: values.address,
          datebirth: values.datebirth,
          gender: values.gender,
          education: values.education,
          city: values.city,
          province: values.province,
          parent: values.parent,
          telephone: values.telephone,
          tgl_masuk: values.tgl_masuk,
          pondokId: values.pondokId,
        };
        dispatch(doUpdateNoFIleSantriRequest(payload));
        toast.success("Data berhasil diupdate...");
        setTimeout(() => {
          navigate("/datasantri");
        }, 3000);
      }
    },
  });

  const [uploaded, setUploaded] = useState(false);
  const [photo, setPhoto] = useState();

  useEffect(() => {
    let img = config.urlImage + "/" + formik.values.photo;
    setPhoto(img);
  }, [santridata]);

  const uploadOnChange = (name) => (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onload = () => {
      formik.setFieldValue("photo", file);
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
    setUploaded(true);
  };

  const onClearImage = (event) => {
    event.preventDefault();
    setUploaded(false);
    setPhoto(null);
  };
  return (
    <div className="">
      <form method="POST" action="#">
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Edit Santri {formik.values.name}
          </h1>
          <img
            src={photo}
            className="rounded-full bg-red-400 bg-cover w-20 h-20"
          />
        </div>
        <div className="m-4 bg-white p-4 rounded-md font-poppins">
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Nama</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1"
              name="name"
              id="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.name}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">NIS</h1>
            <input
              id="nis"
              name="nis"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.nis}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.nis && formik.errors.nis ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.nis}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Alamat</h1>
            <textarea
              id="address"
              name="address"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.address && formik.errors.address ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.address}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Tempat / Tanggal Lahir</h1>
            <input
              type="date"
              id="datebirth"
              name="datebirth"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.datebirth}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.datebirth && formik.errors.datebirth ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.datebirth}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Jenis Kelamin</h1>
            <input
              id="gender"
              name="gender"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.gender && formik.errors.gender ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.gender}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Pendidikan</h1>
            <input
              id="education"
              name="education"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.education}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.education && formik.errors.education ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.education}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Kota</h1>
            <input
              id="city"
              name="city"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.city}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.city && formik.errors.city ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.city}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Provinsi</h1>
            <input
              id="province"
              name="province"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.province}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.province && formik.errors.province ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.province}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Orang Tua / Wali</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1"
              id="parent"
              name="parent"
              value={formik.values.parent}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.parent && formik.errors.parent ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.parent}
              </span>
            ) : null}
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">No. Telepon</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1"
              id="telephone"
              name="telephone"
              value={formik.values.telephone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <span className="my-1 col-span-2 text-sm text-red-600 w-full ml-3">
                {formik.errors.telephone}
              </span>
            ) : null}
          </div>

          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Tanggal Masuk</h1>
            <input
              type="date"
              className="border rounded-md block col-span-2 pl-2 py-1"
              id="tgl_masuk"
              name="tgl_masuk"
              value={formik.values.tgl_masuk}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
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
            <label className="block font-medium text-gray-700 text-xs">
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
                      src={photo}
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

                <div className="text-gray-600 text-center text-xs">
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
              </div>
            </div>
          </div>
          <div className="z-30">
            <ToastContainer autoClose={2000} />
          </div>

          <div>
            <button
              className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
              type="submit"
              onClick={formik.handleSubmit}
            >
              SIMPAN
            </button>
            <button
              className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
              onClick={() => navigate("/datasantri")}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSantri;