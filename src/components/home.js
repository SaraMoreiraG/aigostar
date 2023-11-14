import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Airfryers from "./Airfryers";
import Accesories from "./Accesories";
import Recipes from "./Recipes";
import { scrollToSection } from "../utils/scrollUtils";

import "../App.css";

const Home = () => {
  // Import necessary dependencies and hooks
  const airfryers = useSelector((state) => state.airfryers);

  return (
    <>
      {/******** BANNER ********/}
      <section>
        <div>
        <img
          src="https://aigostar-img.s3.amazonaws.com/banner1.jpg"
          alt="airfryer o freidora de aire"
          className="img-fluid"
        />
        </div>
      </section>
      {/******** CATEGORIAS ********/}
      <section className="row p-5 py-5">
        <div
          className="magic-div col-4 p-1"
          onClick={() => scrollToSection("airfryers")}
        >
          <img
            src="https://aigostar-img.s3.amazonaws.com/freidora-aire-airfryer-cat1.png"
            alt="airfryer o freidora de aire barata"
            className="img-fluid zoom"
          />
          <div className="text-overlay up-effect">
            <button className="btn-orange btn-categories">
              Freidoras de aire
            </button>
          </div>
        </div>
        <div
          className="magic-div col-4 p-3"
          onClick={() => scrollToSection("accessories")}
        >
          <img
            src="https://aigostar-img.s3.amazonaws.com/accesorios-freidora-de-aire-cat2.jpg"
            alt="accesorios para airfryer o freidora de aire"
            className="img-fluid zoom"
          />
          <div className="text-overlay up-effect">
            <button className="btn-orange btn-categories">Accesorios</button>
          </div>
        </div>
        <div
          className="magic-div col-4 p-3"
          onClick={() => scrollToSection("recipes")}
        >
          <img
            src="https://aigostar-img.s3.amazonaws.com/recetas-freidora-aire-cat3.jpg"
            alt="recetas para airfryer o freidora de aire"
            className="img-fluid zoom"
          />
          <div className="text-overlay up-effect">
            <button className="btn-orange btn-categories">Recetas</button>
          </div>
        </div>
      </section>
      {/******** BANNER PROMO ********/}
      <section
        className="row my-5 p-5 justify-content-center align-items-center"
        id="banner"
      >
        <div className="text-center col-6">
          <h1 className="mb-0">¡En oferta esta semana!</h1>
          <div className="d-flex justify-content-center">
            <hr></hr>
          </div>
          <p>{airfryers[2].description}</p>
          <p className="price">{airfryers[2].price}€</p>
          <button className="btn-orange mt-4">Comprar ahora</button>
        </div>
        <div className="d-flex justify-content-center col-4 p-5">
          <Link to="/product/2">
            <img
              src={airfryers[2].imgtable}
              alt="freidorea de aire o airfryer en oferta"
              className="img-fluid zoom"
            />
          </Link>
        </div>
      </section>
      {/******** AIRFRYERS ********/}
      <Airfryers />
      {/******** BANNER AIRFRYER + KIT ********/}
      <section
        className="row m-5 p-5 justify-content-center align-items-center"
        id="banner"
      >
        <div className="text-center col-6">
          <h1 className="mb-0">En oferta esta semana!</h1>
          <div className="d-flex justify-content-center">
            <hr></hr>
          </div>
          <p>{airfryers[2].description}</p>
          <p className="price">{airfryers[2].price}€</p>
          <button className="btn-orange mt-4">Comprar ahora</button>
        </div>
        <div className="d-flex justify-content-center col-4 p-5">
          <img
            src={airfryers[2].imgtable}
            alt="freidorea de aire o airfryer en oferta"
            className="img-fluid"
          />
        </div>
      </section>
      {/******** ACCESSORIES ********/}
      <Accesories />
      {/******** RECEIPES ********/}
      <Recipes />
      {/******** SHIPPING DETAILS ********/}
      <section className="row mx-5 p-5">
        <div className="shipping d-flex justify-content-center align-items-center py-4 col-4">
          <i className="fa-solid fa-truck-moving"></i>
          <div>
            <h5 className="mb-0">FREE SHIPPING</h5>
            <p className="mb-0">For all order over 99$</p>
          </div>
        </div>
        <div className="shipping d-flex justify-content-center align-items-center py-4 col-4">
          <i className="fa-regular fa-clock"></i>
          <div>
            <h5 className="mb-0">DELIVERY ON TIME</h5>
            <p className="mb-0">If good have prolems</p>
          </div>
        </div>
        <div className="shipping d-flex justify-content-center align-items-center py-4 col-4">
          <i className="fa-regular fa-credit-card"></i>
          <div>
            <h5 className="mb-0">SECURE PAYMENT</h5>
            <p className="mb-0">100% secure payment</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
