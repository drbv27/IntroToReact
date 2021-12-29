import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* const Li = ({ children, estado, raza, gordo, edad }) => {
  console.log(raza, gordo, edad);
  return (
    <li>
      {children} {estado}
    </li>
  );
};
const X = () => (
  <ul>
    <Li estado={"necio"} raza={"snowshoes"} gordo={false} edad={3}>
      Orion
    </Li>
    <Li estado="meloso">Tristan</Li>
    <Li estado="perezoso">Guido</Li>
  </ul>
);
ReactDOM.render(<X />, document.getElementById("root")); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
