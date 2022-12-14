import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { getScheduleMovieCinema } from "../utils/bookService";
import { useEffect } from "react";

export const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  // console.log(listSchedule)
  //daanh sách hệ thống rạp
  const cinemas = useSelector((state) => state.booking.cinemas);
  // console.log(cinemas);

  //chạy phuj thuoc vao cinemas
  useEffect(() => {
    getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  },[cinemas]);

  return (
    <div>
      <Tabs
        onChange={(key) => {
          getScheduleMovieCinema(key).then((res) =>
            setListSchedule(res.data.content)
          );
        }}
        tabPosition="left"
        items={cinemas.map((itemRap) => {
          return {
            label: <img className="w-24" src={itemRap.logo} />,
            key: itemRap.maHeThongRap,
            children:
              listSchedule.length > 0 &&
              listSchedule[0].lstCumRap.map((itemCumRap) => {
                return (
                  <div key={itemCumRap.maCumRap}>
                    {itemCumRap.tenCumRap}
                    <br />
                    {itemCumRap.diaChi}
                  </div>
                );
              }),
          };
        })}
      />
    </div>
  );
};
