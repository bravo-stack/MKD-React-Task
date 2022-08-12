import React from "react";
import {Link} from "react-router-dom"

const NotFoundPage = () => {

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-7xl h-screen text-gray-700 ">
      Not Found
      <Link to="/" style={{bottom: "25px"}} className="absolute text-white bg-blue-600 px-7 py-5 rounded-3xl text-3xl">Return to Login Page</Link>
    </div>
  );
};

export default NotFoundPage;