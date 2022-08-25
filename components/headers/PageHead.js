import { useRouter } from "next/router";

import { removeToken } from "../../utility/localStorage";

import AddButton from "../buttons/AddButton";
import LogoutButton from "../buttons/LogoutButton";

export default function PageHead(props) {
  const router = useRouter();

  const handleLogout = () => {
    removeToken();
    router.replace("/login");
  };

  return (
    <div className="bg-indigo-300 drop-shadow-lg flex justify-between">
      <h1 className=" font-semibold text-[30px] text-gray-50 ml-20 mt-0 py-10">{props.namePage}</h1>
      <div className="flex">
        <AddButton titleButton="+ Add Customer" setOpen={props.setOpen} />
        <LogoutButton action={handleLogout} className=" w-fit h-fit flex cursor-pointer pl-1 mb-4 mr-20 mt-12" />
      </div>
    </div>
  );
}
