import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { axiosEditCustomer } from "../../store/action/customer";

import SuccessModal from "../modal/SuccessModal";
import FailedModal from "../modal/FailedModal";

export default function CustomerEditForm(props) {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [country, setCountry] = useState(props.country);
  const [phone, setPhone] = useState(props.phone);
  const [job, setJob] = useState(props.job);
  const [statusCus, setStatusCus] = useState(`${props.status}`);
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const customerId = props.customerId;
  const router = useRouter();
  const dispatch = useDispatch();

  const status = [
    { value: false, label: "false" },
    { value: true, label: "true" },
  ];

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeJob = (event) => {
    setJob(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatusCus(event.value);
  };

  const submitEditCustomer = (event) => {
    event.preventDefault();
    dispatch(axiosEditCustomer(customerId, name, address, country, phone, job, statusCus, router, setSuccess, setFailed));
  };

  return (
    <>
      <div className="text-sm bg-gray-100 text-gray-700">
        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className={`  text-indigo-700`}>
            Customer Name
          </label>
          <input id="name" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer Name" value={name} onChange={handleChangeName} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="address" className={`  text-indigo-700`}>
            Customer Address
          </label>
          <input id="address" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer Address" value={address} onChange={handleChangeAddress} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="country" className={`  text-indigo-700`}>
            Country
          </label>
          <input id="country" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer country" value={country} onChange={handleChangeCountry} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="phone" className={`  text-indigo-700`}>
            Phone Number
          </label>
          <input id="phone" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Phone Number" value={phone} onChange={handleChangePhone} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="phone" className={`  text-indigo-700`}>
            Job Title
          </label>
          <input id="job" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Job Title" value={job} onChange={handleChangeJob} />
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="status" className={` text-indigo-700`}>
            Status
          </label>
          <Select
            id="selectbox"
            instanceId="selectbox"
            options={status}
            onChange={handleChangeStatus}
            defaultInputValue={statusCus}
            className="text-gray-700 w-[320px] h-10 mt-2 focus:outline-blue-500 "
            placeholder="Select Status"
            isClearable
          />
        </div>

        <div>
          <div className="flex gap-8 mt-14 justify-center">
            <button className="border border-indigo-400 bg-white-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-700" onClick={props.onClose}>
              Cancel
            </button>
            <button className="border border-transparent bg-indigo-500 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit" onClick={submitEditCustomer}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {success.length !== 0 && <SuccessModal message={success} />}
      {failed.length !== 0 && <FailedModal message={failed} />}
    </>
  );
}
