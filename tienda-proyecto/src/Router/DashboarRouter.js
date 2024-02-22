import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Add from "../Components/Add";
import List from "../Components/List";
import NavBar from "../Components/NavBar";
import Informacion from "../Components/Informacion";
import Search from "../Components/Search";

const DashboarRouter = () => {
  return (
    <>
      <NavBar />
      {/* <Search /> */}
      <List />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/informacion/:itemid" element={<Informacion />} />
      </Routes>
    </>
  );
};

export default DashboarRouter;
