import React, { Component } from 'react'
import Navbar from '../HomePage/Navbar'
import Download from '../HomePage/Download'
import Footer from '../HomePage/Footer'

import { CartProvider } from 'react-use-cart'

export class DownloadPage extends Component {
  render() {
    return (
      <CartProvider>
      <Navbar/>
    
      <Download/>
      
      <Footer/>
      </CartProvider>
    )
  }
}

export default DownloadPage
