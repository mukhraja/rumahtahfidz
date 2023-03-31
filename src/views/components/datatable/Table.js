import React, { useEffect, useState } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  TrashIcon,
  EyeIcon,
  PencilIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import { Button, PageButton } from "./shared/Button";
import { classNames } from "./shared/Utils";
import { SortIcon, SortUpIcon, SortDownIcon } from "./shared/Icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import Modal from "../modal/Modal";
import toast from "react-hot-toast";
import Alert from "../../../utils/Alert";
import ApiSantri from "../../../api/ApiSantri";
import { UserAddIcon } from "@heroicons/react/outline";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 pl-3 py-1"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </label>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
        status.startsWith("active") ? "bg-green-100 text-green-800" : null,
        status.startsWith("inactive") ? "bg-yellow-100 text-yellow-800" : null,
        status.startsWith("offline") ? "bg-red-100 text-red-800" : null
      )}
    >
      {status}
    </span>
  );
}

export function tanggalcustom({ value }) {
  if (value == "0000-00-00 00:00:00" || value == null) {
    return <span className=" text-gray-500"> - </span>;
  } else {
    const tgl = moment(value).format("DD-MM-YYYY");
    return <span className="text-gray-500">{tgl}</span>;
  }
}

export function perkecilemail({ value }) {
  return <h1 className=" truncate w-36">{value}</h1>;
}

export function perkecilnama({ value }) {
  return <h1 className=" truncate w-40">{value}</h1>;
}

export function JumlahCabang({ value }) {
  return (
    <h1 className=" py-0 lg:py-1 w-5 lg:w-8 text-white text-center bg-fuchsia-400 rounded-md shadow-md mr-2 text-xs lg:text-sm">
      {value}
    </h1>
  );
}

export function Jumlahorang({ value }) {
  return (
    <div className="group cursor-pointer relative text-white py-1 lg:py-2 w-5 lg:w-10 text-center bg-fuchsia-400 rounded-md shadow-md mr-2">
      {value}
    </div>
  );
}

export function ButtonLinkRumahTahfidz({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const { userProfile } = useSelector((state) => state.userState);

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/pondok/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  return (
    <div>
      {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ? (
        <div className=" flex">
          <Link
            to={"detail/" + status}
            className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
          <Link
            to={"edit/" + status}
            className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <PencilIcon className="lg:w-5 sm:w-2" />
          </Link>
          {status == "96f95aea-ef38-4623-82af-979c383bbb35" ? (
            ""
          ) : (
            <button
              onClick={tampilkan}
              className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
            >
              <TrashIcon className="lg:w-5 sm:w-2" />
            </button>
          )}
          {showModal && (
            <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
          )}
        </div>
      ) : (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-3 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function ButtonLinkListRumahTahfidz({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";
  const { userProfile } = useSelector((state) => state.userState);

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/pondok/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };
  return (
    <div>
      <div className=" flex">
        <Link
          to={"/datarumahtahfiz/detail/" + status}
          className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
        >
          <EyeIcon className="lg:w-5 sm:w-2" />
        </Link>
        <Link
          to={"/datarumahtahfiz/edit/" + status}
          className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
        >
          <PencilIcon className="lg:w-5 sm:w-2" />
        </Link>

        {status == "96f95aea-ef38-4623-82af-979c383bbb35" ? (
          ""
        ) : (
          <button
            onClick={tampilkan}
            className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <TrashIcon className="lg:w-5 sm:w-2" />
          </button>
        )}

        {showModal && (
          <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
        )}
      </div>
    </div>
  );
}

export function ButtonLinkMasterRumahTahfidz({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";
  const { userProfile } = useSelector((state) => state.userState);

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/masterpondok/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  return (
    <div>
      {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ? (
        <div className=" flex">
          <Link
            to={"list/" + status}
            className="px-3 sm:px-1 bg-violet-500 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <ViewListIcon className="lg:w-5 sm:w-2" />
          </Link>
          <Link
            to={"detail/" + status}
            className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
          <Link
            to={"edit/" + status}
            className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <PencilIcon className="lg:w-5 sm:w-2" />
          </Link>
          {status == "96f95aea-ef38-4623-82af-979c383bbb01" ? (
            ""
          ) : (
            <button
              onClick={tampilkan}
              className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
            >
              <TrashIcon className="lg:w-5 sm:w-2" />
            </button>
          )}
          {showModal && (
            <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
          )}
        </div>
      ) : (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-3 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function ButtonLinkSantri({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const { userProfile } = useSelector((state) => state.userState);

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/santri/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  return (
    <div>
      {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ? (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
          <Link
            to={"edit/" + status}
            className="px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <PencilIcon className="lg:w-5 sm:w-2" />
          </Link>
          <button
            onClick={tampilkan}
            className="px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <TrashIcon className="lg:w-5 sm:w-2" />
            {showModal && (
              <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
            )}
          </button>
        </div>
      ) : (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
        </div>
      )}
    </div>
  );
}
export function ButtonLinkGuru({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const { userProfile } = useSelector((state) => state.userState);

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/guru/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  return (
    <div>
      {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ? (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
          <Link
            to={"edit/" + status}
            className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <PencilIcon className="lg:w-5 sm:w-2" />
          </Link>
          <button
            onClick={tampilkan}
            className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <TrashIcon className="lg:w-5 sm:w-2" />
          </button>
          {showModal && (
            <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
          )}
        </div>
      ) : (
        <div className="flex">
          <Link
            to={"detail/" + status}
            className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
          >
            <EyeIcon className="lg:w-5 sm:w-2" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function ButtonLinkUser({ value, onRefresh }) {
  const status = value ? value.toLowerCase() : "";

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.userState);

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/user/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  return (
    <div>
      <div className="flex">
        <Link
          to={"detail/" + status}
          className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
        >
          <EyeIcon className="lg:w-5 sm:w-2" />
        </Link>
        <Link
          to={"edit/" + status}
          className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
        >
          <PencilIcon className="lg:w-5 sm:w-2" />
        </Link>
        {status === "1c7258f8-0ac0-4c36-aba2-94ba3f4f3039" ? (
          ""
        ) : (
          <button
            onClick={tampilkan}
            className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
          >
            <TrashIcon className="lg:w-5 sm:w-2" />
          </button>
        )}
      </div>
      {showModal && (
        <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
      )}
    </div>
  );
}

export function ButtonLinkIqro({ value }) {
  const status = value ? value.toLowerCase() : "";

  return (
    <div className="flex">
      <Link
        to={"detail/" + status}
        className="px-3 sm:px-1 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
      >
        <EyeIcon className="lg:w-5 sm:w-2" />
      </Link>
    </div>
  );
}

export function ButtonLinkIqroList({ value, onRefresh }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/iqrosantri/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/dataiqrosantri/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
        {showModal && (
          <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
        )}
      </button>
    </div>
  );
}

export function ButtonLinkSurahPendekList({ value, onRefresh }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/surahpendeksantri/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/datasurahpendeksantri/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
        {showModal && (
          <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
        )}
      </button>
    </div>
  );
}

export function ButtonLinkAlquranList({ value, onRefresh }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/alquransantri/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/dataalquransantri/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
      </button>
      {showModal && (
        <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
      )}
    </div>
  );
}

export function ButtonLinkIqroPengajarList({ value, onRefresh }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/iqroguru/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/dataiqropengajar/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
      </button>
      {showModal && (
        <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
      )}
    </div>
  );
}

export function ButtonLinkSurahPendekGuruList({ value, onRefresh }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/surahpendekguru/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/datasurahpendekguru/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
      </button>
      {showModal && (
        <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
      )}
    </div>
  );
}

export function ButtonLinkAlquranGuruList({ value, onRefresh }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const tampilkan = () => {
    setShowModal(!showModal);
  };

  const tutupkan = () => {
    setShowModal(false);
  };

  const onDelete = async (data) => {
    const loadingToast = Alert.loading("Sedang menghapus...");

    try {
      await ApiSantri.postData("/alquranguru/delete/" + data);
      toast.dismiss(loadingToast);
      Alert.success("Data berhasil dihapus !");
      tutupkan();
      onRefresh();
    } catch (error) {
      toast.dismiss(loadingToast);
      tutupkan();
      Alert.error("Periksa koneksi jaringan !!!");
    }
  };

  const status = value;

  return (
    <div className=" flex">
      <Link
        to={"/dataalquranguru/edit/" + status}
        className="px-3 sm:px-1 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <PencilIcon className="lg:w-5 sm:w-2" />
      </Link>
      <button
        onClick={tampilkan}
        className="px-3 sm:px-1 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
      >
        <TrashIcon className="lg:w-5 sm:w-2" />
      </button>
      {showModal && (
        <Modal onCancel={tutupkan} onDelete={() => onDelete(status)} />
      )}
    </div>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">
          {row.original[column.emailAccessor]}
        </div>
      </div>
    </div>
  );
}

function Table({ columns, data, url }) {
  const { pathname } = useLocation();
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );

  const { userProfile } = useSelector((state) => state.userState);

  // Render the UI for your table
  return (
    <div className="">
      <div className="sm:flex sm:gap-x-2 font-poppins justify-between">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
        {userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884" ? (
          pathname.substring(0, 27) == "/datamasterrumahtahfiz/list" ? null : (
            <Link
              to={url}
              className=" bg-mamasingle lg:px-4 px-2 py-1 rounded-md text-white"
            >
              Tambah
            </Link>
          )
        ) : null}
      </div>
      {/* table */}
      <div className="relative">
        <div className="absolute w-full">
          <div className="py-2 mt-4">
            <div className="shadow overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-20 scrollbar-thumb-rounded-md border-b border-gray-200 sm:rounded-lg pb-2">
              <table {...getTableProps()} className="table-auto w-full">
                <thead className="bg-gray-50 font-poppins">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="group lg:px-6 px-2 py-3 text-left text-xs font-light text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                                )
                              ) : (
                                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200 font-poppins"
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="lg:px-6 px-2 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer" ? (
                                <div className="text-xs text-gray-500">
                                  {cell.render("Cell")}
                                </div>
                              ) : (
                                cell.render("Cell")
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="relative py-3 flex items-center justify-between font-poppins">
              <div className="flex-1 flex justify-between sm:hidden">
                <Button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </Button>
                <Button onClick={() => nextPage()} disabled={!canNextPage}>
                  Next
                </Button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex gap-x-2 items-baseline">
                  <span className="lg:text-sm text-xs text-gray-700">
                    Page{" "}
                    <span className="font-medium">{state.pageIndex + 1}</span>{" "}
                    of <span className="font-medium">{pageOptions.length}</span>
                  </span>
                  <label>
                    <span className="sr-only">Items Per Page</span>
                    <select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1 px-2 mr-2"
                      value={state.pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                      }}
                    >
                      {[5, 10, 20].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <PageButton
                      className="rounded-l-md"
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                    >
                      <span className="sr-only">First</span>
                      <ChevronDoubleLeftIcon
                        className="lg:h-5 lg:w-5 h-2 w-2 text-gray-400"
                        aria-hidden="true"
                      />
                    </PageButton>
                    <PageButton
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronLeftIcon
                        className="lg:h-5 lg:w-5 h-2 w-2 text-gray-400"
                        aria-hidden="true"
                      />
                    </PageButton>
                    <PageButton
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRightIcon
                        className="lg:h-5 lg:w-5 h-2 w-2 text-gray-400"
                        aria-hidden="true"
                      />
                    </PageButton>
                    <PageButton
                      className="rounded-r-md"
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                    >
                      <span className="sr-only">Last</span>
                      <ChevronDoubleRightIcon
                        className="lg:h-5 lg:w-5 h-2 w-2 text-gray-400"
                        aria-hidden="true"
                      />
                    </PageButton>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
