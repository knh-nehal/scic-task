/* eslint-disable react/no-unescaped-entities */

import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosSecure.post("/login", userData);
      return data;
    },

    onSuccess: () => {
      toast.success("Login successful.");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const pin = form.pin.value;

    const userData = {
      id,
      pin,
    };

    try {
      await mutateAsync(userData);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800">Login</h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Phone No. / Email address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm mb-2">
                    PIN
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    id="pin"
                    name="pin"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    required
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account yet?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium ml-1"
                    to="/register"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
