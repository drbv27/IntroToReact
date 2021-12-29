import logo from "./logo.svg";
import "./App.css";

/* function App() {
  return <p>Orion Necio</p>;
} */
const Li = ({ children }) => {
  console.log(children);
  return <li className="clase-li">{children}</li>;
};
const App = () => {
  const actitud = "Necio";
  return (
    <ul className="miClaseCSS">
      <Li estado="necio">valor de li</Li>
    </ul>
  );
};

export default App;
