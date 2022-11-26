import Home from "./features/Booking/Home";
import Demo from "./demoHook/Demo";
import { useCallback, useState } from "react";

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

      <Home />
      {/* <Demo testMemo={testMemo} /> */}
    </div>
  );
}

export default App;
