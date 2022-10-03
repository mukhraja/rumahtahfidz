import React, { useEffect, useState } from "react";
import { gambardepan, logo } from "../../../gambar";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doSigninRequest } from "../../../reduxsaga/actions/User";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  const dispatch = useDispatch();
  const { message, isLoggedIn } = useSelector((state) => state.userState);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [isLoggedIn]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().min(5).required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let payload = {
        email: values.email,
        password: values.password,
      };

      dispatch(doSigninRequest(payload));
    },
  });

  return (
    <div className=" bg-gray-50 font-poppins">
      <div className="flex justify-center h-screen items-center">
        <div className=" w-2/6 mr-14">
          <img src={gambardepan} />
        </div>

        <div className=" w-96">
          <div className="shadow-lg px-20 py-10 rounded-md">
            <div className="w-full flex justify-center">
              <img src={logo} className=" w-32 mb-8" />
            </div>
            <form method="POST">
              <h1 className="mb-2">Email</h1>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                className="shadow-sm mb-2 py-2 pl-3 rounded-md text-sm w-full"
                placeholder="Email . . ."
              />
              {formik.touched.email && formik.errors.email ? (
                <sapn className="my-2 text-sm text-red-600 w-full">
                  {formik.errors.email}
                </sapn>
              ) : null}
              <h1 className="my-2">Password</h1>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="current-password"
                required
                className=" shadow-sm mb-2 py-2 pl-3 rounded-md text-sm w-full"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="mb-2 text-sm text-red-600 w-full">
                  {formik.errors.password}
                </span>
              ) : null}
              <button
                className=" bg-green-600 p-2  my-2 rounded-md shadow-sm text-white w-full hover:bg-green-700"
                onClick={formik.handleSubmit}
                type="button"
              >
                Login
              </button>
            </form>
            {message ? (
              <h1 className="my-2 text-sm text-red-600">{message}</h1>
            ) : null}
            <h2 className="text-xs text-center py-4">
              Tidak Punya Akun ?{" "}
              <b className=" text-green-500">Daftar disini</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
