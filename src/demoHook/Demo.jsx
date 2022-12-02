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
  const [a, setA] = useState("hieu"); //muốn đổi a thì dùng hàm setA
  const titleref = useRef();
  let test1 = useRef(0);

  //đặc điểm của useEffect là nó sẽ luôn luôn chạy lần đầu tiên, khi giao diện load lên là nó chạy, khi render xong là nó chạy

 
  useEffect(() => {
    console.log("test", count);
    //clean function: chạy trước khi useEffect chạy lại, nó còn chạy trước khi state đổi
    return () => {
      console.log("clean 1", count);
    };
  }, [a, count]);  //khi component bị render lại thì useEffect này sẽ chạy khi a với count bị đổi


  useEffect(() => {
    console.log("test2222");
    //clean function: chạy khi component unmount
    return () => {
      //giống componentWillUnmount()
    };
  }, []); //useEffect này sẽ ko bao giờ chạy lại vì mảng dependency [] bị rỗng

  //còn useEffect này sẽ luôn chạy lại thì nó không có mảng dependency
    useEffect(() => {
    console.log("test333");
  });

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
          console.log("test1", test1.current);
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
