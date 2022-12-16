// import axios from "axios";
import actions from "./type";
import requester from "app/api";
import { apiPath } from "app/apiPath";

//lấy banners từ backend để cất lên store
export const fetchBannerAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });

    // const res = await axios({
    //   method: "GET",
    //   url: process.env.REACT_APP_API_URL + "/api/QuanLyPhim/LayDanhSachBanner",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.uVmhasF9oy0mXFYvSl8tBIUY7ZRmZ-U0hLsBB75mkn8",
    //   },
    // });
    // console.log(res.data);
    next({
      type: actions.SET_BANNERS,
      payload: res.data.content,
    });
  } catch (error) {}
};

//lấy movies từ backend để cất lên store
export const fetchMovieAction = (page = 1) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIES,
        params: {
          maNhom: "GP10",
          soTrang: page,
          soPhanTuTrenTrang: 4,
        },
      });

      next({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });

      // console.log(res.data);
    } catch (error) {}
  };
};

//lấy chi tiết phim từ backend để cất lên store
//closesure function
export const fetchMovieDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: apiPath.MOVIES_DETAIL,
        method: "GET",
        params: {
          MaPhim: id,
        },
      });
      // console.log(res.data);
      next({
        type: actions.SET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {}
  };
};


//lấy thông tin lịch chiếu phim
export const fetchMovieDetailScheduleAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: apiPath.MOVIES_DETAIL_SCHEDULE,
        method: "GET",
        params: {
          MaPhim: id,
        },
      });
      // console.log(res.data);
      next({
        type: actions.SET_MOVIE_DETAIL_SCHEDULE,
        payload: res.data.content,
      });
    } catch (error) {}
  };
};


//lấy thông tin hệ thống rạp
export const fetchCinemaAction = async (next) =>{
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.CINEMAS,
    });

    next({
      type: actions.SET_CINEMAS,
      payload: res.data.content,
    });
  } catch (error) {}
}