import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

export default function FailedModal(props) {
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return ReactDOM.createPortal(
    <>
      {pending && (
        <div className={`${styles.animated} ${styles.faster} ${styles.fadeIn} main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center`} style={{ background: "rgba(0,0,0,.7)" }}>
          <div className="bg-gray-400 flex align-center justify-center">
            <div>
              <div className="w-[400px] h-[150px] bg-white rounded-[10px] px-4 py-4 flex flex-col justify-center">
                <div className="text-sm">
                  <center className="mb-2 font-bold text-indigo-500">Failed !</center>
                  <center>{props.message}</center>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
