import React, { Component } from "react";
import HomePage from "./HomePage/HomePage"
import Cart from "./Cart";

class App extends Component {
  state={
persones: [
{name:"Sayed" ,age:"22" ,num:1},
{name:"Mahfoz" ,age:"22",num:2},
{name:"Mohamed",age:"25",num:3},
{name:"saad",age:"50",num:4}

  ]
}
// switchName=(newName)=>{
//   this.setState(
//     {
//       persones: [
//       {name:newName ,age:"59"},
//       {name:"Mahfoz" ,age:"22"},
//       {name:"Mohamed",age:"25"}
      
//         ]
//       }

//   )
// }
// constructor(props) {
//   super(props);
//   this.state = {show: true};
// }
// delHeader = () => {
//   this.setState({show: false});
// }
  
  render(){

    // let myheader;
    // if (this.state.show) {
    //   myheader = <Cart />;
    // };
  return (
    <div className="text-center">
      <HomePage/>
      {/* <Cart allProduct={this.state.persones} />  */}

      {/* ///////////////   getDerivedStateFromProps/////////////////// */}
      {/* <Cart favcol="yellow" />  */}


       {/* {myheader}
       <button type="button" onClick={this.delHeader}>Delete Header</button> */}
      <Cart/>
      
      
      
    </div>
  );
  }
}export default App;
