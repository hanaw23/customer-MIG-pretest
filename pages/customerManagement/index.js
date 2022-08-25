/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

import AddButton from "../../components/buttons/AddButton";
import CustomerDrawer from "../../components/drawers/customerDrawer";
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

        <div className=" ml-[80px] mt-8 mx-center">
          <div className="flex justify-end mr-16"></div>

          <CustomerTable />
        </div>
        {/* <CustomerDrawer isOpen={openAdd} title="Add" onClose={handleCloseAdd} /> */}
      </div>
    </div>
  );
}
