import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { doGetUserByIdRequest } from "../../../reduxsaga/actions/User";
import config from "../../../reduxsaga/config/config";

const InfoUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userdata, userProfile } = useSelector((state) => state.userState);

  useEffect(() => {
    const payload = { id };
    dispatch(doGetUserByIdRequest(payload));
  }, []);

  return (
    <div className="">
      {userdata.map((e) => (
        <div>
          <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
            <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
              Data {e.name}
            </h1>
            <img
              src={config.urlImageUser + "/" + e.photo}
              className="h-20 rounded-full"
            />
          </div>
          <div className="m-4 bg-white p-4 rounded-md font-poppins">
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Nama</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.name}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Email</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.email}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Age</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.age} Tahun</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs">
              <h1 className="block lg:col-span-2 col-span-4">Tanggal Lahir</h1>
              <h1 className="block lg:col-span-2 col-span-4">
                <Moment format="DD - MMMM - YYYY">{e.datebirth}</Moment>
              </h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Gender</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.gender}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs ">
              <h1 className="block lg:col-span-2 col-span-4">Alamat</h1>
              <h1 className="block lg:col-span-5 col-span-4">{e.address}</h1>
            </div>
            <div className="grid grid-cols-8 p-2 text-xs bg-gray-200">
              <h1 className="block lg:col-span-2 col-span-4">Telepon</h1>
              <h1 className="block lg:col-span-2 col-span-4">{e.telephone}</h1>
            </div>
            <div className="py-4 font-poppins">
              {userProfile.role !== "1a2832f9-ceb7-4ff9-930a-af176c88dcc5" &&
              userProfile.role !== "1b864518-299d-469c-b270-4d4b9d5b120f" ? (
                <button
                  className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm text-xs"
                  onClick={() => navigate("/datauser/edit/" + id)}
                >
                  Edit
                </button>
              ) : (
                ""
              )}
              <button
                className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2 text-xs"
                onClick={() => navigate(-1)}
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoUser;
