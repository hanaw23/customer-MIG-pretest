import EditButton from "../components/buttons/EditButton";
import DeleteButton from "../components/buttons/DeleteButton";
import Styles from "./CustomerHead.module.css";

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
  },
  {
    name: "Job Title",
    selector: (row) => row.job_title,
  },
  {
    name: "Status",
    selector: (row) => row.status.toString(),
    sortable: true,
    cell: (row) => (
      <>
        {row.status ? (
          <div className={`${Styles.border}  `} key={row.status}>
            <p className={` ${Styles.true} `}>{row.status.toString()}</p>
          </div>
        ) : (
          <div className={`${Styles.border} `} key={row.status}>
            <p className={` ${Styles.false}`}>{row.status.toString()}</p>
          </div>
        )}
      </>
    ),
  },
  {
    name: "Action",
    cell: (row) => (
      <div className={`${Styles.actionBtn}`} key={row.id}>
        <EditButton customerId={row.id} name={row.name} status={row.status} address={row.address} country={row.country} phone={row.phone_number} job={row.job_title} title="Customer" />
        <DeleteButton customerId={row.id} name={row.name} title="Customer" />
      </div>
    ),
  },
];
