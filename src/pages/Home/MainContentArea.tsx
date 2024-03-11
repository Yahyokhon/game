import React from "react";
// Vaqtincha
import Img1 from "../../images/img1.png";
import { Link } from "react-router-dom";

export default function MainContentArea() {
  return (
    <div className=" text-white ml-64 p-5">
      <div className="flex justify-around">
        <Link
          to="/create_topic"
          className="w-[250px] relative block text-center border rounded-lg shadow bg-gray-800 border-gray-700 "
        >
          <img className="rounded-t-lg" src={Img1} alt="..." />

          <svg
            className="absolute top-[40%] left-[50%] -translate-x-[50%] bg-green-500 rounded-sm "
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <h5 className="w-4/6 mx-auto text-2xl font-semibold tracking-tight text-white mt-12">
            Create a new topic
          </h5>
        </Link>
        <div className="w-[250px] border rounded-lg shadow bg-gray-800 border-gray-700">
          <img className="rounded-t-lg" src={Img1} alt="..." />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-7  font-bold tracking-tight text-white">
                All about "Senseis"
              </h5>
            </a>
            <p className="mb-3 font-normal text-xs text-gray-400">
              Japan_Official
            </p>
            <Link
              to="/room/id"
              className="block w-full text-center shadow shadow-blue-400 px-3 py-2 text-sm font-medium  text-white rounded-md  focus:outline-none  bg-blue-600 hover:bg-blue-700 "
            >
              Practice
            </Link>
          </div>
        </div>
        <div className="w-[250px] border rounded-lg shadow bg-gray-800 border-gray-700">
          <img className="rounded-t-lg" src={Img1} alt="..." />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-7  font-bold tracking-tight text-white">
                All about "Senseis"
              </h5>
            </a>
            <p className="mb-3 font-normal text-xs text-gray-400">
              Japan_Official
            </p>
            <Link
              to="/room/id"
              className="block w-full text-center shadow shadow-blue-400 px-3 py-2 text-sm font-medium  text-white rounded-md  focus:outline-none  bg-blue-600 hover:bg-blue-700 "
            >
              Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
