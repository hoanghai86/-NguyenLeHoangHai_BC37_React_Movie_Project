import React, { memo, useEffect, useMemo, useRef, useState } from "react";

//function class: có state và life cycle
//function component: không có state và life cycle => giải pháp: react hook
//công dụng react hook:
// 1.cho phép FC sử dụng được state và life cycle
// 2. cho phép tái sử dụng logic giữa các component

//DANH SÁCH HOOK
// 1.useState()
// 2.useEffect()

// memo = PureComponent

// 3.useCallBack()
// 4.useMemo()
// 5.useRef()
//  5.1 Dom trong component
//  5.2 Chứa giá trị không bị reset lại qua các lần render

const Demo = (props) => {
  //function component khác với class component là nó không có con trỏ this, count là cái state, state sẽ render lại khi biến count này thay đổi, mà muốn đổi biến count thì phải thông qua hàm setCount
  //trong Function component thì bao nhiêu cái state cũng được
  const [count, setCount] = useState(0);
<<<<<<< HEAD
  const [a, setA] = useState("hieu"); //muốn đổi a thì dùng hàm setA
=======
  const [a, setA] = useState("hieu");
  const titleref = useRef();
  let test1 = useRef(0);
>>>>>>> f663f534f6ef9225a79ba6d1fe2d24feb077b748

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
          test1.current = test1.current + 1;
          console.log("test1",test1.current);
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
