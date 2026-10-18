import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
   
    <nav class="navbar md:navbar-expand bg-light border-bottom bg-1">
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
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
                  <a class="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Product
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Support
                  </a>
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
