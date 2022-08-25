/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
// import axios from "axios";
import { useRouter } from "next/router";
import Select from "react-select";

// import { hasToken } from "../../utility/localStorage";
// import { Url } from "../../utility/urlApi";

// import FailedModal from "../modal/FailedModal";
// import SuccessModal from "../modal/SuccessModal";

export default function CustomerAddForm(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [statusCus, setStatusCus] = useState("");
  const [empty, setEmpty] = useState("");
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const router = useRouter();

  const status = [
    { value: false, label: "false" },
    { value: true, label: "true" },
  ];

  const handleChangeName = (event) => {
    setName(event.target.value);
    setEmpty("");
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
    setEmpty("");
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
    setEmpty("");
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
    setEmpty("");
  };

  const handleChangeJob = (event) => {
    setJob(event.target.value);
    setEmpty("");
  };

  const handleChangeStatus = (event) => {
    setStatusCus(event.value);
    setEmpty("");
  };

  const colourStyles = {
    control: (base) => ({
      ...base,
      border: empty ? "1px solid red" : null,
    }),
  };

  // useEffect(() => {
  //   if (statusCus === "true") {
  //     return setStatusCus(true);
  //   } else {
  //     return setStatusCus(false);
  //   }
  // }, []);

  // const submitAddCustomer = async (event) => {
  //   event.preventDefault();
  //   hasToken();

  //   const result = await axios.post(`${Url}customers`, {
  //     name: name,
  //     address: address,
  //     country: country,
  //     phone_number: phone,
  //     job_title: job,
  //     status: true,
  //   });

  //   console.log(result.data);

  //   try {
  //     if (result.data.success) {
  //       router.push("/customerManagement");
  //       setSuccess(result.data.message);
  //       window.location.reload(true);
  //     }
  //   } catch (error) {
  //     setFailed(error);

  //     // setEmpty("Please fill the form");
  //   }
  // };

  return (
    <>
      <div className="text-sm bg-gray-100 text-gray-700">
        <div className="mt-4 flex flex-col">
          <label htmlFor="name" className={`  text-indigo-700`}>
            Customer Name
          </label>
          <input id="name" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer Name" value={name} onChange={handleChangeName} />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="address" className={`  text-indigo-700`}>
            Customer Address
          </label>
          <input id="address" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer Address" value={address} onChange={handleChangeAddress} />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="country" className={`  text-indigo-700`}>
            Country
          </label>
          <input id="country" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Customer country" value={country} onChange={handleChangeCountry} />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="phone" className={`  text-indigo-700`}>
            Phone Number
          </label>
          <input id="phone" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Phone Number" value={phone} onChange={handleChangePhone} />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="phone" className={`  text-indigo-700`}>
            Job Title
          </label>
          <input id="job" className={`text-gray-700 px-3 border rounded w-[320px] h-10 mt-2 focus:outline-blue-500 border-gray-300`} placeholder="Input Job Title" value={job} onChange={handleChangeJob} />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div className="mt-4 flex flex-col">
          <label htmlFor="status" className={` text-indigo-700`}>
            Status
          </label>
          <Select id="selectbox" instanceId="selectbox" options={status} onChange={handleChangeStatus} className="text-gray-700 w-[320px] h-10 mt-2 focus:outline-blue-500 " placeholder="Select Status" isClearable />
          {/* {empty && <p className="text-xs text-red-500 mt-1">{empty}</p>} */}
        </div>

        <div>
          <div className="flex gap-8 mt-14 justify-center">
            <button className="border border-indigo-400 bg-white-700 text-sm w-[255px] h-12 rounded-[10px] font-bold text-indigo-700" onClick={props.onClose}>
              Cancel
            </button>
            <button className="border border-transparent bg-indigo-500 text-sm w-[255px] h-12 rounded-[10px] text-white font-bold" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* {success.length !== 0 && <SuccessModal message={success} />}
      {failed.length !== 0 && <FailedModal message={failed} />} */}
    </>
  );
}
