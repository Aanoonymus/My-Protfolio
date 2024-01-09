"use client";

import React, { useRef } from "react";
import "./Nav.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const Nav = () => {
  const currentRoute = usePathname();
  const navRef = useRef();
  const toggleHamburger = useRef();
  const toggleClose = useRef();

  const handleToggleNav = () => {
    navRef.current.classList.toggle("responsive-nav");
    toggleHamburger.current.classList.toggle("toggleHamburger");
    toggleClose.current.classList.toggle("toggleClose");
  };

  return (
    <>
      <header>
        <Image src="/NMlogo.png" alt="Logo" width={150} height={150} />
        <nav ref={navRef} id="navbar" className="navbar">
          <div className="navbar-list">
            <Link
              className={
                currentRoute === "/"
                  ? "navbar-list-item active"
                  : "navbar-list-item"
              }
              href="/"
            >
              About
            </Link>
            <Link
              className={
                currentRoute === "/works"
                  ? "navbar-list-item active"
                  : "navbar-list-item"
              }
              href="/works"
            >
              Works
            </Link>

            <Link
              className={
                currentRoute === "/contact"
                  ? "navbar-list-item active"
                  : "navbar-list-item"
              }
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </nav>
        <button
          ref={toggleHamburger}
          onClick={handleToggleNav}
          className="hamburger"
        >
          <RxHamburgerMenu />
        </button>
        <button ref={toggleClose} onClick={handleToggleNav} className="close">
          <VscChromeClose />
        </button>
      </header>
    </>
  );
};

export default Nav;
