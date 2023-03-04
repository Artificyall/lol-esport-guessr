import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "../public/csvjson.json";
import Players from "./Players";

const playersData = data;

const App: React.FC = () => {
  return (
    <>
      <Players players={playersData} />
    </>
  );
};

export default App;
