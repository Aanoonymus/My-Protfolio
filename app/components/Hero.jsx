import React from "react";
import "./Hero.scss";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-type-wrapper">
        <h1 className="hero-title">
          Hi, I am Muhammad Muaz, Creative Front-end Developer
        </h1>
        <p className="hero-info">
          I’m 15 yo, born in Uzbekistan in the city of Tashkent, 9th grade
          student. I really love creating websites and get a lot of pleasure
          from it, I take it seriously because it’s my profession. I am a
          perfectionist who tries to do everything as efficiently as possible.
          In addition, I have a B2 level of English and have an excellent
          command of Russian and Uzbek languages.
        </p>

        <a
          style={{ textDecoration: "none" }}
          href="/MuhammadMuaz Nematullaev.pdf"
          download
        >
          <code className="hero-btn"> Download Resume</code>
        </a>
      </div>
    </div>
  );
};

export default Hero;
