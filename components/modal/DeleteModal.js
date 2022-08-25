import ReactDOM from "react-dom";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { axiosDeleteCustomer } from "../../store/action/customer";

import OutsideClickHandler from "react-outside-click-handler";
import FailedModal from "./FailedModal";
import SuccessModal from "./SuccessModal";
import style from "./Modal.module.css";

export default function DeleteModal(props) {
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");

  const customerId = props.customerId;
  const name = props.name;
  const router = useRouter();
  const dispatch = useDispatch();

  const submitDeletecustomer = () => {
    dispatch(axiosDeleteCustomer(customerId, router, setSuccess, setFailed));
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${style.animated} ${style.faster} ${style.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-auto flex  justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
        <OutsideClickHandler onOutsideClick={props.onClose}>
          <div className="bg-gray-400 flex align-center justify-center">
            <div>
              <div className="w-50 h-50 bg-white rounded-[8px] px-6 py-6">
                <div>
                  <div>Are you sure want to delete {name} ?</div>
                </div>
                <div className="flex gap-10 mt-8 justify-center">
                  <button className="border border-indigo-700 bg-white-700 text-sm w-20 h-8 rounded text-indigo-400 text-semibold" onClick={props.onClose}>
                    Cancel
                  </button>
                  <button className="border border-transparent bg-indigo-700 text-sm w-20 h-8 rounded text-white text-semibold" type="submit" onClick={submitDeletecustomer}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
      {success.length !== 0 && <SuccessModal message={success} />}
      {failed.length !== 0 && <FailedModal message={failed} />}
    </>,
    document.body
  );
}
