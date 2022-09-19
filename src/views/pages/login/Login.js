import React, { useState } from "react";
import { Button } from "../../components";
import { gambardepan, logo } from "../../../gambar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:2000/user";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded, charset=UTF-8",
    };

    const urlEncodedBody = new URLSearchParams();
    urlEncodedBody.append("email", email);
    urlEncodedBody.append("password", password);

    await axios
      .post(url + "/login", urlEncodedBody, headers)
      .then((response) => {
        const token = response.data.data;
        console.log(token);
        localStorage.setItem("token", token);
        console.log("Login Berhasil");
        navigate("dashboard");
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  return (
    <div className=" bg-gray-50 font-poppins">
      <div className="flex justify-center h-screen items-center">
        <div className=" w-2/5 mr-6">
          <img src={gambardepan} />
        </div>

        <div className="">
          <form
            onSubmit={loginHandler}
            className="shadow-lg px-20 py-10 rounded-md"
          >
            <div className="w-full flex justify-center">
              <img src={logo} className=" w-32 mb-8" />
            </div>
            <h1 className="mb-2">Email</h1>
            <input
              className=" shadow-sm mb-4 py-2 pl-3 rounded-md text-sm w-60"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              placeholder="Email . . ."
            />
            <h1 className="mb-2">Password</h1>
            <input
              className=" shadow-sm mb-4 py-2 pl-3 rounded-md text-sm w-60"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type={"password"}
            />
            <Button button="Login" />
            <h2 className="text-xs text-center py-4">
              Tidak Punya Akun ?{" "}
              <b className=" text-green-500">Daftar disini</b>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}
