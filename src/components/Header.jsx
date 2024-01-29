import React from "react";

const Header = () => {
  return (
    <>
      <div className="border d-flex justify-content-between my-2 p-2 p-md-3  ">
        <h1>
          <span className=" text-success ">B</span>uzz
        </h1>
        <div
          className="d-none d-md-flex align-items-center gap-2 gap-md-4"
          style={{ fontSize: "1.2rem" }}>
          <div className=" d-flex gap-2 gap-md-4 ">
            <a className="text-decoration-none text-black  " href="#">
              Home
            </a>
            <a className="text-decoration-none text-black " href="#">
              Products
            </a>
            <a className="text-decoration-none text-black " href="#">
              Category
            </a>
            <a className="text-decoration-none text-black " href="#">
              Contact
            </a>
            <a className="text-decoration-none text-black " href="#">
              About
            </a>
          </div>
          <div className="d-flex gap-2 ">
            <img src="/cart.svg" alt="" />
            <img src="/profile.svg" alt="" />
          </div>
        </div>
        <img src="/menu.svg" className=" d-block d-md-none " alt="" />
      </div>
    </>
  );
};

export default Header;
