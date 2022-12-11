// import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //thư viện lấy tham số id
import {
  fetchMovieDetailAction,
  fetchMovieDetailScheduleAction,
} from "./redux/action";
import { Col, Row, Rate, Tag, Button, Modal, Tabs } from "antd";
import moment from "moment"; //thư viện format ngày tháng

const MovieDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    var iframe = document.querySelector("#video-trailer");
    if (iframe != null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    setOpenModal(false);
  };

  const params = useParams(); //lấy tham số id của phim từ component Home truyền vào khi người ta chọn xem chi tiết phim, có ID thì gọi API để lấy thông tin phim
  const dispatch = useDispatch(); //useDispatch là hàm dispart action lên trên store redux, tạo 1 biến dispatch để hứng

  const movieDetail = useSelector((state) => {
    //để connect đến store redux và lấy ra các state trong các reducer, cụ thể là lấy ra chi tiết lịch chiếu phim, tạo biến movieDetail để hứng
    // return state.booking.movieDetail;
    return state.booking.movieDetailSchedule;
  });

  // const moviesDetail = useSelector(state => state.booking.moviesDetail);

  useEffect(() => {
    //giống componentDidmount, componentDidWillUnMount, componentDidUpdate
    const movieId = params.id;
    // dispatch(fetchMovieDetailAction(movieId), [params]);
    dispatch(fetchMovieDetailScheduleAction(movieId), [params]);
  }, [params]);

  return (
    movieDetail && (
      <div className="container mx-auto pt-10">
        {/* <h1 className="text-center text-5xl font-normal">Chi tiết phim</h1> */}
        <Row>
          <Col span={8}>
            <img className="w-full" src={movieDetail?.hinhAnh} />
          </Col>
          <Col className="pl-10" span={16}>
            <h1>{movieDetail?.tenPhim}</h1>
            <p className="text-2xl">{movieDetail?.moTa}</p>

            {/* ngày chiếu, đánh giá, hot, đang chiếu, sắp chiếu */}
            <table className="table-auto text-xl">
              <tbody>
                <tr>
                  <th>Đánh giá:</th>
                  <td>
                    <Rate value={movieDetail?.danhGia} count={10} />
                  </td>
                </tr>
                <tr>
                  <th>
                    {movieDetail?.dangChieu && (
                      <Tag color="magenta">Đang chiếu</Tag>
                    )}
                    {movieDetail?.dangChieu && (
                      <Tag color="blue">Sắp chiếu</Tag>
                    )}
                  </th>
                </tr>
                <tr>
                  <th>Ngày chiếu:</th>
                  <td>
                    {moment(movieDetail?.ngayKhoiChieu).format("DD/MM/yyyy")}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button
                      className="mr-3"
                      type="primary"
                      size="large"
                      onClick={() => showModal()}
                    >
                      Xem trailer
                    </Button>
                    <Button type="primary" size="large">
                      Đặt vé
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            <Tabs
              tabPosition="left"
              items={
                movieDetail?.heThongRapChieu.map((itemRap) => {
                  return {
                    label: (
                      <>
                        <img className="w-24" src={itemRap.logo} /> <br />
                        {itemRap.tenHeThongRap}
                      </>
                    ),
                    key: itemRap.maHeThongRap,
                    children: itemRap.cumRapChieu.map((itemCumRap) => {
                      return (
                        <div
                          key={itemCumRap.maCumRap}
                          className="text-lg text-green-700"
                        >
                          <p>{itemCumRap.tenCumRap} ({itemCumRap.diaChi})</p>
                          {itemCumRap.lichChieuPhim.map((itemChieu) => {
                            return (
                              <Tag key={itemChieu.maLichChieu}>
                                {moment(itemChieu.ngayChieuGioChieu).format(
                                  "DD-MM-yyyy ~ hh:mm"
                                )}
                              </Tag>
                            );
                          })}
                        </div>
                      );
                    }),
                  };
                })

                //   [
                //   {
                //     label: <img src={movieDetail.heThongRapChieu[0].logo} />,
                //     key: 1,
                //     children: `Content of Tab 1`,
                //   },
                //   {
                //     label: `Tab 2`,
                //     key: 2,
                //     children: `Content of Tab 2`,
                //   },
                // ]
              }
            />
          </Col>
        </Row>

        <Modal
          title="trailer"
          open={openModal}
          onCancel={closeModal}
          width={800}
        >
          {/* Nội dung modal */}

          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/wwfzUPReCAU"
          ></iframe>
        </Modal>
      </div>
    )
  );
};

export default MovieDetail;
