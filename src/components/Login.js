import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="px-5 mx-5" id="login">
      {/************ SECOND NAVBAR **************/}
      <section className="d-flex my-3 px-5 mx-5" id="second-navbar">
        <Link to="/#home" className="second-navbar">
          <i className="fa-solid fa-house me-1"></i> Inicio &nbsp; {">"} &nbsp;
        </Link>
        <a className="second-navbar">Acceso</a>
      </section>
      <div className="px-5 mx-5 w-80">
        <hr className="grey-line"></hr>
      </div>
      {/************** FORM REGISTER ***************/}
      <div className="row justify-content-center text-center px-5 mx-5">
        <h2 className="my-5">Formulario de acceso</h2>
        <div className="row text-start col-6">
          <label htmlFor="email" className="mb-3 ms-0 ps-0">
            Email *
          </label>
          <br />
          <input type="email" className="mb-4"></input>

          <label htmlFor="password" className="mb-3 ms-0 ps-0">
            Contraseña *
          </label>
          <br />
          <input type="password" className="mb-4"></input>

			<div className="d-flex justify-content-end mb-3">
				<Link to="/" className="no-underline">
				<p className="forget-password">He olvidado mi contraseña</p>
				</Link>
			</div>

          <button className="btn-orange mb-4">Accede</button>
          <div className="text-center">
            <Link to="/register" className="btn-login">
              <a>O REGISTRATE</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
