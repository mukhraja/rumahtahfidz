import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pengajar } from "../../../gambar";
import { doGetGuruRequest } from "../../../reduxsaga/actions/Guru";
import Table, {
  AvatarCell,
  ButtonLink,
  SelectColumnFilter,
  StatusPill,
} from "../../components/datatable/Table.js";

const Pengajar = () => {
  const dispatch = useDispatch();

  const { gurudata } = useSelector((state) => state.guruState);

  useEffect(() => {
    dispatch(doGetGuruRequest());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "NIU",
        accessor: "niu",
      },
      {
        Header: "MASUK",
        accessor: "mulai_masuk",
      },
      {
        Header: "VAKUM",
        accessor: "mulai_vakum",
      },
      {
        Header: "PONDOK",
        accessor: "Pondok.name",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLink,
      },
    ],
    []
  );

  const data = React.useMemo(() => gurudata, [gurudata]);
  return (
    <div>
      <div className="mx-4 my-4 bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Data Pengajar
        </h1>
        <img src={pengajar} className="h-20" />
      </div>
      <div className="mt-6 px-4">
        <Table columns={columns} data={data} url="tambah" />
      </div>
    </div>
  );
};

export default Pengajar;
