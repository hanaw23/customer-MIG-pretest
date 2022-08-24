import { useState } from "react";

import EditIcon from "../svg/EditIcon";
import CustomerDrawer from "../drawers/customerDrawer";

export default function EditButton(props) {
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(!openEdit);
  };

  const switchModalCase = () => {
    switch (props.title) {
      case "Customer":
        return (
          <CustomerDrawer isOpen={openEdit} title="Edit" onClose={handleCloseEdit} customerId={props.customerId} name={props.name} status={props.status} address={props.address} country={props.country} phone={props.phone} job={props.job} />
        );

      default:
    }
  };
  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenEdit}>
          <EditIcon />
        </button>
      </div>
      {openEdit ? switchModalCase() : null}
    </>
  );
}
