import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
      <section>
        <div className="flex justify-center items-center px-6 pt-24">
          <div className="w-full rounded-lg shadow border  sm:max-w-md  border-gray-700">
            <div className="px-6 xs:py-[6.65rem] sm:py-[6.65rem] md:py-[5.82rem] lg:py-[2.45rem]  space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Akkaunt Yaratish
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="userName/phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Username yoki Telefon raqam
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Username yoki Telefon raqamingizni kiriting"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Parol
                  </label>
                  <input
                    type="password"
                    maxLength={100}
                    placeholder="••••••••"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Kirish
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Haliyam akkauntingiz yo'qmi?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-blue-600 hover:underline "
                  >
                    Ro'yhatdan o'tish
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
