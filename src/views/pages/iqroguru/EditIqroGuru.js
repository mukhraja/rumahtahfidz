import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { bacaiqro } from "../../../gambar";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import {
  doCreateIqroSantriRequest,
  doGetIqroSantriByIdRequest,
  doUpdateIqroSantriRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import { doGetGuruByIdRequest } from "../../../reduxsaga/actions/Guru";
import {
  doGetIqroGuruByIdRequest,
  doUpdateIqroGuruRequest,
} from "../../../reduxsaga/actions/IqroGuru";
import moment from "moment";
import axios from "axios";
import config from "../../../reduxsaga/config/config";
import { toast, Toaster } from "react-hot-toast";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";

const EditIqroGuru = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  console.log(select);

  const { iqrogurudata } = useSelector((state) => state.iqroGuruState);
  const [iqroid, setIqro] = useState([]);

  useEffect(() => {
    async function fetchiqroid() {
      await axios
        .get(config.domain + "/iqroguru/getid/" + id)
        .then((e) => setIqro(e.data.data));
    }
    fetchiqroid();
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan iqra").required("Masukkan iqra"),
    halaman: Yup.string("Masukkan halaman").required("Masukkan halaman"),
    tgl_selesai: Yup.string("Masukkan tgl selesai").required(
      "Masukkan tgl selesai"
    ),
    ket: Yup.string("Masukkan keterangan").required("Masukkan keterangan"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nameguru: iqroid.length ? iqroid[0].namaguru : null,
      name: iqroid.length ? iqroid[0].name : null,
      halaman: iqroid.length ? iqroid[0].halaman : null,
      tgl_selesai: iqroid.length
        ? moment(iqroid[0].tgl_selesai).format("YYYY-MM-DD")
        : null,
      ket: iqroid.length ? iqroid[0].ket : null,
      guruId: iqroid.length ? iqroid[0].id : null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id,
        name: values.name,
        halaman: values.halaman,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
      };

      const updateiqro = async () => {
        const loadingToast = Alert.loading("Sedang diperbaharui...");
        try {
          await ApiSantri.postData("/iqroguru/update/" + id, payload);
          toast.dismiss(loadingToast);
          Alert.success("Berhasil diperbaharui !");
        } catch (error) {
          toast.dismiss(loadingToast);
          Alert.error(error.data.data);
        }
      };
      updateiqro();

      // setTimeout(() => {
      //   navigate("/dataiqroguru", { state: { refresh: true } });
      // }, 3000);
    },
  });

  const iqro = ["IQRO 1", "IQRO 2", "IQRO 3", "IQRO 4", "IQRO 5", "IQRO 6"];

  const keterangan = ["mengulang", "belum lancar", "selesai"];

  return (
    <div className="">
      <Toaster />
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          Hafalan Iqro
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Ustadz/ah</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Iqro Ke ..."
            name="nameguru"
            id="nameguru"
            value={formik.values.nameguru}
            disabled
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Iqro</h1>
          <select
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="name"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Iqro
            </option>
            {iqro
              .sort(function (a, b) {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((e) => (
                <option value={e}>{e}</option>
              ))}
          </select>
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Halaman</h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            placeholder="Halaman ..."
            name="halaman"
            id="halaman"
            value={formik.values.halaman}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.halaman && formik.errors.halaman ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.halaman}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Tanggal Selesai</h1>
          <input
            type="date"
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
            name="tgl_selesai"
            id="tgl_selesai"
            value={formik.values.tgl_selesai}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tgl_selesai && formik.errors.tgl_selesai ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.tgl_selesai}
            </span>
          ) : null}
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block lg:col-span-2 col-span-4">Keterangan</h1>
          <select
            name="ket"
            id="ket"
            value={formik.values.ket}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="ket"
            class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Keterangan
            </option>
            {keterangan.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          {formik.touched.ket && formik.errors.ket ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.ket}
            </span>
          ) : null}
        </div>
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
            onClick={() => navigate("/dataiqroguru")}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditIqroGuru;
