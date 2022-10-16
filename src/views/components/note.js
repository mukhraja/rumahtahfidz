<div className="flex mx-4 justify-between">
<div className="flex">
  <h1>Pencaharian : </h1>
  <input
    className="py-1 mx-2 rounded-lg pl-3"
    onChange={(event) => {
      setSearch(event.target.value);
    }}
  />
</div>
<div className="flex">
  <h1>IQRO : </h1>
  <select
    className="py-1 mx-2 rounded-lg pl-3"
    onChange={(e) => {
      setIqros(e.target.value);
    }}
  >
    <option value="">Filter Iqro</option>
    {iqro.map((e) => (
      <option value={e}>{e}</option>
    ))}
  </select>
</div>
<button className="bg-mamasingle px-4 py-2 rounded-md text-white">
  <Link to="tambah">Tambah</Link>
</button>
</div>
<div className="mt-6 rounded-lg shadow-md bg-white mx-4">
<table className="w-full">
  <thead>
    <tr className="">
      {(columns || []).map((col, index) => (
        <th
          key={index}
          className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          <span className="lg:pl-2">{col.name}</span>
        </th>
      ))}
      <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
    </tr>
    {iqrosantridata &&
      iqrosantridata
        .filter((data) => {
          console.log(data.namasantri);
          if (search === "" && iqros === "") {
            return data;
          } else if (search !== "" && iqros === "") {
            return data.namasantri
              .toLowerCase()
              .includes(search.toLowerCase());
          } else if (search === "" && iqros !== "") {
            return data.name
              .toLowerCase()
              .includes(iqros.toLowerCase());
          } else {
            return (
              data.namasantri
                .toLowerCase()
                .includes(search.toLowerCase()) &&
              data.name.toLowerCase().includes(iqros.toLowerCase())
            );
          }
        })
        .map((e) => (
          <tr>
            <td className="px-8 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify border-b border-gray-200">
              {e.namasantri}
            </td>
            <td className="px-8 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify border-b border-gray-200">
              {e.name}
            </td>
            <td className="px-8 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify border-b border-gray-200">
              {e.halaman}
            </td>
            <td className="px-8 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify border-b border-gray-200">
              {e.ket}
            </td>
            <td className="px-8 py-4 justify-center whitespace-nowrap text-sm text-gray-900 text-justify border-b border-gray-200">
              <div className=" flex">
                <Link
                  to={"detail/" + e.santriId}
                  className="px-3 bg-mamasingle py-1 rounded-md mx-1 text-white shadow-md"
                >
                  <EyeIcon className="w-5" />
                </Link>
                <Link
                  to={"edit/" + e.santriId}
                  className="px-3 bg-blue-600 py-1 rounded-md mx-1 text-white shadow-md"
                >
                  <PencilIcon className="w-5" />
                </Link>
                <button
                  className="px-3 bg-red-600 py-1 rounded-md mx-1 text-white shadow-md"
                >
                  <TrashIcon className="w-5" />
                </button>
              </div>
            </td>
          </tr>
        ))}
  </thead>
</table>
</div>