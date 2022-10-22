import {
  BookOpenIcon,
  DatabaseIcon,
  FolderIcon,
  HomeIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, rumahtahfidz } from "../../../gambar";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div>
      {/* SIdebar Mobile */}
      <div
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 opacity-100"
        aria-hidden="true"
      ></div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto scrollbar-hide w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out translate-x-0 shadow-lg"
      >
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            // ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            // onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            // aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <NavLink end to="/" className="block">
            <img src={logo} className="lg:w-6 sm:w-20" />
          </NavLink>
        </div>

        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <a className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <HomeIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Dashboard
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </React.Fragment>
              </li>
            </ul>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <a className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DatabaseIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Master Data
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </React.Fragment>

                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  <ul className="pl-9 mt-1">
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/datarumahtahfiz"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate "
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Rumah Tahfidz
                        </span>
                      </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/datapengajar"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengajar
                        </span>
                      </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/datasantri"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Santri
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <a className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpenIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Hafalan
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </React.Fragment>

                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  <ul className="pl-9 mt-1">
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/datapengajar"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengajar
                        </span>
                      </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/datasantri"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Santri
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <a className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FolderIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Laporan
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </React.Fragment>

                <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  <ul className="pl-9 mt-1">
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/laporanpengajar"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengajar
                        </span>
                      </NavLink>
                    </li>
                    <li className="mb-1 last:mb-0">
                      <NavLink
                        end
                        to="/laporansantri"
                        className="block text-gray-600 hover:text-gray-900  transition duration-150 truncate"
                      >
                        <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Santri
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <Link
                    to="/datauser"
                    className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 "
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <UsersIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Manage User
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
              </li>
            </ul>
            <ul className="mt-3">
              <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 bg-white hover:bg-slate-200">
                <React.Fragment>
                  <a className="block text-gray-600 hover:text-gray-900 truncate transition duration-150 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <UserCircleIcon className="w-6 h-6" />
                        <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Profile
                        </span>
                      </div>
                      <div className="flex shrink-0 ml-2">
                        <svg
                          className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 rotate-180"
                          viewBox="0 0 12 12"
                        >
                          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </React.Fragment>
              </li>
            </ul>
          </div>
          <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
            <div className="px-3 py-2">
              <button
              // onClick={() => setSidebarExpanded(!sidebarExpanded)}
              >
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="text-slate-400"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  />
                  <path className="text-slate-600" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
