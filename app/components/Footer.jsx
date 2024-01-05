import React from "react";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li>
          <Link href="https://www.instagram.com/invites/contact/?i=1m4zh1j3sqv5x&utm_content=s7t7k1b">
            <Image src="/insta.svg" alt="Logo" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Aanoonymus">
            <Image src="/github.svg" alt="Logo" width={30} height={30} />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/profile.php?id=100076636806952&mibextid=ZbWKwL">
            <Image src="/facebook.svg" alt="Logo" width={30} height={30} />
          </Link>
        </li>
      </ul>
      <p className="copyright">Copyright ©2024 All rights reserved </p>
    </div>
  );
};

export default Footer;
