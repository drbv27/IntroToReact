import Button from "./Button";
const arr = ["orion", "tristan", "guido"];
const App = () => {
  const miVariable = false;

  if (miVariable) {
    return <p>Mi variable dio true!</p>;
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("Clik", e)}>Hola Mundo</h1>
      {arr.map((el) => (
        <p key={el}>{el}</p>
      ))}
      <Button onClick={() => console.log("Clikeado")}>Enviar</Button>
    </div>
  );
};
export default App;
