import Home from "./features/Booking/Home";
import Demo from "./demoHook/Demo";
import { useCallback, useState } from "react";
import MovieDetail from "features/Booking/Detail";
import Booking from "features/Booking/Booking";
import Login from "features/Login/Login";
import Signup from "features/Login/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from "antd";
import Header from "components/Header";

function App() {
  // const [count1, setCount1] = useState(0);
  // const a = 10;
  // const testMemo = useCallback(() => {
  //   console.log("Hello", count1);
  // }, [count1]);

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
          <Route exact path="/detail/:id" element={<MovieDetail />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
