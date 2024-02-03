import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import Profile from "./Profile.jsx";
import Notes from "./Notes.jsx";
import Axiox from "axios"
function App() {
  const [data, setData]=useState("");
  const getData = async()=>{
    const response = await Axios.get("<localhost>/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  },[]);
  return <>{ }</>;
}

export default App;
