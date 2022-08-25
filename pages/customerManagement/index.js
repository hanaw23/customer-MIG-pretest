/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import AddButton from "../../components/buttons/AddButton";
import CustomerDrawer from "../../components/drawers/CustomerDrawer";
import CustomerTable from "../../components/tables/CustomerTable";
import ScrollProgress from "../../components/scrolls/ScollProgress";
import PageHead from "../../components/headers/PageHead";

import { hasToken } from "../../utility/localStorage";
import { ProtectedPage } from "../../middleware/ProtectedPage";

export default function index() {
  const [openAdd, setOpenAdd] = useState(false);

  hasToken();

  useEffect(() => {
    ProtectedPage();
  }, []);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(!openAdd);
  };

  return (
    <div>
      <ScrollProgress />

      <div>
        <PageHead namePage="Customer Management" />

        <div className=" ml-[80px] mt-2 mx-center">
          <div className="flex justify-end mr-12">
            <AddButton titleButton="+ Add Customer" setOpen={handleOpenAdd} />
          </div>

          <CustomerTable setOpen={handleOpenAdd} />
        </div>
      </div>

      {openAdd && <CustomerDrawer isOpen={openAdd} title="Add" onClose={handleCloseAdd} />}
    </div>
  );
}
