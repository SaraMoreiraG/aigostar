import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import cart from "../../assets/images/icon-basket.png";

function AddToCartButton({ item, style }) {
  // Get the Redux dispatch function
  const dispatch = useDispatch();

  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);

  // Local state to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Check if the item is in the cart
  useEffect(() => {
    const inCart = cartItems.some((cartItem) => cartItem.id === item.id);
    setIsInCart(inCart);
  }, [cartItems, item.id]);

  // Function to handle adding the item to the cart
  const handleAddToCart = (e) => {
    // Prevent the default navigation action
    e.preventDefault();
    // Dispatch the addToCart action with the item
    dispatch(addToCart(item));
  };

  return (
    <>
      {/* Img & Text Effect Button*/}
      {style === "btn-orange icon-button moving" && (
        <button
          onClick={handleAddToCart}
          className={isInCart ? `${style} is-in-cart` : style}
        >
          {isInCart ? "Añadido al carrito" : "Añadir al carrito"}
          {isInCart ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <img src={cart} alt="Icon" />
          )}
        </button>
      )}
      {/* Table Small Button */}
      {style === "table-btn" && (
        <button
          onClick={handleAddToCart}
          className={
            isInCart ? `${style} btn-in-cart` : `${style} btn-not-cart`
          }
        ></button>
      )}
      {/* Square moving button */}
      {style === "btn-cart right-to-left margin product-card m-0" && (
        <button
          onClick={handleAddToCart}
          className={
            isInCart ? `${style} btn-in-cart` : `${style} btn-not-cart`
          }
        ></button>
      )}
    </>
  );
}
export default AddToCartButton;