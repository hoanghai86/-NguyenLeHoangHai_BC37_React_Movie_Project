import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const profile = useSelector((state) => state.user.profile);
  return (
    <header className="bg-slate-900 h-20">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white">
          Cyber Movie
        </Link>
        {profile ? (
          <span className="text-white text-xl">
            {" "}
            Xin chào, {profile.hoTen}{" "}
          </span>
        ) : (
          <nav>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                if (isActive) return "text-yellow-200 text-lg";
                return "text-white text-lg";
              }}
            >
              Đăng nhập
            </NavLink>
            <span className="text-white text-xl"> | </span>
            <NavLink
              to="/signup"
              className={({ isActive }) => {
                if (isActive) return "text-yellow-200 text-lg";
                return "text-white text-lg";
              }}
            >
              Đăng ký
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
