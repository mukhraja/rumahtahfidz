import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { user } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../reduxsaga/config/config";
import {
  doGetUserByIdRequest,
  doUpdateNoFIleUserRequest,
  doUpdateUserRequest,
} from "../../../reduxsaga/actions/User";
import { doGetRoleRequest } from "../../../reduxsaga/actions/Role";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";

const EditAdmin = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userdata } = useSelector((state) => state.userState);
  const { roledata } = useSelector((state) => state.roleState);
  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

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

  useEffect(() => {
    const payload = { id };
    dispatch(doGetUserByIdRequest(payload));
    dispatch(doGetRoleRequest());
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userdata.length ? userdata[0].name : null,
      email: userdata.length ? userdata[0].email : null,
      password: "",
      telephone: userdata.length ? userdata[0].telephone : null,
      datebirth: userdata.length ? userdata[0].datebirth : null,
      address: userdata.length ? userdata[0].address : null,
      age: userdata.length ? userdata[0].age : null,
      gender: userdata.length ? userdata[0].gender : null,
      parent: userdata.length ? userdata[0].parent : null,
      roleId: userdata.length ? userdata[0].roleId : null,
      photo: userdata.length ? userdata[0].photo : null,
    },
    onSubmit: async (values) => {
      if (uploaded === true) {
        let payload = new FormData();
        payload.append("id", id);
        payload.append("name", values.name);
        payload.append("email", values.email);
        payload.append("password", values.password);
        payload.append("telephone", values.telephone);
        payload.append("address", values.address);
        payload.append("datebirth", values.datebirth);
        payload.append("age", values.age);
        payload.append("gender", values.gender);
        payload.append("parent", values.parent);
        payload.append("roleId", values.roleId);
        payload.append("photo", values.photo);
        dispatch(doUpdateUserRequest(payload));
        // setTimeout(() => {
        //   navigate("/datsantri");
        // }, 3000);
      } else {
        const payload = {
          id,
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

        dispatch(doUpdateNoFIleUserRequest(payload));
        // setTimeout(() => {
        //   navigate("/datauser");
        // }, 3000);
      }
    },
  });

  useEffect(() => {
    let img = config.urlImageUser + "/" + formik.values.photo;
    setPhoto(img);
  }, [userdata]);

  return (
    <div className="">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Edit Pengguna
        </h1>
        <img
          src={photo}
          className="rounded-full bg-white bg-cover w-20 h-20 shadow-md"
        />
      </div>

      <div className="m-4 bg-white p-4 rounded-md font-poppins">
        <form method="PUT" action="#">
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              name="name"
              id="name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Email</h1>
            <input
              id="email"
              name="email"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Password</h1>
            <input
              id="password"
              name="password"
              type="password"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
            <textarea
              id="address"
              name="address"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">
              Tempat / Tanggal Lahir
            </h1>
            <input
              type="date"
              id="datebirth"
              name="datebirth"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.datebirth}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Jenis Kelamin</h1>
            <input
              id="gender"
              name="gender"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.gender}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">Umur</h1>
            <input
              id="age"
              name="age"
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              value={formik.values.age}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block lg:col-span-2 col-span-4">No. Telepon</h1>
            <input
              className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
              id="telephone"
              name="telephone"
              value={formik.values.telephone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
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
              <option value="8b273d68-fe09-422d-a660-af3d8312f884">
                Admin
              </option>
            </select>
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
              <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
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
        </form>

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
            onClick={() => navigate(-1)}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAdmin;
