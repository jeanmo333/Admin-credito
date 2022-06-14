import Paciente from "./Credito";

const ListadoCreditos = ({ creditos, setCredito, eliminarCredito }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {creditos && creditos.length ? (
        <>
          <h2 className="font-black text-2xl text-center">
            Listado de creditos
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Creditos y clientes
            </span>
          </p>

          {creditos.map((credito) => (
            <Paciente
              key={credito.id}
              credito={credito}
              setCredito={setCredito}
              eliminarCredito={eliminarCredito}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay notas de creditos
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando creditos {""}
            <span className="text-indigo-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoCreditos;
