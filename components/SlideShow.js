import React, { useState, useEffect } from "react";
import { TweenLite, Power4 } from "gsap";
import { SlideButton } from "../pattern/svg";
export const SlideShow = (props) => {
  const [onNext, btnNext] = useState();
  const [onPrev, btnPrev] = useState();
  let [count, slideSwitch] = useState(0);
  const navOn = (e) => {
    if (e.target.id === "next") {
      btnNext(true);
    } else if (e.target.id === "prev") {
      btnPrev(true);
    }
  };
  const navOff = (e) => {
    if (e.target.id === "next") {
      btnNext(false);
    } else if (e.target.id === "prev") {
      btnPrev(false);
    }
  };

  const btnSwitch = (e) => {
    btnNext(false);
    btnPrev(false);
    if (e.target.id === "next") {
      slideSwitch(count + 1);
      console.log(count);
    } else if (e.target.id === "prev") {
      slideSwitch(count - 1);
      console.log(count);
    }
  };

  const slideData = [
    {
      heading: "Using Drones and AI to Search for Roof Damage",
      body:
        "Our inspections utilize the latest technology including drones and AI smart software, the latest weather software, solid experience, and good judgment.",
      image: "images/photos/slide01.jpg",
    },
    {
      heading: "Filing a claim with your insurance company",
      body:
        "The property owner locates their insurance information, calls their insuance company and files a claim over the phone for the damage identified by SSR, then is assigned a claim number.",
      image: "images/photos/slide02.jpg",
    },
    {
      heading: "Production",
      body:
        "Once SSR receives the first check (Actual Cash Value Check), the homeowner then pays thier deductible to SSR.",
      image: "images/photos/slide03.jpg",
    },
    {
      heading: "Storm damage is our bread and butter",
      body:
        "We excel at finding it and working with insurance companies on storm damage claims.",
      image: "images/photos/slide04.jpg",
    },
    {
      heading: "There are faulty shingle models out there",
      body:
        "Some have lawsuits associated with faulty shingles, but not to worry, the lawsuits are for the insurance companies to worry about.",
      image: "images/photos/slide05.jpg",
    },
    {
      heading: "Discontinued Shingles",
      body: "A lesser known problem is discontinued shingle models.",
      image: "images/photos/slide06.jpg",
    },
  ];

  const disableButton = () => {
    buttonDisable(false);
  };
  const tweent = () => {
    TweenLite.fromTo(
      document.getElementById("textBox"),
      props.speedInSeconds,
      {
        css: { height: open ? "auto" : 0 },
        delay: 0,
        ease: Power4.easeOut,
      },
      {
        css: { height: open ? 0 : "auto" },
        delay: 0,
        onComplete: disableButton,
        ease: Power4.easeOut,
      }
    );
  };

  return (
    <div
      className="slideShow"
      style={{
        position: "relative",

        height: "100%",
      }}
      id="textBox"
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          display: "flex",
          padding: "30px",
          boxSizing: "border-box",
          webkitBoxSizing: "border-box",
          MozBoxSizing: "border-box",
          top: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url("${slideData[count].image}") no-repeat center center`,

          backgroundSize: "cover",

          color: "white",
          flexDirection: "column",
          justifyContent: `flex-end`,
        }}
      >
        <div style={{ width: "75%" }}>
          <h1>{slideData[count].heading}</h1>
          <p>{slideData[count].body}</p>
        </div>
        <div className="slideButtons">
          <div
            id="btnBack"
            style={{
              width: "30px",
              height: "30px",
              position: "relative",
              opacity: count > 0 ? 1 : 0.4,
            }}
          >
            {count > 0 ? (
              <div
                id="prev"
                className="slideBtnOverlay"
                onMouseOver={(e) => navOn(e)}
                onMouseOut={(e) => navOff(e)}
                onClick={(e) => btnSwitch(e)}
              ></div>
            ) : null}
            <SlideButton on={onPrev} />
          </div>

          <div
            style={{
              width: "30px",
              height: "30px",
              position: "relative",
              marginLeft: "10px",
              opacity: count < slideData.length - 1 ? 1 : 0.4,
            }}
          >
            {count < slideData.length - 1 ? (
              <div
                id="next"
                className="slideBtnOverlay"
                onMouseOver={(e) => navOn(e)}
                onMouseOut={(e) => navOff(e)}
                onClick={(e) => btnSwitch(e)}
              ></div>
            ) : null}
            <SlideButton on={onNext} />
          </div>
        </div>
      </div>
    </div>
  );
};
