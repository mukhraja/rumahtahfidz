import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Logo from "../../gambar/logo.png";
import {
  ArrowLeftIcon,
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
  ViewBoardsIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { doSignoutRequest } from "../../reduxsaga/actions/User";
import config from "../../reduxsaga/config/config";
import Modal from "../components/modal/Modal";
import ModalLogout from "../components/modal/ModalLogout";
import { Toaster } from "react-hot-toast";

export const Page = (props) => {
  const [active, setActive] = useState(false);
  const [hafalan, setHafalan] = useState(false);
  const [laporan, setLaporan] = useState(false);
  const [subHafalan, setSubHafalan] = useState(false);
  const [subHafalana, setSubHafalana] = useState(false);
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

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

  const [menu, setMenu] = useState(true);

  const onMenu = () => {
    setMenu(!menu);
  };

  const [Display, setDisplay] = useState(false);
  const [Logo, setLogo] = useState();

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setDisplay(true);
    }
  }, []);

  console.log(menu);
  //lg:w-64
  // -translate-x-full
  return (
    <div className="flex h-screen w-screen bg-gray-100 text-gray-800 overflow-hidden sm:text-xs">
      <aside
        className={`sidebar md:w-52 sm:w-96 shadow transform lg:block ${
          menu === true ? "hidden" : "translate-x-0"
        } transition-transform duration-150 ease-in bg-white flex flex-col
         absolute z-20 lg:absolute sm:h-screen h-screen sm:w-full lg:h-full overflow-y-auto overflow-x-hidden scrollbar-hide`}
      >
        <div className="bg-white">
          <div className="sidebar-header flex items-center justify-center py-4">
            <div className="inline-flex">
              <img
                className=" w-28"
                src={config.urlImage + "/" + userProfile.logotahfidz}
                alt="logo.jpg"
              />
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
                  onClick={
                    Display === true
                      ? () => {
                          setMenu(true);
                        }
                      : ""
                  }
                >
                  <span className="text-lg text-gray-700">
                    <HomeIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Dashboard</span>
                </Link>
                <li
                  className={`my-px ${
                    userProfile.role ===
                      "8b273d68-fe09-422d-a660-af3d8312f884" ||
                    userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <Link
                    to="datarumahtahfiz"
                    className={
                      pathname === "/datarumahtahfiz"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Rumah Tahfidz</span>
                  </Link>
                  <Link
                    to="datasantri"
                    className={
                      pathname === "/datasantri"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Santri</span>
                  </Link>
                  <Link
                    to="datapengajar"
                    className={
                      pathname === "/datapengajar"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Ustadz/ah</span>
                  </Link>
                  <Link
                    to="dataiqrosantri"
                    className={
                      pathname === "/dataiqrosantri"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Iqro</span>
                  </Link>
                  <Link
                    to="datasurahpendeksantri"
                    className={
                      pathname === "/datasurahpendeksantri"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Surah Pendek</span>
                  </Link>
                  <Link
                    to="dataalquransantri"
                    className={
                      pathname === "/dataalquransantri"
                        ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                        : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <span className="text-lg text-gray-700">
                      <FolderOpenIcon className="w-5" />
                    </span>
                    <span className="ml-3 font-semibold">Al Quran</span>
                  </Link>
                </li>
              </li>
              <div
                className={`flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700 ${
                  userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
                  userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884"
                    ? ""
                    : "hidden"
                }`}
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
                      pathname === "/datamasterrumahtahfiz"
                        ? `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5 ${
                            userProfile.role ===
                            "8b273d68-fe09-422d-a660-af3d8312f884"
                              ? "hidden"
                              : ""
                          }`
                        : `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5 ${
                            userProfile.role ===
                            "8b273d68-fe09-422d-a660-af3d8312f884"
                              ? "hidden"
                              : ""
                          }`
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="datamasterrumahtahfiz">Master Tahfidz</Link>
                  </li>
                  <li
                    className={
                      pathname === "/datamasterrumahtahfiz"
                        ? `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5 ${
                            userProfile.role ===
                            "8b273d68-fe09-422d-a660-af3d8312f883"
                              ? "hidden"
                              : ""
                          }`
                        : `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5 ${
                            userProfile.role ===
                            "8b273d68-fe09-422d-a660-af3d8312f883"
                              ? "hidden"
                              : ""
                          }`
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
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
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
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
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="datasantri">Santri</Link>
                  </li>
                  <li
                    className={
                      pathname === "/datauser"
                        ? `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5 ${
                            userProfile.role !==
                            "8b273d68-fe09-422d-a660-af3d8312f884"
                              ? "hidden"
                              : ""
                          }`
                        : `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5 ${
                            userProfile.role !==
                            "8b273d68-fe09-422d-a660-af3d8312f884"
                              ? "hidden"
                              : ""
                          }`
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="datauser">Pengguna</Link>
                  </li>
                  <li
                    className={
                      pathname === "/dataadmin"
                        ? `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 bg-gray-100 w-4/5 ${
                            userProfile.role !==
                            "8b273d68-fe09-422d-a660-af3d8312f883"
                              ? "hidden"
                              : ""
                          }`
                        : `flex items-center h-10 p-2 my-2 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5 ${
                            userProfile.role !==
                            "8b273d68-fe09-422d-a660-af3d8312f883"
                              ? "hidden"
                              : ""
                          }`
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="dataadmin">Admin</Link>
                  </li>
                </ul>
              ) : null}

              <li
                className={`my-px ${
                  userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ||
                  userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883"
                    ? ""
                    : "hidden"
                }`}
              >
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
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
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
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
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
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
                        }
                      >
                        <FolderOpenIcon className="w-5 mr-2" />
                        <Link to="dataalquransantri">Al - Qur'an</Link>
                      </li>
                    </ul>
                  ) : null}
                  <li
                    className={`py-2 flex ${
                      userProfile.role !==
                        "8b273d68-fe09-422d-a660-af3d8312f883" &&
                      userProfile.role !==
                        "8b273d68-fe09-422d-a660-af3d8312f884"
                        ? "hidden"
                        : ""
                    }`}
                    onClick={getsubHafalana}
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <h1>Ustadz/ah</h1>
                  </li>
                  {subHafalana ? (
                    <ul className="font-semibold relative left-5">
                      <li
                        className={
                          pathname === "/dataiqroguru"
                            ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                            : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                        }
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
                        }
                      >
                        <FolderOpenIcon className="w-5 mr-2" />
                        <Link to="dataiqroguru">Iqro</Link>
                      </li>
                      <li
                        className={
                          pathname === "/datasurahpendekguru"
                            ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                            : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                        }
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
                        }
                      >
                        <FolderOpenIcon className="w-5 mr-2" />
                        <Link to="datasurahpendekguru">Juz 30</Link>
                      </li>
                      <li
                        className={
                          pathname === "/dataalquranguru"
                            ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                            : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                        }
                        onClick={
                          Display === true
                            ? () => {
                                setMenu(true);
                              }
                            : ""
                        }
                      >
                        <FolderOpenIcon className="w-5 mr-2" />
                        <Link to="dataalquranguru">Al - Qur'an</Link>
                      </li>
                    </ul>
                  ) : null}
                </ul>
              ) : null}
              <li className="my-px" onClick={laporkan}>
                <a className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-lg text-gray-700">
                    <FolderIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Laporan</span>
                </a>
              </li>

              {laporan ? (
                <ul className="font-semibold relative left-10">
                  <li
                    className={
                      pathname === "/laporanpengajar"
                        ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                        : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="laporanpengajar">Pengajar</Link>
                  </li>
                  <li
                    className={
                      pathname === "/laporansantri"
                        ? "flex  p-2 my-1 rounded-lg text-gray-700 bg-gray-100 w-4/5"
                        : "flex  p-2 my-1 rounded-lg text-gray-700 hover:bg-gray-100 w-4/5"
                    }
                    onClick={
                      Display === true
                        ? () => {
                            setMenu(true);
                          }
                        : ""
                    }
                  >
                    <FolderOpenIcon className="w-5 mr-2" />
                    <Link to="laporansantri">Santri</Link>
                  </li>
                </ul>
              ) : null}
              {/* <li
                className={`my-px  ${
                  userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883" &&
                  userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f884"
                    ? "hidden"
                    : ""
                }`}
              >
                <Link
                  to="database"
                  className={
                    pathname === "/database"
                      ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                      : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                  }
                  onClick={
                    Display === true
                      ? () => {
                          setMenu(true);
                        }
                      : ""
                  }
                >
                  <span className="text-lg text-gray-700">
                    <ServerIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Database</span>
                </Link>
              </li> */}
              <li className="my-px">
                <span className="flex font-medium text-sm text-gray-700 px-4 my-4 uppercase">
                  Account
                </span>
              </li>
              <li className="my-px">
                <Link
                  to={`profile/${userProfile.userId}`}
                  className={
                    pathname === `/profile/${userProfile.userId}`
                      ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
                      : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                  }
                  onClick={
                    Display === true
                      ? () => {
                          setMenu(true);
                        }
                      : ""
                  }
                >
                  <span className="text-lg text-gray-700">
                    <UserCircleIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Profile</span>
                </Link>
              </li>
              <li className="my-px">
                <div
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-red-700 cursor-pointer"
                  onClick={tampilkan}
                >
                  <span className="text-lg">
                    <LockOpenIcon className="w-5" />
                  </span>
                  <span className="ml-3 font-semibold">Logout</span>
                </div>
              </li>
            </ul>
            <div className="w-full text-center py-2">
              <button
                className="bg-green-400 p-2 rounded-full shadow-md lg:hidden"
                onClick={onMenu}
              >
                <ArrowLeftIcon className="w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
      {/* -ml-40  */}
      <main className="main flex flex-col flex-grow lg:ml-52  transition-all duration-150 ease-in">
        <header className="header bg-white shadow py-4 px-4">
          <div className="header-content flex items-center flex-row">
            <div
              className={`lg:hidden ${menu === false ? "hidden" : ""}`}
              onClick={onMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </div>
            <div className="flex ml-auto">
              <a className="flex flex-row items-center">
                <img
                  className=" w-12 rounded-lg"
                  src={config.urlImageUser + "/" + userProfile.photo}
                />
                <span className="flex flex-col ml-2 text-xs">
                  <span className="truncate w-20 font-semibold tracking-wide leading-none font-poppins">
                    {userProfile.name}
                  </span>
                  <span className="w-20 text-gray-500 text-xs leading-none mt-1">
                    {userProfile.roleName}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </header>
        {showModal && <ModalLogout onCancel={tutupkan} onDelete={onSignOut} />}
        <div className="relative flex flex-col flex-grow flex-1 overflow-y-auto scrollbar-hide overflow-x-hidden min-w-fit">
          <Outlet />
        </div>
        <footer className="footer px-4 py-6">
          <div className="footer-content">
            <p className="text-sm text-gray-600 text-center font-thin">
              Powered by rumahtahfiz@2022
            </p>
          </div>
        </footer>
        <Toaster />
      </main>
    </div>
  );
};
