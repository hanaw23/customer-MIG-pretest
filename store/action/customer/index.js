import axios from "axios";

import { getCustomers, addCustomer, editCustomer, deleteCustomer } from "../../reducers/customer";
import { Url } from "../../../utility/urlApi";
import { hasToken } from "../../../utility/localStorage";

export const axiosGetCustomers = (setCustomers) => (dispatch) => {
  hasToken();
  axios
    .get(`${Url}customers`)
    .then((response) => {
      setCustomers(response.data);
      dispatch(getCustomers(response.data.result));
    })
    .catch((error) => error);
};
