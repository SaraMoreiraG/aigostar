import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateCartItem } from "../actions/cartActions";
import Airfryers from "./Airfryers";
import Accesories from "./Accesories";

function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isBuying, setIsBuying] = useState(true);

  // Calculate the total price
  const totalPrice = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleQuantityChange = (itemId, quantityChange, itemQuantity) => {
    const newQuantity = itemQuantity + quantityChange;
    if (newQuantity >= 1 && newQuantity <= 10) {
      dispatch(updateCartItem(itemId, quantityChange));
    }
  };

  return (
    <div className="px-5 mx-5">
      {/************ SECOND NAVBAR **************/}
      <section className="d-flex my-3 px-5 mx-5" id="second-navbar">
        <Link to="/#home" className="second-navbar">
          <i className="fa-solid fa-house me-1"></i> Inicio &nbsp; {">"} &nbsp;
        </Link>
        <a className="second-navbar" href="/shopping-cart">Carrito</a>
      </section>
      <div className="px-5 mx-5 w-80">
        <hr className="grey-line"></hr>
      </div>
      {/************ SHOPPING CART **************/}
      {shoppingCart.length > 0 ? (
        <div>
          <div>
            <div className="table-responsive">
              <table className="cart-table m-5">
                <thead className="cart-table-header">
                  <tr>
                    <th className="text-center col-2 py-3">FOTO</th>
                    <th className="col-3 ps-3">NOMBRE DEL PRODUCTO</th>
                    <th className="text-center col-2">PRECIO</th>
                    <th className="text-center col-2">CANTIDAD</th>
                    <th className="text-center col-2">TOTAL</th>
                    <th className="text-center col-1 pe-2">X</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map((item, index) => (
                    <tr key={index}>
                      <td className="col-2 p-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="img-fluid"
                        />
                      </td>
                      <td className="col-3 ps-3">{item.name}</td>
                      <td className="text-center col-2 price">{item.price}€</td>
                      <td className="col-2">
                        <div className="row justify-content-center">
                          <div className="quantity d-flex col-6">
                            <p
                              className="quantity-text"
                              onClick={() =>
                                handleQuantityChange(item.id, -1, item.quantity)
                              }
                            >
                              -
                            </p>
                            <p>{item.quantity}</p>
                            <p
                              className="quantity-text"
                              onClick={() =>
                                handleQuantityChange(item.id, 1, item.quantity)
                              }
                            >
                              +
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-center col-2 price">
                        {item.price * item.quantity}€
                      </td>
                      <td
                        className="text-center col-1 pe-2"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        X
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-end mx-5 mb-5">
            <div className="col-4">
              <div className="total p-3">
                <span>TOTAL</span>
                <span className="price">{totalPrice}€</span>
              </div>
              <div className="start-buy p-3" onClick={() => setIsBuying(true)}>
                comprar
              </div>
            </div>
          </div>
          {isBuying && (
            <div className="d-flex justify-content-center">
            <div className="col-9">
            <div
              class="gradient-custom row"
            >
              <div class="col-md-3 d-flex align-items-center">
                <div
                  style={{
                    "margin-top": "50px",
                    "margin-left": "10px",
                  }}
                  class="text-center"
                >
                  <i
                    id="animationDemo"
                    data-mdb-animation="slide-right"
                    data-mdb-toggle="animation"
                    data-mdb-animation-reset="true"
                    data-mdb-animation-start="onScroll"
                    data-mdb-animation-on-scroll="repeat"
                    class="fas fa-3x fa-shipping-fast text-white"
                  ></i>
                  <h3 class="mt-3 text-white">Entrega garantizada</h3>
                </div>
              </div>
              <div class="col-md-9 p-3 justify-content-center">
                <div class="card card-custom pb-4">
                  <div class="card-body mt-0 mx-5">
                    <div class="text-center mb-3 pb-2 mt-3">
                      <h4 style={{ color: "#495057", fontWeight: "700" }}>DATOS DE ENVIO</h4>
                    </div>

                    <form class="mb-0">
                      <div class="row mb-4">
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form9Example1"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="form9Example1">
                              Nombre
                            </label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form9Example2"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="form9Example2">
                              Apellidos
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-4">
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form9Example3"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="form9Example3">
                              Dirección
                            </label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form9Example4"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="form9Example4">
                              Código postal
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-4">
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form9Example6"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="form9Example6">
                              Ciudad
                            </label>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-outline">
                            <input
                              type="email"
                              id="typeEmail"
                              class="form-control input-custom"
                            />
                            <label class="form-label" for="typeEmail">
                              Email
                            </label>
                            <span>*Seguimiento del pedido</span>
                          </div>
                        </div>
                      </div>

                      <div class="float-end ">
                        <button
                          type="submit"
                          class="start-buy p-3"
                        >
                          Confirmar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2>Añade algún producto a tu carrito:</h2>
          <div>
            <Airfryers />
            <Accesories />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
