import React, { useEffect, useState } from "react";
import axios from "axios";
import { database, rumahtahfidz } from "../../../gambar";
import fileDownload from "js-file-download";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../reduxsaga/config/config";
import { useFormik } from "formik";
import * as Yup from "yup";

const Database = () => {
  const onExport = () => {
    axios
      .get(config.domain + "/database", {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "rumahtahfidz.sql");
      });
    toast.success("Data berhasil di Backup...");
  };

  // const changeHandler = (event) => {
  //   setData(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   const form = new FormData();
  //   form.append("database", data);

  //   const response = await axios
  //     .post(config.domain + "/database/import", form, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response);
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response);
  //     });

  //   event.preventDefault();
  // };

  // const [data, setData] = useState();

  // console.log("ini data", data);

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Database
        </h1>
        <img src={database} className="h-20" />
      </div>
      <div className="mt-4 p-4 mx-4 bg-white rounded-lg shadow-lg font-poppins text-xs">
        {/* <div className="grid grid-cols-4 gap-4 py-2">
          <h1 className="col-span-2 py-2">Restore</h1>

          <div className="flex col-span-2">
            <input
              id="database"
              name="database"
              type="file"
              className=" col-span-2 border rounded p-1"
              onChange={changeHandler}
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-green-400 rounded-sm shadow-md px-4 text-white mx-2 w-full"
            >
              Restore
            </button>
          </div>
        </div> */}
        <div className="grid grid-cols-4 py-4 gap-4">
          <h1 className="col-span-2 py-2">Backup</h1>
          <button
            type="button"
            onClick={onExport}
            className="bg-blue-400 rounded-sm shadow-md p-2 col-span-2 text-white"
          >
            Backup
          </button>
        </div>
      </div>
      <div className="mt-6 px-4"></div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Database;
