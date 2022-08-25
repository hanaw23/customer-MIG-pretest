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

export const axiosAddCustomer = (name, address, country, phone, job, statusCus, router, setSuccess, setFailed) => async (dispatch) => {
  hasToken();

  const response = await axios.post(`${Url}customers`, {
    name: name,
    address: address,
    country: country,
    phone_number: phone,
    job_title: job,
    status: JSON.parse(statusCus),
  });

  try {
    if (response.data.success) {
      router.push("/customerManagement");
      setSuccess(response.data.message);
      window.location.reload(true);
      dispatch(addCustomer(response.data.result));
    }
  } catch (error) {
    setFailed(error);
  }
};
