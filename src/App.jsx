import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoCreditos from "./components/ListadoCreditos";

function App() {
  const [creditos, setCreditos] = useState([]);
  const [credito, setCredito] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const creditosLS = JSON.parse(localStorage.getItem("creditos")) ?? [];
      setCreditos(creditosLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("creditos", JSON.stringify(creditos));
  }, [creditos]);

  const eliminarCredito = (id) => {
    const creditosActualizados = creditos.filter(
      (credito) => credito.id !== id
    );
    setCreditos(creditosActualizados);
  };

  return (
    <div className="container mx-auto mt-20 max-w-5xl">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          creditos={creditos}
          setCreditos={setCreditos}
          credito={credito}
          setCredito={setCredito}
        />
        <ListadoCreditos
          creditos={creditos}
          setCredito={setCredito}
          eliminarCredito={eliminarCredito}
        />
      </div>
    </div>
  );
}

export default App;
