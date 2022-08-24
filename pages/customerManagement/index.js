/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import AddButton from "../../components/buttons/AddButton";
import CustomerDrawer from "../../components/drawers/customerDrawer";
import CustomerTable from "../../components/tables/CustomerTable";

export default function index() {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(!openAdd);
    window.location.reload(true);
  };

  return (
    <div className="z-0">
      <div className="flex justify-between h-14" />
      <div>
        <h1 className=" font-semibold text-[30px] text-gray-600 ml-20 -mt-[40px]">Customer Management</h1>
      </div>
      <div className=" ml-[80px] mt-10 mx-center">
        <div className="flex justify-end mr-16">
          <AddButton titleButton="Add Customer" setOpen={handleOpenAdd} />
        </div>
        {/* <CustomerTable /> */}
      </div>
      <CustomerDrawer isOpen={openAdd} title="Add" onClose={handleCloseAdd} />
    </div>
  );
}
