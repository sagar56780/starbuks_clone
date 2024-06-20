import React from "react";
import logo from "./assets/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  let nav = useNavigate();
  return (
    <section>
      <nav className=" h-[5em] w-screen flex items-center gap-72 flex-grow  border-slate-950 ">
        <div className=" w-3/6 h-4/5 flex gap-16 justify-end flex-shrink">
          <div className=" flex items-center ">
            <img src={logo} alt="" className="size-10" />
          </div>
          <div className="h-full w-1/8 border-black  flex justify-center items-center   border-b-2">
            <NavLink to="home" onClick={() => nav("home")}>
              Home
            </NavLink>
          </div>

          <div className="h-full w-1/8 border-black  flex justify-center items-center   border-b-2">
            <NavLink to="gift" onClick={() => nav("gift")}>
              Gift
            </NavLink>
          </div>
          <div className="h-full w-1/8 border-black  flex justify-center items-center   border-b-2">
            <NavLink to="pay" onClick={() => nav("pay")}>
              Pay
            </NavLink>
          </div>
          <div className="h-full w-1/8 border-black  flex justify-center items-center   border-b-2">
            <NavLink to="store" onClick={() => nav("store")}>
              Store
            </NavLink>
          </div>
        </div>
        <div className="border-black border w-3/6 h-4/5 flex items-center justify-center gap-20">
          <div className="w-64 h-8 border border-black">
            {" "}
            <input type="text" />
          </div>
          <i className="fa-regular fa-user border-b-black border h-6"></i>
        </div>
      </nav>
      <Outlet />
    </section>
  );
};

export default Dashboard;
