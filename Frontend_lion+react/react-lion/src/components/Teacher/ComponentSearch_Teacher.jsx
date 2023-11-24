import '../../css/Teacher_ComponentSearch.css'

const ComponentSearchT = () => {
  return (
    <div className='row d-flex justify-content-center' id='div-r'>
      <div className='col-12 col-sm-8 d-flex align-items-center ' >
        <input
          type="text"
          placeholder="Buscar observación..."
          className="search-input form-control border border-white w-100"
        />
        <button className="search-button btn btn-dark btn-block" id='button-search'>Buscar</button>
      </div>
    </div>
  );
};

export default ComponentSearchT;
