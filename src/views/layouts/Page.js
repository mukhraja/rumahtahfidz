import React, { useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Logo from "../../gambar/logo.png";
import {
  ArrowNarrowLeftIcon,
  ArrowsExpandIcon,
  ArrowSmLeftIcon,
  BookOpenIcon,
  CogIcon,
  DatabaseIcon,
  FolderIcon,
  FolderOpenIcon,
  HomeIcon,
  LockOpenIcon,
  QrcodeIcon,
  RewindIcon,
  SaveIcon,
  ServerIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { doSignoutRequest } from "../../reduxsaga/actions/User";

export const Page = (props) => {
  const [active, setActive] = useState(false);
  const [hafalan, setHafalan] = useState(false);
  const [laporan, setLaporan] = useState(false);
  const [subHafalan, setSubHafalan] = useState(false);
  const [subHafalana, setSubHafalana] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.userState);

  const aktifkan = () => {
    setActive(!active);
  };

  const hafalkan = () => {
    setHafalan(!hafalan);
  };
  const laporkan = () => {
    setLaporan(!laporan);
  };
  const getsubHafalan = () => {
    setSubHafalan(!subHafalan);
  };
  const getsubHafalana = () => {
    setSubHafalana(!subHafalana);
  };

  const { pathname } = useLocation();

  const onSignOut = () => {
    dispatch(doSignoutRequest());
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 overflow-y-auto">
      <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white">
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <img className=" w-20" src={Logo} alt="logo.jpg" />
          </div>
        </div>
        <div className="sidebar-content px-4 py-6 font-poppins">
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <Link
                to="dashboard"
                className={
                  pathname === "/dashboard"
                    ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                    : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                }
              >
                <span className="text-lg text-gray-700">
                  <HomeIcon className="w-5" />
                </span>
                <span className="ml-3 font-semibold">Dashboard</span>
              </Link>
            </li>
            {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ||
            userProfile.role === "eac8c1bf-86ee-4857-b8e9-c7e68691041b" ? (
              <li className="my-px">
                <div
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                  onClick={aktifkan}
                >
                  <span className="text-lg text-gray-700">
                    <DatabaseIcon className="w-5" />
                  </span>
                  <div className="ml-3 font-semibold">Master Data</div>
                </div>
                {active ? (
                  <ul className="font-semibold relative left-10">
                    <li
                      className={
                        pathname === "/datarumahtahfiz"
                          ? "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datarumahtahfiz">Rumah Tahfidz</Link>
                    </li>
                    <li
                      className={
                        pathname === "/datapengajar"
                          ? "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datapengajar">Pengajar</Link>
                    </li>
                    <li
                      className={
                        pathname === "/datasantri"
                          ? "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datasantri">Santri</Link>
                    </li>
                  </ul>
                ) : null}
              </li>
            ) : null}

            {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ? (
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                  onClick={hafalkan}
                >
                  <span className="text-lg text-gray-700">
                    <BookOpenIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Hafalan</span>
                </a>
              </li>
            ) : (
              ""
            )}
            {hafalan ? (
              <ul className="font-semibold relative left-5">
                <li className="py-2 flex" onClick={getsubHafalan}>
                  <FolderOpenIcon className="w-5 mr-2" />
                  <h1>Santri</h1>
                </li>
                {subHafalan ? (
                  <ul className="font-semibold relative left-5">
                    <li
                      className={
                        pathname === "/dataiqrosantri"
                          ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="dataiqrosantri">Iqro</Link>
                    </li>
                    <li
                      className={
                        pathname === "/datasurahpendeksantri"
                          ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datasurahpendeksantri">Juz 30</Link>
                    </li>
                    <li
                      className={
                        pathname === "/dataalquransantri"
                          ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                          : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                      }
                    >
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="dataalquransantri">Al - Qur'an</Link>
                    </li>
                  </ul>
                ) : null}
                <li className="py-2 flex" onClick={getsubHafalana}>
                  <FolderOpenIcon className="w-5 mr-2" />
                  <h1>Ustadzah</h1>
                </li>
                {subHafalana ? (
                  <ul className="font-semibold relative left-5">
                    <li className="py-2 flex">
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="iqro">Iqro</Link>
                    </li>
                    <li className="py-2 flex">
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datapengajar">Juz 30</Link>
                    </li>
                    <li className="py-2 flex">
                      <FolderOpenIcon className="w-5 mr-2" />
                      <Link to="datasantri">Al - Qur'an</Link>
                    </li>
                  </ul>
                ) : null}
              </ul>
            ) : null}
            {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ||
            userProfile.role === "1b864518-299d-469c-b270-4d4b9d5b120f" ? (
              <li className="my-px" onClick={laporkan}>
                <a className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-lg text-gray-700">
                    <FolderIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Laporan</span>
                </a>
              </li>
            ) : null}
            {laporan ? (
              <ul className="font-semibold relative left-10">
                <li className="py-2 flex">
                  <FolderOpenIcon className="w-5 mr-2" />
                  <Link to="datarumahtahfiz">Rumah Tahfidz</Link>
                </li>
                <li className="py-2 flex">
                  <FolderOpenIcon className="w-5 mr-2" />
                  <Link to="datapengajar">Pengajar</Link>
                </li>
                <li className="py-2 flex">
                  <FolderOpenIcon className="w-5 mr-2" />
                  <Link to="laporansantri">Santri</Link>
                </li>
              </ul>
            ) : null}
            <li className="my-px">
              <Link
                to="datauser"
                className={
                  pathname === "/datauser"
                    ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                    : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                }
              >
                <span className="text-lg text-gray-700">
                  <UsersIcon className="w-5" />
                </span>
                <span className="ml-3 font-semibold">Manage User</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="database"
                className={
                  pathname === "/database"
                    ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                    : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                }
              >
                <span className="text-lg text-gray-700">
                  <ServerIcon className="w-5" />
                </span>
                <span className="ml-3 font-semibold">Database</span>
              </Link>
            </li>
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-700 px-4 my-4 uppercase">
                Account
              </span>
            </li>
            <li className="my-px">
              <Link
                to={`profile/${userProfile.userId}`}
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-lg text-gray-700">
                  <UserCircleIcon className="w-5" />
                </span>
                <span className="ml-3 font-semibold">Profile</span>
              </Link>
            </li>
            <li className="my-px">
              <div
                className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                onClick={onSignOut}
              >
                <span className="text-lg text-gray-700">
                  <LockOpenIcon className="w-5" />
                </span>
                <span className="ml-3 font-semibold">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <header className="header bg-white shadow py-4 px-4">
          <div className="header-content flex items-center flex-row">
            <div className="flex ml-auto">
              <a className="flex flex-row items-center mr-4">
                <img
                  src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png"
                  alt="walpaper.jpg"
                  className="h-10 w-10 bg-gray-200 border rounded-full"
                />
                <span className="flex flex-col ml-2">
                  <span className="truncate w-20 font-semibold tracking-wide leading-none font-poppins">
                    {userProfile.name}
                  </span>
                  <span className="w-20 text-gray-500 text-xs leading-none mt-1">
                    Administrator
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
        <div className="flex flex-grow flex-col">
          <Outlet />
        </div>
        <footer className="footer px-4 py-6">
          <div className="footer-content">
            <p className="text-sm text-gray-600 text-center font-thin">
              Powered by rumahtahfiz@2022
            </p>
          </div>
        </footer>
      </main>

      <div
        id="modal"
        className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
      >
        <div className="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
          <div className="text-center font-bold pt-5">
            <span>Do you want to Quit ?</span>
          </div>
          <div className="flex justify-center py-5">
            <div className="px-4 py-2 flex justify-end items-center space-x-4">
              <a
                href="{{ url('/logout') }}"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Yes
              </a>
            </div>
            <div className="px-4 py-2 flex justify-end items-center space-x-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
