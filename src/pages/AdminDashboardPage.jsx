import React from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";
import profile from "./../assets/profile.svg"
import arrow from "./../assets/arrow.svg"

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);  

  // handle logout
  const navigate = useNavigate();
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    console.log("LOGGED OUT!")
  }

  return (
    <>
      <div className="p-8 m-0 w-full flex flex-col justify-center items-center text-7xl h-screen text-gray-700 bg-black px-24">
        <div className="flex justify-between w-full">
          <span className="text-[48px] font-[900] text-white">APP</span>
          <button onClick={logOut} className="rounded-3xl px-7 py-4 bg-[#9BFF00] rounded-[40px] text-base flex gap-1">
            <img src={profile} alt="logout" />
            Logout
          </button>
        </div>
        <div className="h-full w-full border-3">

          {/* LEADERBOARD BANNER   */}
          <div id="title" className="flex justify-between font-[100] mt-28 items-center">
            <span className="text-[40px] font-[100] text-white">Today's Leaderboard</span>
            <div className="flex text-base bg-[#1D1D1D] rounded-[16px] h-[56px] w-[418px] justify-center items-center gap-6 text-white">
              <span>30 may 2022</span>
              <span className="inline-flex text-[14px] rounded-[8px] bg-[#9BFF00] w-[156px] h-[25px] justify-center items-center text-black">SUBMISSIONS OPEN</span>
              <span>11:34</span>
            </div>
          </div>

          {/* DASHBOARD TABLE */}
          <div className="flex flex-col">
            <div className="pl-2 mt-6 grid grid-cols-[48px_auto_auto_105px] text-base">
              <span>#</span>
              <span>Title</span>
              <span>Author</span>
              <span className="flex content-center items-center gap-2">Most Liked<img src={arrow} alt="arrow" /></span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
