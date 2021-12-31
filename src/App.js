import Button from "./Button";
const App = () => {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Button onClick={() => console.log("Clikeado")}>Enviar</Button>
    </div>
  );
};
export default App;
