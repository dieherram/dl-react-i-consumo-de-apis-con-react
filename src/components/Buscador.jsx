
const Buscador = ({ letraBusqueda, setLetraBusqueda }) => {

  const abecedario = "abcdefghijklmnopqrstuvwxyz".split("")

  const handleLetraMenu = (letraArg) => {
    setLetraBusqueda(letraArg)
  }

  return (
    <div className="buscador-container d-flex flex-column gap-3 mb-3 text-center">
      <h2 className="text-start">Select a letter:</h2>
      <div className="letras-container d-flex justify-content-center flex-wrap justify-content-between gap-2">
        {abecedario.map(letra => (
          <button className="btn btn-primary" onClick={() => handleLetraMenu(letra)}>{letra}</button>
        ))}
      </div>
      <div className="selected-info-container d-flex gap-5">
        <p className="text-start fw-light">Selected Letter: <span className="fw-semibold">{letraBusqueda.toUpperCase()}</span></p>

      </div>
    </div>
  )
}

export default Buscador