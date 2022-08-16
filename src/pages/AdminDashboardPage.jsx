import React from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";
import profile from "./../assets/profile.svg"
import arrow from "./../assets/arrow.svg"
import TableItem from "../components/TableItem";
import MkdSDK from "../utils/MkdSDK";

let mkd = new MkdSDK();

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const [data, setData] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  // handle logout
  const navigate = useNavigate();
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    console.log("LOGGED OUT!")
  }

  // handleFetch
  const handleFetch = ( paginate) => {
    fetch("https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-project": "cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        payload: {},
        page: currentPage,
        limit: 10
      })
    }).then(res=>res.json()).then(res=>{
      console.log(res.list)
      setData(res.list)
      if(paginate.type === "NEXT") {
        setCurrentPage(currentPage+1)
      } else if(paginate.type === "PREV") {
        if(currentPage>1){
          setCurrentPage(currentPage-1)
        } else {
          setCurrentPage(1)
        }        
      } else if(!paginate) {
        setCurrentPage(1)
      }
    }).catch(err=>console.log(err))
  }

  React.useEffect( () => {
    // const dat = mkd.callRestAPI({}, "PAGINATE")
    // console.log(dat)
    // fetch("https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-project": "cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==",
    //     Authorization: "Bearer " + localStorage.getItem("token")
    //   },
    //   body: JSON.stringify({
    //     payload: {},
    //     page: 1,
    //     limit: 10
    //   })
    // }).then(res=>res.json()).then(res=>{
    //   console.log(res.list)
    //   setData(res.list)
    // }).catch(err=>console.log(err))
    handleFetch();
  }, [])
  

  return (
    <>
      <div className="p-8 m-0 h-[100%] w-full flex flex-col justify-center items-center text-7xl text-gray-700 bg-black px-24">
        <div className="flex justify-between w-full">
          <span className="text-[48px] font-[900] text-white">APP</span>
          <button onClick={logOut} className="rounded-3xl px-7 py-4 bg-[#9BFF00] rounded-[40px] text-base flex gap-1 w-[128px] h-[48px] content-center items-center">
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

            {/* CAPTION/TABLE HEADER */}
            <div className="pl-5 mt-6 grid grid-cols-[48px_600px_auto_105px] text-base">
              <span>#</span>
              <span>Title</span>
              <span>Author</span>
              <span className="flex content-center items-center gap-2">Most Liked<img src={arrow} alt="arrow" /></span>
            </div>

            {/* TABLE */}
            <ul className="flex flex-col w-full mt-5 gap-3">
              {data.map((data)=>(<TableItem key={data.id} number={data.id} thumbnail={data.photo} description={data.title} username={data.username} likes={data.like} />))}
            </ul>

          </div>

          <div className="flex text-xl text-white gap-4 my-10 contents-around">
            <button onClick={()=>handleFetch({type:"PREV"})} className="rounded-2xl bg-blue-500 px-8 py-4 border-2 border-white hover:opacity-[.4]">prev</button>
            <button onClick={()=>handleFetch({type:"NEXT"})} className="rounded-2xl bg-blue-500 px-8 py-4 border-2 border-white hover:opacity-[.4]">next</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
