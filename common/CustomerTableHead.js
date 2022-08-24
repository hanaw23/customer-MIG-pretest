import EditButton from "../components/buttons/EditButton";
import DeleteButton from "../components/buttons/DeleteButton";

export const customerHead = [
  {
    name: "Customer Id",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Customer Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Country",
    selector: (row) => row.country,
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => row.phone_number,
    sortable: true,
  },
  {
    name: "Job Title",
    selector: (row) => row.job_title,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="flex gap-6" key={row.id}>
        <EditButton customerId={row.id} name={row.name} status={row.status} address={row.address} country={row.country} phone={row.phone_number} job={row.job_title} title="Customer" />
        <DeleteButton customerId={row.id} name={row.name} title="Customer" />
      </div>
    ),
  },
];
