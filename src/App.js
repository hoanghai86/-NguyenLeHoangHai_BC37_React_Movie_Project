import Home from "./features/Booking/Home";
import Demo from "./demoHook/Demo";
import { useCallback, useEffect, useState } from "react";
import MovieDetail from "features/Booking/Detail";
import Booking from "features/Booking/Booking";
import Login from "features/Login/Login";
import Signup from "features/Login/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from "antd";
import Header from "components/Header";
import { useDispatch } from "react-redux";
import { fetchProfileAction } from "features/Login/redux/action";
import AppRoute from "app/AppRoute";

function App() {
  // const [count1, setCount1] = useState(0);
  // const a = 10;
  // const testMemo = useCallback(() => {
  //   console.log("Hello", count1);
  // }, [count1]);

  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch async action fetch profile
    dispatch(fetchProfileAction);
  }, []);

  return (
    <div>
      {/* <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increase count 1
      </button>
      <h1>Count 1: {count1}</h1> */}

      {/* <Demo testMemo={testMemo} /> */}

      <BrowserRouter>
        {/* <Home />
        <MovieDetail />
        <Booking />
        <Login />
        <Signup /> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route
            path="/booking"
            element={<AppRoute component={Booking} isPrivate />}
          />
          <Route
            path="/login"
            element={<AppRoute component={Login} isAuth />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
