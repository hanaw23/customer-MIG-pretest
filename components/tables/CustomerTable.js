import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import SearchFilter from "../filters/SearchFilter";
import SpinnerLoading from "../loadings/SpinnerLoading";
import { customer } from "../../utility/customer";
import { customerHead } from "../../common/CustomerTableHead";

export default function CustomerTable() {
  const [pending, setPending] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleData = (rowData) => {
    if (query === "") {
      return rowData;
    }
    const filteredItems = rowData.filter((item) => JSON.stringify(item).toLowerCase().indexOf(query.toLowerCase()) !== -1);
    return filteredItems;
  };

  return (
    <>
      <SearchFilter filterValue={query} filterChange={(e) => setQuery(e.target.value)} />
      <div className="block min-w-full shadow rounded-lg overflow-x-auto whitespace-nowrap -ml-4 py-3 w-80 mt-6 xl:text-base 2xl:text-base text-sm">
        <DataTable columns={customerHead} data={handleData(customer)} pagination progressPending={pending} progressComponent={<SpinnerLoading />} highlightOnHovers defaultSortField="name" />
      </div>
    </>
  );
}
