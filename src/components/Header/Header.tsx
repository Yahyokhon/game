import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "../Auth/SignUpButton";

export default function Header() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
              Word Soccer
            </span>
          </Link>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white rounded-lg hover:bg-gray-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white rounded-lg hover:bg-gray-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white rounded-lg hover:bg-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white rounded-lg hover:bg-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <SignUpButton />
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
