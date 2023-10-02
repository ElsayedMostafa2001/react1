import React, { Component } from "react";
import Navbar from "../HomePage/Navbar";
import Device from "../HomePage/Device";
import Footer from "../HomePage/Footer";
import Next from "./Next";
import { CartProvider } from "react-use-cart";

export class FeaturesPage extends Component {
  render() {
    return (
      <CartProvider>
        <Navbar />
  
        <Device/>
        <Next/>
        <Footer/>
      </CartProvider>
    );
  }
}

export default FeaturesPage;
