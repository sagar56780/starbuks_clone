import React from "react";
import logo from "./assets/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Dashboard = () => {
  let nav = useNavigate();
  return (
    <section>
      <nav className="h-[4.8em]  w- flex items-center gap-72 flex-grow  border border-slate-950 ">
        <div className=" w-3/6 h-4/5 flex gap-16 justify-end flex-shrink">
          <div className=" flex items-center ">
            <img src={logo} alt="" className="size-10" />
          </div>
          <div className="h-full w-1/8 flex justify-center items-center ">
            <NavLink to="home" className={'h-8'} onClick={() => nav("home")}>
              Home
            </NavLink>
          </div>

          <div className="h-full w-1/8   flex justify-center items-center  ">
            <NavLink to="gift" className={'h-8'} onClick={() => nav("gift")}>
              Gift
            </NavLink>
          </div>
          <div className="h-full w-1/8   flex justify-center items-center   ">
            <NavLink to="pay" className={'h-8'} onClick={() => nav("pay")}>
              Pay
            </NavLink>
          </div>
          <div className="h-full w-1/8   flex justify-center items-center ">
            <NavLink to="store" className={'h-8'} onClick={() => nav("store")}>
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
      <div className="h-[5em] bg-green-700 border border-slate-950"></div>
      <Outlet />
    </section>
  );
};

export default Dashboard;
