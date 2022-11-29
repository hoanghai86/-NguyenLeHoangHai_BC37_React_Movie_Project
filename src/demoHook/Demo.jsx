import React, { memo, useEffect, useState } from "react";

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

const Demo = (props) => {
  //function component khác với class component là nó không có con trỏ this, count là cái state, state sẽ render lại khi biến count này thay đổi, mà muốn đổi biến count thì phải thông qua hàm setCount
  //trong Function component thì bao nhiêu cái state cũng được
  const [count, setCount] = useState(0);
  const [a, setA] = useState("hieu"); //muốn đổi a thì dùng hàm setA

  useEffect(() => {
    console.log("test", count);
    //clean function: chạy trước khi useEffect chạy lại, nó còn chạy trước khi state đổi
    return () => {
      console.log("clean 1", count);
    };
  }, [a, count]);

  useEffect(() => {
    console.log("test2222");
    //clean function: chạy khi component unmount
    return () => {
        //giống componentWillUnmount()
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={props.testMemo}>Test Memo</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};

export default memo(Demo);
