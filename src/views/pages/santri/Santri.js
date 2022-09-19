import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { santri } from "../../../gambar";
import Table, {
  AvatarCell,
  ButtonLink,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
const Santri = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doGetSantriRequest());
  }, []);

  const { santridata } = useSelector((state) => state.santriState);
  console.log(santridata);

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
        Header: "Keluarga",
        accessor: "parent",
      },
      {
        Header: "Kota",
        accessor: "city",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLink,
      },
    ],
    []
  );

  const data = React.useMemo(() => santridata, [santridata]);

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Santri
        </h1>
        <img src={santri} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={data} url="tambah" />
      </div>
    </div>
  );
};

export default Santri;
