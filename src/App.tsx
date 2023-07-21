import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  );
};

export default App;
