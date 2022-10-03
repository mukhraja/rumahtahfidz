import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import {
  doCreateRumahTahfidzRequest,
  doGetRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Tambahrumahtahfiz = () => {
  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string("Enter Job Title").required("Title is required"),
    address: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
    nit: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
    telephone: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
    chief: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
    photo: Yup.string("Please enter Primary Skill").required(
      "Primary Skill is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      nit: "",
      address: "",
      telephone: "",
      chief: "",
      photo: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("nit", values.nit);
      payload.append("address", values.address);
      payload.append("telephone", values.telephone);
      payload.append("chief", values.chief);
      payload.append("photo", values.photo);

      dispatch(doCreateRumahTahfidzRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      setTimeout(() => {
        navigate("/datarumahtahfiz", { state: { refresh: true } });
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
          Tambah Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
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
              placeholder="Nama Rumah Pondok Tahfidz"
            />
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">NIT</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.nit}
              onChange={formik.handleChange}
              name="nit"
              id="nit"
              placeholder="Nomor Identik Rumah Pondok Tahfidz"
            />
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Alamat</h1>
            <textarea
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              onChange={formik.handleChange}
              name="address"
              id="address"
              placeholder="Alamat Rumah Pondok Tahfidz"
            >
              {formik.values.address}
            </textarea>
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">No. Telepon</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.telephone}
              onChange={formik.handleChange}
              name="telephone"
              id="telephone"
              placeholder="Nomor Telepon Rumah Pondok Tahfidz"
            />
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block col-span-2">Nama Kepala Tahfidz</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
              value={formik.values.chief}
              onChange={formik.handleChange}
              name="chief"
              id="chief"
              placeholder="Kepala Rumah Pondok Tahfidz"
            />
          </div>
          {/* <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Foto Tahfidz</h1>
          <span>:</span>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            id="photo"
            type="file"
            accept="image/*"
            onChange={uploadOnChange("file")}
          />
        </div> */}
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
              onClick={() => navigate("/datarumahtahfiz")}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tambahrumahtahfiz;
