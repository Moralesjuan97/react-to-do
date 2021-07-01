//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Hooks from "./component/Hooks.js";

//render your react application
ReactDOM.render(<Hooks />, document.querySelector("#app"));
