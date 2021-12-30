import logo from "./logo.svg";
/* import "./App.css"; */
import "./main.css";

/* function App() {
  return <p>Orion Necio</p>;
} */
/* const estilo = {
  backgroundColor: "#456",
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
}; */
const estilo2 = {
  boxShadow: "0 5px 3px rgba(0,0,0,0.5)",
};
const estilo = ({ bg = "#222" }) => ({
  backgroundColor: bg,
  color: "#fff",
  padding: "10px 15px",
  margin: "10px 15px",
});
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
