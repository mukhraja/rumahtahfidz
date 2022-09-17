import React from "react";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  AvatarCell,
  ButtonLink,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const getData = () => {
  const data = [
    {
      no: "1",
      name: "Rumah Tahfiz 1",
      nis: "RT0001",
      kepala: "Ustadz Adri",
    },
    {
      no: "2",
      name: "Rumah Tahfiz 2",
      nis: "RT0002",
      kepala: "Ustadz Andrian",
    },
  ];
  return [...data, ...data, ...data];
};

const Rumahtahfiz = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "NIS",
        accessor: "nis",
      },
      {
        Header: "Kepala Tahfiz",
        accessor: "kepala",
      },
      {
        Header: "Detail",
        accessor: "no",
        Cell: ButtonLink,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Rumah Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={data} url="tambah" />
      </div>
    </div>
  );
};

export default Rumahtahfiz;
