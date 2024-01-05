"use client";

import React from "react";
import "./Nav.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentRoute = usePathname();

  return (
    <nav className="navbar">
      <Image src="/NMlogo.png" alt="Logo" width={150} height={150} />
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link
            className={
              currentRoute === "/"
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            href="/"
          >
            About
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link
            className={
              currentRoute === "/works"
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            href="/works"
          >
            Works
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link
            className={
              currentRoute === "/contact"
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
