import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home"


const DashboarRouter = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default DashboarRouter;
