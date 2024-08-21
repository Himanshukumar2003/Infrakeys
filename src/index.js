import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import About from "./Pages/About";
import Home from "./Main/Home";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";
import Clienteles from "./Pages/Clientele";
import Parthnes from "./Pages/Parthnes";
import Contact from "./Pages/Contact";
import Login, { SingIn } from "./Pages/LoginPage";
import Nav, { PhoneNav } from "./Main/Navbar";
import ShowData from "./Showdata/ShowData";
import Footer from "./Fotter/MainFooter";
import Loader from "./Main/Loader";
import CategoryData from "./Showdata/Categorydata";
import "./App.css";
import ProductId from "./Showdata/Product";

const Router = () => (
  <>
    <Nav />
    <PhoneNav />
    <Routes>
      <Route path="" element={<Home />} />,
      <Route path="/About" element={<About />} />,
      <Route path="/Products" element={<Products />} />,
      <Route path="/Blogs" element={<Blogs />} />,
      <Route path="/Clientele" element={<Clienteles />} />,
      <Route path="/Partnes" element={<Parthnes />} />,
      <Route path="/Contact" element={<Contact />} />,
      <Route path="/Login" element={<Login />} />,
      <Route path="/SignIn" element={<SingIn />} />,
      <Route path="/ShowData/:slugId" element={<ShowData />} />
      <Route path="/CategoryData/:slugId" element={<CategoryData />} />
      <Route path="/ProductId/:slug" element={<ProductId />} />
    </Routes>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider>
    <Router />
  </RouterProvider>
);

reportWebVitals();
