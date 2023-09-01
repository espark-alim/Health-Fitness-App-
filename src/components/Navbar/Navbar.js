import React from "react";
import img from "./logo.webp"
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      {/* <div className="d-flex w-75 my-1 mx-auto px-lg-5 p-lg-2"> */}
      <div className="container-fluid p-lg-2 px-lg-4 px-md-4 px-sm-5 ">
        <a className="navbar-brand fw-bolder" href="#">
          <img src={img}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 w-100 me-lg-5 mb-2 mb-lg-0 fw-semibold align-items-center  justify-content-sm-center justify-content-md-center justify-content-lg-end ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item d-sm-block d-lg-none d-md-block">
              <button
                type="button"
                class="btn px-4 py-2 btn-danger rounded-pill"
              >
                Try if free
              </button>
            </li>
          </ul>
        </div>
        <button
          type="button"
          class="btn px-4 py-2 btn-danger rounded-0 d-none d-sm-none d-lg-block d-md-none"
        >
          Try if free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
