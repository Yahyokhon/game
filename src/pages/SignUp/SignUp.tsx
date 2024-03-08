import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="xs:py-[1rem] sm:py-[3.74rem] md:py-[3.37rem] lg:py-[3.37rem]">
      <section>
        <div className="flex flex-col items-center justify-center px-6  mx-auto ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Akkaunt Yaratish
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Ism va Familiya
                  </label>
                  <input
                    type="text"
                    maxLength={30}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Yahyoxon Muhammadaliyev"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Yahyokhon"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Yosh{" "}
                  </label>
                  <input
                    type="number"
                    maxLength={3}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="18"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-50"
                  >
                    Telefon raqam
                  </label>
                  <input
                    type="number"
                    maxLength={13}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="+998 ** *** ** **"
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
                  Akkaunt Yaratish
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Allaqachon akkauntingiz bormi?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline "
                  >
                    Unga kirish bu yerda
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
