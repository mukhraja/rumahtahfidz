import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  AvatarCell,
  ButtonLink,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
const Rumahtahfiz = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doGetRumahTahfidzRequest());
  }, []);

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  console.log(rumahtahfidzdata);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "NIT",
        accessor: "nit",
      },
      {
        Header: "Kepala Tahfiz",
        accessor: "chief",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLink,
      },
    ],
    []
  );

  const data = React.useMemo(() => rumahtahfidzdata, [rumahtahfidzdata]);

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
