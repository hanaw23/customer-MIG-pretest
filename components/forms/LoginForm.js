import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import { Url } from "../../utility/urlApi";
import { setUserLocal } from "../../utility/localStorage";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLogin = async () => {
    const result = await axios.post(`${Url}auth/login`, {
      email: email,
      password: password,
    });

    try {
      setUserLocal(result.data.access_token);
      router.push("/customerManagement");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="h-full bg-gray-white w-[400px] ml-auto mr-auto">
      <div className="h-full">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">Login</h2>

              <h3 className="mt-2 text-center text-xl font-semibold text-indigo-400 ">Customer Management</h3>
            </div>
            <div className="mt-8 space-y-6">
              {error && <h3 className="text-center font-semibold text-red-700">{error}</h3>}
              <div className="rounded-md shadow-sm space-y-5">
                <div className="relative">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-indigo-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email-address"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-indigo-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChangePass}
                    required
                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-indigo-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-indigo-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmitLogin}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-m font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
