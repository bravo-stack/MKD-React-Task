import React from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";

const AdminDashboardPage = () => {

  const { dispatch } = React.useContext(AuthContext);

  // handle logout

  return (
    <>
      <div className="p-8 m-0 w-full flex flex-col justify-center items-center text-7xl h-screen text-gray-700 bg-black">
        <div className="flex justify-between w-full">
          <span className="text-6xl font-extrabold text-white">APP</span>
          <button onClick={()=>logOut()} className="rounded-3xl px-7 py-4 text-2xl bg-green-500">Logout</button>
        </div>
        <div className="h-full w-full border-3">

        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
