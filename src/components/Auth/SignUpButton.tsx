import React from "react";
import { Link } from "react-router-dom";

export default function SignUpButton() {
  return (
    <>
      <Link
        to="signup"
        className="inline-flex items-center bg-white text-gray-800 font-medium rounded-lg text-sm px-6 py-3 text-center "
      >
        Kirish
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </>
  );
}
