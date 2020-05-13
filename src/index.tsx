import * as React from "react";
import { render } from "react-dom";
import * as ReactGA from "react-ga";

import { App } from "./components/App";
import "./assets/scss/App.scss";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (): void => {
    navigator.serviceWorker.register("/service-worker.js").catch();
  });
}

ReactGA.initialize("UA-90440102-5");

const rootEl: Element = document.getElementById("root");

render(<App />, rootEl);

console.log(
  "%cFollow the rules:",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);

console.log(
  "%c1. Go to work if you can't work from home if you work in some places but not other places, but do not travel to work using standard means. Unicycles and sanitised emus are acceptable.",
  "color:green"
);

console.log(
  "%c2. If you are not unable to not travel by non-standard means then maybe don't not go to work, unless it is one of those places which may or may not be advised to remain not open.",
  "color:green"
);

console.log(
  "%c3. You may go outside of your house on more than one occasion to play sports or not play sports as long as the sport involves two people or more or fewer than two people, staying two meters or fewer from others and yourself. Extended wiff-waff tables may or may not be provided at 80% or 60% of their usual cost.",
  "color:green"
);
