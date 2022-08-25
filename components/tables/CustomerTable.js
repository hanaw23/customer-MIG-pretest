import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import { hasToken } from "../../utility/localStorage";
import { Url } from "../../utility/urlApi";

import SearchFilter from "../filters/SearchFilter";
import SpinnerLoading from "../loadings/SpinnerLoading";
import { customerHead } from "../../common/CustomerTableHead";

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [pending, setPending] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    hasToken();
    axios
      .get(`${Url}customers`)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => error);
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
