/* eslint-disable @next/next/no-img-element */
import LoginForm from "../../components/forms/LoginForm";

export default function index() {
  return (
    <div className="flex justify-center mt-[150px] h-full">
      <div className="w-fit h-[500px]">
        <img src="/assets/login.webp" alt="illustration" className="w-[800px] h-[500px]" />
      </div>
      <div className="w-[500px] h-[500px] ">
        <LoginForm />
      </div>
    </div>
  );
}
