import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  doCreateSantriRequest,
  doGetSantriRequest,
} from "../../../reduxsaga/actions/Santri";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import {
  doCreateUserNoFileRequest,
  doCreateUserRequest,
} from "../../../reduxsaga/actions/User";
import { doGetRoleRequest } from "../../../reduxsaga/actions/Role";

const TambahUser = () => {
  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
    dispatch(doGetRoleRequest());
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { roledata } = useSelector((state) => state.roleState);

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

  const [uploaded, setUploaded] = useState(false);
  const [photo, setPhoto] = useState();
  const [previewImg, setPreviewImg] = useState();

  const validationSchema = Yup.object().shape({
    name: Yup.string("Enter Job Title").required("Title is required"),
    // address: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // nis: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // telephone: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // chief: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // photo: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      telephone: "",
      datebirth: "",
      address: "",
      age: "",
      gender: "",
      roleId: "",
      photo: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (uploaded === true) {
        let payload = new FormData();
        payload.append("name", values.name);
        payload.append("email", values.email);
        payload.append("password", values.address);
        payload.append("telephone", values.telephone);
        payload.append("address", values.address);
        payload.append("datebirth", values.datebirth);
        payload.append("age", values.age);
        payload.append("gender", values.gender);
        payload.append("parent", values.parent);
        payload.append("roleId", values.roleId);
        payload.append("photo", values.photo);
        dispatch(doCreateUserRequest(payload));
        toast.success("Data berhasil ditambbahkan...");
        // setTimeout(() => {
        //   navigate("/datsantri");
        // }, 3000);
      } else {
        const payload = {
          name: values.name,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
          datebirth: values.datebirth,
          address: values.address,
          age: values.age,
          gender: values.gender,
          parent: values.parent,
          roleId: values.roleId,
        };

        dispatch(doCreateUserNoFileRequest(payload));
        toast.success("Data berhasil ditambahkan...");

        // setTimeout(() => {
        //   navigate("/datauser", { state: { refresh: true } });
        // }, 3000);
      }
    },
  });

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Tambah Pengguna
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-sm">
        <form method="POST" action="#">
          <div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
              <input
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                value={formik.values.name}
                onChange={formik.handleChange}
                id="name"
                name="name"
                placeholder="Nama user"
              />
            </div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Email</h1>
              <input
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email"
                name="email"
                placeholder="Email . . ."
              />
            </div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Password</h1>
              <input
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                value={formik.values.password}
                onChange={formik.handleChange}
                id="password"
                name="password"
                placeholder="Password . . ."
              />
            </div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
              <textarea
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                onChange={formik.handleChange}
                name="address"
                id="address"
                placeholder="Alamat"
              >
                {formik.values.address}
              </textarea>
            </div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">
                Tempat / Tanggal Lahir
              </h1>
              <input
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                type="date"
                value={formik.values.datebirth}
                onChange={formik.handleChange}
                name="datebirth"
                id="datebirth"
                placeholder="Tempat / Tanggal Lahir"
              />
            </div>
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Umur</h1>
              <input
                className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
                id="age"
                placeholder="umur"
              />
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
            </div>
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
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Parent</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              value={formik.values.parent}
              onChange={formik.handleChange}
              name="parent"
              id="parent"
              placeholder="Parent"
            />
          </div>
          <div className="grid grid-cols-8 my-2">
            <h1 className="block lg:col-span-2 col-span-4">Role</h1>
            <select
              name="roleId"
              id="roleId"
              value={formik.values.roleId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="roleId"
              class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            >
              <option value="" selected disabled hidden>
                Pilih Role
              </option>
              {roledata.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
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
              onClick={() =>
                navigate("/datauser", { state: { refresh: true } })
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

export default TambahUser;
