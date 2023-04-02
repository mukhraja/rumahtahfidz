import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { user } from "../../../gambar";
import Alert from "../../../utils/Alert";
import ApiSantri from "../../../api/ApiSantri";
import { toast } from "react-hot-toast";

const Options = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [detailpondok, setDetailpondok] = useState([]);

  useEffect(() => {
    const fetchdetailmasterpondok = async () => {
      try {
        const data = await ApiSantri.getData(
          "/masterpondok/getbyid/?masterpondokId=" + id
        );
        setDetailpondok(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };

    fetchdetailmasterpondok();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      total_admin: detailpondok.length
        ? detailpondok[0].total_admin_cabang
        : null,
    },
    onSubmit: async (values) => {
      const payload = {
        total_admin: values.total_admin,
      };

      const updatetotaladmin = async () => {
        const loadingToast = Alert.loading("Sedang diupdate...");

        try {
          await ApiSantri.postData(
            "/masterpondok/updatetotaladmin/" + id,
            payload
          );
          toast.dismiss(loadingToast);
          Alert.success("Berhasil diupdate");
        } catch (error) {
          toast.dismiss(loadingToast);
          Alert.error(error.data.data);
        }
      };
      updatetotaladmin();
    },
  });

  return (
    <div>
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
          OPTION
        </h1>
        <img src={user} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins">
        <form method="POST" action="#"></form>
        <div className="grid grid-cols-8 my-2 text-xs">
          <h1 className="block lg:col-span-2 col-span-4">
            Jumlah Admin Cabang
          </h1>
          <input
            className="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1"
            type="number"
            name="total_admin"
            id="total_admin"
            value={formik.values.total_admin}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.total_admin && formik.errors.total_admin ? (
            <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
              {formik.errors.total_admin}
            </span>
          ) : null}
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
            KEMBALI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
