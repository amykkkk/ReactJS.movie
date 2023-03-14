import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

// Cleanup 

function Hello() {
  /* 
    // 함수 풀어쓰는 방법 1️⃣
    function byFn() {
      console.log("bye 😭");
    }
    function hiFn() {
      console.log("hi 😆");
      return byFn;
    }
    useEffect(hiFn, []);

    // 방법 2️⃣
    useEffect(function () {
      console.log("hi 😆");
      return function () {
        console.log("bye 😭");
      };
    }, []);
  */

  // 방법 3️⃣
  useEffect(() => {
    console.log("hi 😆");
    return () => console.log("bye 😭");
  }, []);

  return <h1>Hello</h1>;
};

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // []가 비어있음 > 맨처음 한번만 실행
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  // keyword(data)가 onChange 될때마다 실행
  useEffect(() => {
    /*  if(keyword !== "" && keyword.length > 5) {
          console.log("Seach for", keyword);
      } */

    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  // counter(data)가 onClick 될때마다 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter changes.");
  }, [keyword, counter]);

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);

  return (
    <div>
      {/* Cleanup */}
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      
      <input onChange={onChange} type="text" placeholder="Search here" />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>

      <Button text={"Continue"} />
    </div>
  );
}

export default App;
