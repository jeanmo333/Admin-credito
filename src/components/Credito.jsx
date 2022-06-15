const Credito = ({ credito, setCredito, eliminarCredito }) => {
  const { nombre, deuda, fecha, descripcion, id } = credito;

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
    };
    return fechaNueva.toLocaleDateString("es-CL", opciones);
  };

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarCredito(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Deuda: {""}
        <span className="font-normal normal-case">
          {formatearCantidad(deuda)}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{formatearFecha(fecha)}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripcion: {""}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setCredito(credito)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Credito;
