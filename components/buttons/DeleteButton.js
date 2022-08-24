import { useState } from "react";

import DeleteIcon from "../svg/DeleteIcon";
import DeleteModal from "../modal/DeleteModal";

export default function DeleteButton(props) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  const switchModalCase = () => {
    switch (props.title) {
      case "Customer":
        return <DeleteModal onClose={handleCloseDeleteModal} customerId={props.customerId} name={props.name} />;

      default:
    }
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleOpenDeleteModal}>
          <DeleteIcon />
        </button>
      </div>
      {openDeleteModal ? switchModalCase() : null}
    </>
  );
}
