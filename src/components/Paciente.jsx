function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const fechaMX = fecha.split("-").reverse().join("/")

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?")

    if (respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <article className="px-5 py-5 mx-3 my-10 bg-white rounded-md shadow-md">
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fechaMX}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-700"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="px-10 py-2 font-bold text-white uppercase bg-red-700 rounded-md hover:bg-red-800"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </article>
  )
}

export default Paciente
