import React from "react";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  AvatarCell,
  ButtonLink,
  ButtonLinkIqro,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const Iqro = () => {
  const getData = () => {
    const data = [
      {
        no: "1",
        name: "Aji Setiaji",
        iqro: "6",
        halaman: "27",
        keterangan: "Belum dapat lanjut karena terlambat",
      },
      {
        no: "2",
        name: "Irfan Nur Kholik",
        iqro: "5",
        halaman: "15",
        keterangan: "Belum dapat lanjut karena terlambat",
      },
      {
        no: "3",
        name: "Mahessa",
        iqro: "5",
        halaman: "15",
        keterangan: "Belum dapat lanjut karena terlambat",
      },
    ];
    return [...data, ...data, ...data];
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Iqro",
        accessor: "iqro",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Halaman",
        accessor: "halaman",
      },
      {
        Header: "Keterangan",
        accessor: "keterangan",
      },
      {
        Header: "Detail",
        accessor: "no",
        Cell: ButtonLinkIqro,
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data IQRO
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={data} url="tambah" />
      </div>
    </div>
  );
};

export default Iqro;
