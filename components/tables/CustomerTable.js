/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";

import { axiosGetCustomers } from "../../store/action/customer";

import SearchFilter from "../filters/SearchFilter";
import SpinnerLoading from "../loadings/SpinnerLoading";
import { customerHead } from "../../common/CustomerTableHead";

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [pending, setPending] = useState(true);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    dispatch(axiosGetCustomers(setCustomers));
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
      <div className="block w-full shadow rounded-lg overflow-x-auto whitespace-nowrap -ml-4 py-3  mt-6 text-sm">
        <DataTable columns={customerHead} data={handleData(customers.data)} pagination progressPending={pending} progressComponent={<SpinnerLoading />} highlightOnHovers defaultSortField="name" />
      </div>
    </>
  );
}
