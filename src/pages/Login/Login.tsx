import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="text-center xs:py-[1rem] sm:py-[3.74rem] md:py-[3.37rem] lg:py-[3.37rem] xl:py-[0rem]">
      <h1 className="text-5xl font-extrabold pt-[3.8rem]">Word Soccer</h1>
      <h2 className="text-3xl font-semibold mt-5 md:mt-8">Kodni Kiriting</h2>
      <p className="my-10">
        <Link to="" className="underline">
          WordSoccerBot
        </Link>{" "}
        telegram botiga kiring va 1 daqiqalik kodingizni oling.
      </p>
      <input
        type="text"
        className="lg:w-3/12 sm:w-3/6 md:2/6 bg-transparent border border-gray-500 mb-20 text-white text-sm rounded-lg p-3"
        required
      />
    </div>
  );
}
