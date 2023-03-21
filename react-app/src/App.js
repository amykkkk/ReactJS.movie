import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import List from "./routes/List";
import Search from "./routes/Search";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path={"/page/:detail/:num"} element={<List />} />
          <Route path={"/movie/:id"} element={<Detail />} />
          <Route path={"/"} element={<Home />} />
          <Route path={"/search/:search"} element={<Search />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;