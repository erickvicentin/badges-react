//const element = document.createElement('h1');
//element.innerText = "Hello, Platzi Badges!";

//const container = document.getElementById('app');

//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
const container = document.getElementById("app");

//ReactDOM.render( que , donde);

ReactDOM.render(<BadgeNew />, container);
