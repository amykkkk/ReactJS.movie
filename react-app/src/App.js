import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/movie/:id", element: <Detail /> },
]);

export default App;


// "react-router-dom": "^6.9.0"
// https://reactrouter.com/en/6.9.0/start/tutorial
