import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio")
      setError(true)
      return
    }
    setError(false)
    //Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      //editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      )

      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //reinciar el formulario
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <section className="mx-3 md:w-1/2 lg:2/5">
      <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center">
        Añade Pacientes y{" "}
        <span className="font-bold text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="px-5 py-5 mb-10 bg-white rounded-lg shadow-md"
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre de la Mascota
          </label>
          <input
            id="mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block font-bold text-gray-700 uppercase"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block font-bold text-gray-700 uppercase"
          >
            Email de contacto
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Cotacto Propietario"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block font-bold text-gray-700 uppercase"
          >
            Alta
          </label>
          <input
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block font-bold text-gray-700 uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder="Describe los Síntomas"
            className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="w-full p-3 font-bold text-white uppercase transition-colors bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </section>
  )
}

export default Formulario
