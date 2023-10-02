/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
// propes  for function base

// import React from 'react'

//  function Cart(props) {
//   return (
//     <div>
//     <h1> My Name{props.name}</h1>
//     <h2> My Age{props.age}</h2>

//     </div>
//   )
// }export default Cart;

// propes  for class base

// import React, { Component } from "react";

// class Cart extends Component {
//   state = {
//     persones: [
//       { name: "Sayed", age: "22" },
//       { name: "Mahfoz", age: "22" },
//       { name: "Mohamed", age: "25" },
//     ],
//   };
//   changName = (event) => {
//     this.setState({
//       persones: [
//         { name: event.target.value, age: "59" },
//         { name: "Mahfoz", age: "22" },
//         { name: "Mohamed", age: "25" },

//       ],
//     });
//   };

//   render(props) {
//     // const myname=this.props.name;
//     // const myage=this.props.age;
//     // const {name,age}=this.props
//     const { allProduct } = this.props;
//     const theProduct = allProduct.map((item) => {
//       // condition?true  : false
//       return item.num>2? (
//         <div key={item.num}>
//           <h1> My Name is{item.name}</h1>
//           <h1> My Age is {item.age}</h1>
//         </div>)
//   //     ):item.num===1?(
//   //     <div>
//   // <h2>Not is Rang</h2>
//   // </div>)
//   :null;

//     });
//     return (
//       <div>

//      {theProduct}

//         {/* <h1> My Name :{this.props.name}</h1>
//         <h1> My Name :{this.props.age}</h1> */}
//         {/* <h1> My Name :{myname}</h1>
//         <h1> My Name :{myage}</h1> */}

//         {/* name   age */}
//         {/* <h1> My Name :{name}</h1>
//         <h1> My Age :{age}</h1> */}

//         {/* <h1> My Name:{this.state.persones[0].name}</h1> */}

//         {/* on change */}
//         {/* <input className='form-control btn btn-outline-info' type='text' placeholder='Enter your Name' onChange={this.changName}></input> */}
//       </div>
//     );
//   }
// }

// export default Cart;

import React, { Component } from "react";

import {
  UncontrolledCarousel,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
class Cart extends Component {
  /////1- mouting
  /// /////////////////////1-constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // render() {
  //   return (
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //   );
  // }

  ///////////////  2- getDerivedStateFromProps///////////////////

  //  constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritecolor: props.favcol };
  // }
  // render() {
  //   return (
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //   );
  // }

  ////////////////////////////////////3-componentDidMount////////////////////

  // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({favoritecolor: "green"})
  //   }, 2000)
  // }
  // render() {
  //   return (
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //   );
  // }
  ////////////////////////////4-render///////////////

  //////////////////////////////////2-Updating////////////

  /////////////////////////////1-getDerivedStateFromProps///////////////////

  ////////////////////////////2-should component update//////////////

  // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // shouldComponentUpdate() {
  //   return true;
  // }
  // changeColor = () => {
  //   this.setState({favoritecolor: "blue"});
  // }
  // render() {
  //   return (
  //     <div>
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //     <button type="button" onClick={this.changeColor}>Change color</button>
  //     </div>
  //   );
  // }

  //////////////////////////////////3-render////////////////////
  //////////////////////////////////////////////4-getSnapshotBeforeUpdate///////////////////////////

  // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({favoritecolor: "brown"})
  //   }, 2000)
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   document.getElementById("div1").innerHTML =
  //   "Before the update, the favorite was " + prevState.favoritecolor;
  // }
  // componentDidUpdate() {
  //   document.getElementById("div2").innerHTML =
  //   "The updated favorite is " + this.state.favoritecolor;
  // }
  // render() {
  //   return (
  //     <div>
  //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //       <div id="div1"></div>
  //       <div id="div2"></div>
  //     </div>
  //   );
  // }

  ///////////////////////////////////////////////////////////////5-componentDidUpdate/////////////////

  // constructor(props) {
  //   super(props);
  //   this.state = {favoritecolor: "red"};
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({favoritecolor: "Green"})
  //   }, 2000)
  // }
  // componentDidUpdate() {
  //   document.getElementById("mydiv").innerHTML =
  //   "The updated favorite is " + this.state.favoritecolor;
  // }
  // render() {
  //   return (
  //     <div>
  //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
  //     <div id="mydiv"></div>
  //     </div>
  //   );
  // }
  //////////////////////////////////////////////////////////3-unmouting/////////////////////////////

  // componentWillUnmount() {
  //   alert("The component named Header is about to be unmounted.");
  // }
  // render() {
  //   return (
  //     <h1>Hello World!</h1>
  //   );
  // }

  render() {
    return (
      <div>
        
          <UncontrolledCarousel className="mt-3"
            items={[
              {
                altText: "Slide 1",
                caption: "Slide 1",
                key: 1,
                src: "https://picsum.photos/id/123/1200/600",
              },
              {
                altText: "Slide 2",
                caption: "Slide 2",
                key: 2,
                src: "https://picsum.photos/id/456/1200/600",
              },
              {
                altText: "Slide 3",
                caption: "Slide 3",
                key: 3,
                src: "https://picsum.photos/id/678/1200/600",
              },
            ]}
          />
        
        <Container className="mt-3 mb-4 rounded">
          <Row>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card>
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="12" className="mt-3 ">
              <Table className="table table-bordered  table-hover table-striped ">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Container className="  mb-4 bg-dark text-light  " >
        <Form>
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Email"
      type="email"
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
    />
  </FormGroup>
  {' '}
  <Button className="mb-3">
    Submit
  </Button>
</Form>
        </Container>

        {/* <!-- start footer --> */}
    {/* <!-- Footer --> */}
    <footer class="text-center text-lg-start bg-secondary text-light mt-3">
      {/* <!-- Section: Social media --> */}
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        class="text-center p-4"
        style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold " href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    {/* <!-- Footer --> */}
    


      </div>
    );
  }
}
export default Cart;
