import axios from "axios";

import { login } from "../../reducers/login";
import { Url } from "../../../utility/urlApi";
import { setUserLocal } from "../../../utility/localStorage";

export const axiosLogin = (email, password, router, setError) => async (dispatch) => {
  const result = await axios.post(`${Url}auth/login`, {
    email: email,
    password: password,
  });

  try {
    setUserLocal(result.data.access_token);
    dispatch(login(result.data.access_token));
    router.push("/customerManagement");
  } catch (error) {
    setError(error);
  }
};
