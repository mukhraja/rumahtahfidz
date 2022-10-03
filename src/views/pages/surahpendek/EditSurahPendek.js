import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { bacaiqro } from "../../../gambar";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import {
  doCreateIqroSantriRequest,
  doGetIqroSantriByIdRequest,
  doUpdateIqroSantriRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import {
  doGetSurahPendekSantriByIdRequest,
  doUpdateSurahPendekSantriRequest,
} from "../../../reduxsaga/actions/SurahPendekSantri";

const EditSurahPendekSantri = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  console.log(select);

  const { surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSurahPendekSantriByIdRequest(payload));
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

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
    enableReinitialize: true,
    initialValues: {
      namesantri: surahpendeksantridata.length
        ? surahpendeksantridata[0].Santri.name
        : null,
      name: surahpendeksantridata.length ? surahpendeksantridata[0].name : null,
      tgl_selesai: surahpendeksantridata.length
        ? surahpendeksantridata[0].tgl_selesai
        : null,
      ket: surahpendeksantridata.length ? surahpendeksantridata[0].ket : null,
      santriId: surahpendeksantridata.length
        ? surahpendeksantridata[0].Santri.id
        : null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id,
        name: values.name,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
      };

      dispatch(doUpdateSurahPendekSantriRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      setTimeout(() => {
        navigate("/datasurahpendeksantri", { state: { refresh: true } });
      }, 3000);
    },
  });

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Hafalan Iqro
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Nama</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Iqro Ke ..."
            name="namesantri"
            id="namesantri"
            value={formik.values.namesantri}
            disabled
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Iqro</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Iqro Ke ..."
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Tanggal Selesai</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            name="tgl_selesai"
            id="tgl_selesai"
            value={formik.values.tgl_selesai}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Keterangan</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Belum Lancar | Tuntas | Mengulang"
            name="ket"
            id="ket"
            value={formik.values.ket}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
            onClick={() => navigate("/datasurahpendeksantri")}
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

export default EditSurahPendekSantri;
