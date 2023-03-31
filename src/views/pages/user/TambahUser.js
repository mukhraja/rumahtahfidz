import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../../../gambar";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import config from "../../../reduxsaga/config/config";
import axios from "axios";
import Select from "react-select";
import { v4 } from "uuid";
import Alert from "../../../utils/Alert";
import ApiSantri from "../../../api/ApiSantri";
import { toast, Toaster } from "react-hot-toast";

const TambahUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nomorid = v4();

  const { userProfile } = useSelector((state) => state.userState);

  const [uploaded, setUploaded] = useState(false);
  const [photo, setPhoto] = useState();
  const [previewImg, setPreviewImg] = useState();
  const [selected, setSelected] = useState([]);
  const [dropdown, setDropdown] = useState([]);
  const [pondok, setPondok] = useState([]);
  const [role, setRole] = useState([]);
  const [result, setResult] = useState();

  useEffect(() => {
    if (userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883") {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId="
          );
          setPondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    } else {
      const fetchlistpondok = async () => {
        try {
          const data = await ApiSantri.getData(
            "/pondok/getlist/?masterpondokId=" + userProfile.masterpondokId
          );
          setPondok(data);
        } catch (error) {
          Alert.error("Periksa Koneksi Jaringan");
        }
      };
      fetchlistpondok();
    }

    const fetchroleall = async () => {
      try {
        const data = await ApiSantri.getData("/role/getroles");
        setRole(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };
    fetchroleall();
  }, []);

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

  function handleSelect(data) {
    // console.log(data.map((e) => e.label));
    setSelected(data);
  }

  console.log("ini selected", selected);
  const validationSchema = Yup.object().shape({
    name: Yup.string("Masukkan nama").required("Masukkan nama"),
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
      pondokId: "",
      id: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (
        uploaded === true &&
        formik.values.roleId === "1a2832f9-ceb7-4ff9-930a-af176c88dcc5"
      ) {
        let payload = new FormData();
        payload.append("name", values.name);
        payload.append("email", values.email);
        payload.append("password", values.password);
        payload.append("telephone", values.telephone);
        payload.append("address", values.address);
        payload.append(
          "datebirth",
          moment(values.datebirth).format("YYYY-MM-DD")
        );
        payload.append("age", values.age);
        payload.append("gender", values.gender);
        payload.append("roleId", values.roleId);
        payload.append("pondokId", values.pondokId);
        payload.append("id", nomorid);
        payload.append("photo", values.photo);

        const tambahuser = async () => {
          const loadingToast = Alert.loading("Sedang menambahkan...");
          try {
            const data = await ApiSantri.postData(
              "/user/createusersantri",
              payload
            );

            setResult(data);

            toast.dismiss(loadingToast);
            Alert.success("Berhasil ditambahkan !");
          } catch (error) {
            toast.dismiss(loadingToast);
            Alert.error(error.data.data);
          }
        };
        tambahuser();

        if (result == "success") {
          selected.map((e) => {
            ApiSantri.postData("/usersantri/create", {
              user_id: nomorid,
              santri_id: e.value,
            });
          });
        }
        // setTimeout(() => {
        //   navigate("/datsantri");
        // }, 3000);
      } else if (
        uploaded === true &&
        formik.values.roleId !== "1a2832f9-ceb7-4ff9-930a-af176c88dcc5"
      ) {
        let payload = new FormData();
        payload.append("name", values.name);
        payload.append("email", values.email);
        payload.append("password", values.password);
        payload.append("telephone", values.telephone);
        payload.append("address", values.address);
        payload.append(
          "datebirth",
          moment(values.datebirth).format("YYYY-MM-DD")
        );
        payload.append("age", values.age);
        payload.append("gender", values.gender);
        payload.append("roleId", values.roleId);
        payload.append("pondokId", values.pondokId);
        payload.append("id", nomorid);
        payload.append("photo", values.photo);

        const tambahuser = async () => {
          const loadingToast = Alert.loading("Sedang menambahkan...");
          try {
            await ApiSantri.postData("/user/createuserfile", payload);
            toast.dismiss(loadingToast);
            Alert.success("Berhasil ditambahkan !");
          } catch (error) {
            toast.dismiss(loadingToast);
            Alert.error(error.data.data);
          }
        };
        tambahuser();
      } else if (
        uploaded !== true &&
        formik.values.roleId === "1a2832f9-ceb7-4ff9-930a-af176c88dcc5"
      ) {
        const payload = {
          id: nomorid,
          name: values.name,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
          datebirth: moment(values.datebirth).format("YYYY-MM-DD"),
          address: values.address,
          age: values.age,
          gender: values.gender,
          roleId: values.roleId,
          pondokId: values.pondokId,
        };

        const tambahuser = async () => {
          const loadingToast = Alert.loading("Sedang menambahkan...");
          try {
            const data = await ApiSantri.postData(
              "/user/createusersantrinofile",
              payload
            );
            setResult(data);
            toast.dismiss(loadingToast);
            Alert.success("Berhasil ditambahkan !");
          } catch (error) {
            toast.dismiss(loadingToast);
            Alert.error(error.data.data);
          }
        };
        tambahuser();

        if (result == "success") {
          selected.map((e) => {
            ApiSantri.postData("/usersantri/create", {
              user_id: nomorid,
              santri_id: e.value,
            });
          });
        }
      } else {
        const payload = {
          name: values.name,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
          datebirth: moment(values.datebirth).format("YYYY-MM-DD"),
          address: values.address,
          age: values.age,
          gender: values.gender,
          roleId: values.roleId,
          pondokId: values.pondokId,
        };

        const tambahuser = async () => {
          const loadingToast = Alert.loading("Sedang menambahkan...");
          try {
            await ApiSantri.postData("/user/createuser", payload);
            toast.dismiss(loadingToast);
            Alert.success("Berhasil ditambahkan !");
          } catch (error) {
            toast.dismiss(loadingToast);
            Alert.error(error.data.data);
          }
        };
        tambahuser();

        // setTimeout(() => {
        //   navigate("/datauser", { state: { refresh: true } });
        // }, 3000);
      }
    },
  });

  useEffect(() => {
    const fetchlistpondok = async () => {
      try {
        const data = await ApiSantri.getData(
          "/santri/getdropdownId/" + formik.values.pondokId
        );
        setDropdown(data);
      } catch (error) {
        console.log("Belum di pilih");
      }
    };
    fetchlistpondok();
  }, [formik.values.pondokId]);

  return (
    <div className="">
      <Toaster />
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
              <select
                name="gender"
                id="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="gender"
                class="border rounded-md block lg:col-span-2 col-span-4 pl-2 py-1 placeholder:text-xs"
              >
                <option value="" selected disabled hidden>
                  Pilih Jenis Kelamin
                </option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <span className="my-1 lg:col-span-2 col-span-4 text-xs text-red-600 w-full ml-3">
                  {formik.errors.gender}
                </span>
              ) : null}
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
              {pondok.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
            {formik.touched.pondokId && formik.errors.pondokId ? (
              <span className="my-1 lg:col-span-2 col-span-4 text-sm text-red-600 w-full ml-3">
                {formik.errors.pondokId}
              </span>
            ) : null}
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
              {userProfile.role == "8b273d68-fe09-422d-a660-af3d8312f883" ? (
                <option value="8b273d68-fe09-422d-a660-af3d8312f884">
                  Admin
                </option>
              ) : (
                role
                  .filter(
                    (e) =>
                      e.id !== "8b273d68-fe09-422d-a660-af3d8312f883" &&
                      e.id !== "8b273d68-fe09-422d-a660-af3d8312f884"
                  )
                  .map((e) => <option value={e.id}>{e.name}</option>)
              )}
            </select>
          </div>

          {formik.values.roleId === "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" ? (
            <div className="grid grid-cols-8 my-2">
              <h1 className="block lg:col-span-2 col-span-4">Santri</h1>
              <Select
                className="block lg:col-span-2 col-span-4"
                onChange={handleSelect}
                isSearchable={true}
                options={dropdown}
                value={selected}
                placeholder="Pilih Santri"
                isMulti
              />
            </div>
          ) : (
            ""
          )}

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
            onClick={() => navigate("/datauser", { state: { refresh: true } })}
          >
            KEMBALI
          </button>
        </div>
      </div>
    </div>
  );
};

export default TambahUser;
