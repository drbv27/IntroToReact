import Button from "./Button";
const App = () => {
  return (
    <div>
      <h1 onClick={(e) => console.log("Clik", e)}>Hola Mundo</h1>
      <Button onClick={() => console.log("Clikeado")}>Enviar</Button>
    </div>
  );
};
export default App;
