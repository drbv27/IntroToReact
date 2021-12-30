import logo from "./logo.svg";
import "./App.css";

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
  return (
    <li style={{ ...estilo2, ...estilo({ bg: "#333" }) }} className="clase-li">
      {children}
    </li>
  );
};
const App = () => {
  const actitud = "Necio";
  return (
    <ul style={estilo({ bg: "#750" })} className="miClaseCSS">
      <Li estado="necio">valor de li</Li>
    </ul>
  );
};

export default App;
