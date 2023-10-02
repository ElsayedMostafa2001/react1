import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../HomePage/Navbar";
import { NavLink } from "react-router-dom";
function Cart() {
  const {
    emptyCart,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    totalItems,
    cartTotal
  } = useCart();

  if (isEmpty) {
    return <h2 className="text-center text-danger ">Your cart is empty</h2>;
  }

  return (
    <div>
      <h1 className="text-center text-secondary">
        Cart ({totalUniqueItems})
        <button className="btn btn-danger" onClick={() => emptyCart()}>
          Delete All Items
        </button>
      </h1>

      <Container>
        <Row>
          <Col md="12">
            <table className="table table-dark table-bordered text-center">
              <thead>
                <th> Name </th>
                <th> Quantity </th>
                <th> Price </th>
                <th> Opperation </th>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.quantity} x {item.title}
                    </td>
                    <td>{item.quantity} </td>
                    <td>{item.price * item.quantity}$ </td>

                    <td>
                      <button
                        className="btn btn-success "
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="text-center text-info"> Total Numbers of Items(<span className="text-warning">{totalItems} </span>) And Total Of Price(<span className="text-warning"> {cartTotal}$ </span> )</h3>
            <div className="text-center">
            <NavLink className=" btn btn-outline-success mx-3"  to="/">Backe Home</NavLink>
            <NavLink className=" btn btn-outline-primary mx-3 "  to="/Product">Payment</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function CartPage() {
  return (
    <CartProvider>
      <Navbar />
      <div className="mt-5 pt-5"></div>
      <Cart />
    </CartProvider>
  );
}
export default CartPage;
