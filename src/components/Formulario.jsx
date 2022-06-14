import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ creditos, setCreditos, credito, setCredito }) => {
  const [nombre, setNombre] = useState("");
  const [deuda, setDeuda] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(credito).length > 0) {
      setNombre(credito.nombre);
      setDeuda(credito.deuda);
      setFecha(credito.fecha);
      setDescripcion(credito.descripcion);
    }
  }, [credito]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, deuda, fecha, descripcion].includes("")) {
      console.log("Hay Al Menos un campo vacio");

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoCredito = {
      nombre,
      deuda,
      fecha,
      descripcion,
    };

    if (credito.id) {
      // Editando el Registro
      objetoCredito.id = credito.id;
      const creditosActualizados = creditos.map((creditoState) =>
        creditoState.id === credito.id ? objetoCredito : creditoState
      );

      setCreditos(creditosActualizados);
      setCredito({});
    } else {
      // Nuevo registro
      objetoCredito.id = generarId();
      setCreditos([...creditos, objetoCredito]);
    }

    // Reiniciar el form
    setNombre("");
    setDeuda("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl text-center">
        Agregar nota de credito
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Credito y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Cliente
          </label>
          <input
            id="cliente"
            type="text"
            placeholder="Nombre del Cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="deuda"
            className="block text-gray-700 uppercase font-bold"
          >
            Deuda
          </label>
          <input
            id="deuda"
            type="number"
            placeholder="deuda del cliente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={deuda}
            onChange={(e) => setDeuda(Number(e.target.value))}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripcion
          </label>
          <textarea
            id="descripcion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={credito.id ? "Editar Credito" : "Agregar Credito"}
        />
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
      </form>
    </div>
  );
};

export default Formulario;
