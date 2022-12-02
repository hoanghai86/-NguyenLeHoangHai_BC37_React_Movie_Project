import { Row, Col } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetailAction } from "./redux/action";

const MovieDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieId = params.id;
    dispatch(fetchMovieDetailAction(movieId), [params]);
  });

  return (
    <div>
      <h1 className="text-center text-5xl font-normal">Chi tiết phim</h1>
      <Row>
        <Col span={8}>
          <img />
        </Col>
        <Col span={16}>
          <h2>Tên phim</h2>
          <p>Mô tả</p>
          <p>Ngày khởi chiếu</p>
          <iframe
            width="894"
            height="503"
            src="https://www.youtube.com/embed/wwfzUPReCAU"
            title="Project: The Perceiver - Debut Trailer | PS5 & PS4 Games"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
