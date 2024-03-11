import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "../Auth/SignUpButton";

export default function Header() {
  return (
    <div className="pt-24">
      <div>
        <header className="bg-gray-800 border-b border-gray-700 fixed top-0 w-full z-50">
          <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
                Word Soccer
              </span>
            </Link>

            <form className="hidden  md:block lg:block xl:block md:w-5/12 lg:w-2/6 xl:w-2/6 mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-[100%] border px-4 py-3 ps-10 text-sm outline-none rounded-md bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus-within:border-blue-500"
                  placeholder="Search . . . "
                  required
                />
              </div>
            </form>

            <div>
              <SignUpButton />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
