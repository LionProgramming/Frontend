
const ComponentSearchT = () => {
  return (
    <div id="informacion1" className="col-md-7 p-3">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar observación..."
          className="search-input form-control border border-white w-100"
        />
        <button className="search-button btn btn-dark btn-block">Buscar</button>
      </div>
    </div>
  );
};

export default ComponentSearchT;
