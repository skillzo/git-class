import React from "react";
import "./App.css";
import { ContextProvider } from "./store/authContext";
// import Home from "./Navigation/Home";
import Home from "./Home";
import Picks from "./Navigation/Picks";
import FoodGallery from "./components/Gallery/FoodGallery";
import BestServices from "./components/best services/BestServices";
import Reviews from "./components/reveiws/Reviews";
import News from "./components/newpaper/News";
import Form from "./components/form/Form";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Params } from "./Params.jsx";
import InfiniteFetch from "./InfiniteFetch";
import Post from "./Post";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infinite" element={<InfiniteFetch />} />
          <Route path={`/:id`} element={<Params />} />
          <Route path="/post" element={<Post />} />
        </Routes>

        {/* <Home />
        <Picks />
        <FoodGallery />
        <BestServices />
        <Reviews />
        <News />
        <Form />
        <Footer /> */}
      </div>
    </ContextProvider>
  );
}

export default App;
