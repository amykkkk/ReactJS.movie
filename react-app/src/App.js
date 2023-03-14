import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);  // empty array
  const onchange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {   // submit(기본 form > button) 이벤트
    event.preventDefault();       // form 기본 이벤트 막기(submit)
    if (toDo === "") {
      return;                     // toDo가 비어있으면 함수가 작동하지않도록 return
    }
    setToDos((currentArray) => [...currentArray, toDo]); // array 추가 > ... + array
    setTodo(""); // submit > empty
  };
  const deleteBtn = index => {
    /* 다른 방법들 
      const li = event.target.parentElement;
      li.remove();
      setTodos(todos.filter((item, todoIndex) => index !== todoIndex));
    */

    setToDos((curToDos) =>
      // 선택한 값의 index와 index가 다른 값들만 filter,'_': 사용하지 않는 변수를 표기(item 첫번째 인수 생략 불가)
      curToDos.filter((_, curIndex) => curIndex !== index)
    );
  };
  console.log(toDos)

  return (
    <div>
      <h1>My todos ({toDos.length})</h1> {/* js는 {}안에 사용 */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onchange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* map : array 수정 */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {/* () => deleteBtn(index): index 값을 넘기기 위한 것 */}
            {item} <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
