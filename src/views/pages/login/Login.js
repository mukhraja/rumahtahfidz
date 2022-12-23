import React, { useEffect, useState } from "react";
import { gambardepan, logo, logoapp } from "../../../gambar";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { doSigninRequest } from "../../../reduxsaga/actions/User";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  const dispatch = useDispatch();
  const { message, isLoggedIn } = useSelector((state) => state.userState);
  const { userProfile, isLoading } = useSelector((state) => state.userState);

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
        <div className=" w-2/6 mr-14 hidden md:block">
          <img src={gambardepan} />
        </div>

        <div
          className=" lg:w-96 w-72 bg-white shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-200"
          style={{ backdropFilter: "blur(20px)" }}
        >
          {isLoading ? <LoadingSpinnerLogin /> : ""}
          <div className="px-20 py-32 rounded-md">
            {/* <div class="w-full flex justify-center">
              <img src={logoapp} class=" w-32 mb-8" />
            </div> */}
            <form method="POST" className="text-xs">
              <h1 className="my-2">Email</h1>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
                required
                className=" mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email . . ."
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="mb-2 text-xs text-red-600 w-full italic">
                  {formik.errors.email}
                </span>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="***************"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="mb-2 text-xs text-red-600 w-full italic">
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
          </div>
        </div>
      </div>
    </div>
  );
}
