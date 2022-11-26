//rafce - enter
import React from "react";
import Header from "components/Header";
import HomeCarousel from "./components/HomeCarousel";

//function class: có state và life cycle
//function component: không có state và life cycle => giải pháp: react hook
//công dụng react hook:
// 1.cho phép FC sử dụng được state và life cycle
// 2. cho phép tái sử dụng logic giữa các component
const Home = () => {
  return (
    <div>
      <Header />;
      <HomeCarousel />
    </div>
  );

  

  //khi load trang Home, call API
  //1. Lấy danh sách banner
};

export default Home;
