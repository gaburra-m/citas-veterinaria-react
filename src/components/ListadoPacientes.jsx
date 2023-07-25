import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <section className="md:w-1/2 lg:3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado Pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Administra tus{" "}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No hay Pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center">
            Comienza agregando pacientes{" "}
            <span className="font-bold text-indigo-600">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </section>
  )
}

export default ListadoPacientes
