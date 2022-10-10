import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { rumahtahfidz } from "../../../gambar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  doGetRumahTahfidzByIdRequest,
  doUpdateNoFIleRumahTahfidzRequest,
  doUpdateRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import config from "../../../reduxsaga/config/config";

const Editrumahtahfiz = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetRumahTahfidzByIdRequest(payload));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: rumahtahfidzdata.length ? rumahtahfidzdata[0].name : null,
      nit: rumahtahfidzdata.length ? rumahtahfidzdata[0].nit : null,
      address: rumahtahfidzdata.length ? rumahtahfidzdata[0].address : null,
      telephone: rumahtahfidzdata.length ? rumahtahfidzdata[0].telephone : null,
      chief: rumahtahfidzdata.length ? rumahtahfidzdata[0].chief : null,
      photo: rumahtahfidzdata.length ? rumahtahfidzdata[0].photo : undefined,
    },
    onSubmit: async (values) => {
      if (uploaded === true) {
        let payload = new FormData();
        payload.append("name", values.name);
        payload.append("nit", values.nit);
        payload.append("address", values.address);
        payload.append("telephone", values.telephone);
        payload.append("chief", values.chief);
        payload.append("photo", values.photo);
        payload.append("id", id);
        dispatch(doUpdateRumahTahfidzRequest(payload));
        toast.success("Data berhasil diupdate...");
        setTimeout(() => {
          navigate("/datarumahtahfiz");
        }, 3000);
      } else {
        const payload = {
          id,
          name: values.name,
          nit: values.nit,
          address: values.address,
          telephone: values.telephone,
          chief: values.chief,
        };
        dispatch(doUpdateNoFIleRumahTahfidzRequest(payload));
        toast.success("Data berhasil diupdate...");
        setTimeout(() => {
          navigate("/datarumahtahfiz");
        }, 3000);
      }
    },
  });

  const [uploaded, setUploaded] = useState(false);
  const [photo, setPhoto] = useState();

  useEffect(() => {
    let img = config.urlImage + "/" + formik.values.photo;
    setPhoto(img);
  }, [rumahtahfidzdata]);

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
    <div className=" overflow-hidden">
      <form method="POST" action="#">
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Edit Rumah Tahfidz
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
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">NIT</h1>
            <input
              id="nit"
              name="nit"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.nit}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Alamat</h1>
            <input
              id="address"
              name="address"
              className="border rounded-md block col-span-2 pl-2 py-1"
              value={formik.values.address}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
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
          </div>
          <div className="grid grid-cols-8 my-2 text-xs">
            <h1 className="block col-span-2">Nama Kepala Tahfidz</h1>
            <input
              className="border rounded-md block col-span-2 pl-2 py-1"
              id="chief"
              name="chief"
              value={formik.values.chief}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
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
              onClick={() => navigate("/datarumahtahfiz")}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editrumahtahfiz;
