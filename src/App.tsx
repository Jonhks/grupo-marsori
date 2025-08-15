import EnConstruccion from "./components/EnConstruccion";
import "./App.css";

function App() {
  // Si quieres mostrar solo la pantalla de construcción, retorna solo el componente
  return (
    <div className=" bg-blue-400">
      <EnConstruccion />
    </div>
  );
}

export default App;
