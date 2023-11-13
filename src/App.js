import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";
import { useEffect } from "react";
// https://jsonplaceholder.typicode.com/comments
function App(){
  return  (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor/>
    </div>
  )
}
export default App;
