import Router from "next/router";

import { getToken } from "../utility/localStorage";

export const ProtectedPage = () => {
  const token = getToken();

  if (token) {
    Router.push("/customerManagement");
  } else {
    Router.push("/login");
  }
};
