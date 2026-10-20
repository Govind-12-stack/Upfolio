import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
   
    <nav class="navbar md:navbar-expand bg-light border-bottom bg-1">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarDrawer"
          aria-controls="navbarDrawer"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog
          class="drawer drawer-end"
          tabindex="-1"
          id="navbarDrawer"
          aria-labelledby="navbarDrawerLabel"
        >
          <div class="drawer-header">
            <h5 class="drawer-title" id="navbarDrawerLabel">
              Menu
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>
          <div class="drawer-body mb-2 md:mb-0">
            <form class="hstack gap-2" role="search">
              <ul class="nav navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link active fw-bold" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active fw-bold" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active fw-bold" to="/product">
                    Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active fw-bold" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active fw-bold" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </dialog>
      </div>
    </nav>
  );
}

export default Navbar;
