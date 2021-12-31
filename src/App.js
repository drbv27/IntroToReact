import Button from "./Button";
const App = () => {
  const miVariable = false;

  if (miVariable) {
    return <p>Mi variable dio true!</p>;
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("Clik", e)}>Hola Mundo</h1>
      <Button onClick={() => console.log("Clikeado")}>Enviar</Button>
    </div>
  );
};
export default App;
