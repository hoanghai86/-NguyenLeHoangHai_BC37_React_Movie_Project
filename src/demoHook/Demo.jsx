import React, { memo, useEffect, useMemo, useRef, useState } from "react";

//function class: có state và life cycle
//function component: không có state và life cycle => giải pháp: react hook
//công dụng react hook:
// 1.cho phép FC sử dụng được state và life cycle
// 2. cho phép tái sử dụng logic giữa các component

//danh sách hook
// 1.useState()
// 2.useEffect()

// memo = PureComponent

// 3.useCallBack()
// 4.useMemo()
// 5.useRef()
//  5.1 Dom trong component

const Demo = (props) => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState("hieu");
  const titleref = useRef();

  useEffect(() => {
    console.log("test", count);
    //clean function: chạy trước khi useEffect chạy lại, nó còn chạy trước khi state đổi
    return () => {
      console.log("clean 1", count);
    };
  }, [a, count]);

  //mảng dependency [] là 1 mảng rỗng nên nó không bao giờ render lại
  useEffect(() => {
    console.log("test2222");
    //clean function: chạy khi component unmount
    return () => {
      //giống componentWillUnmount()
    };
  }, []);

  //mảng dependency [] là 1 mảng rỗng nên nó không bao giờ render lại
  const sum = useMemo(() => {
    console.log("sum init again");
    return 10 + 20 + 30 + count;
  }, [count]);

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1 ref={titleref}>{count}</h1>
      <h1>Sum: {sum}</h1>
      <button onClick={props.testMemo}>Test Memo</button>
      <button
        onClick={() => {
          setCount(count + 1);
          titleref.current.style.color = "yellow";
        }}
      >
        Increase count
      </button>
    </div>
  );
};

export default memo(Demo);
