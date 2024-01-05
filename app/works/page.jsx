import React from "react";
import "./works.scss";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <div className="works">
      <h1 className="works-title">Works</h1>
      <div className="works-wrapper">
        <div className="works-item">
          <Image
            style={{ borderRadius: "6px" }}
            src="/weather.jpg"
            alt="Weather-app"
            width={245}
            height={200}
          />
          <div className="work-item-info-wrapper">
            <h3 className="work-item-title">Weather App</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
              <button className="work-item-date">2023</button>
              <Link
                href="https://aanoonymus.github.io/Weather-application/"
                className="work-item-type"
              >
                Click to see
              </Link>
              <Link href="https://github.com/Aanoonymus/Weather-application.git">
                <Image src="/github.svg" alt="Logo" width={30} height={30} />
              </Link>
            </div>
            <p className="work-item-info">
              This is a special application that shows weather forecasts from
              all countries and cities of the world. It was created by using
              HTML, CSS and JavaScript and designed for laptops, phones and
              tablets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
