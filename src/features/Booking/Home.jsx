//rafce - enter
import React, { useEffect } from "react";
import Header from "components/Header";
import HomeCarousel from "./components/HomeCarousel";
import { useDispatch } from "react-redux";
import { fetchBannerAction, fetchCinemaAction, fetchMovieAction } from "./redux/action";
import MovieList from "./components/MovieList";
import { ScheduleMovie } from "./components/ScheduleMovie";

//function class: có state và life cycle
//function component: không có state và life cycle => giải pháp: react hook
//công dụng react hook:
// 1.cho phép FC sử dụng được state và life cycle
// 2. cho phép tái sử dụng logic giữa các component
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //call API
    //set data store banner
    dispatch(fetchBannerAction);

    //set data store danh sách phim
    dispatch(fetchMovieAction());

    //set data store danh sách hệ thống rạp
    dispatch(fetchCinemaAction);
    
  }, []);

  return (
    <div>
      <HomeCarousel />
      <MovieList />
      <ScheduleMovie />
    </div>
  );

  //khi load trang Home, call API
  //1. Lấy danh sách banner
};

export default Home;
