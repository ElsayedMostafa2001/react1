import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from"./App";
import FeaturesPage from "./Featurespage/Featurespage";
import DownloadPage from "./DownloadPage/DownloadPage";
import AboutPage from "./AboutPage/ApoutPage";
import ProdutPage from "./ProductPage/ProdutPage";
import CartPage from "./CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
  },
  {
    path: "features",
    element: <FeaturesPage/>,
  },

  {
    path: "Download",
    element:<DownloadPage/>
  },
  {
    path: "About",
    element:<AboutPage/>
  },
  {
    path: "Product",
    element:<ProdutPage/>
  },
  {
    path: "Cart",
    element:<CartPage/>
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


// import React from "react";
// import  ReactDOM from "react-dom/client";
// import App from "./App";

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>)