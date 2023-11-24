import SidebarHome from '../../components/Teacher/SidebarObservations_Teacher';
import ComponentSearch from '../../components/Teacher/ComponentSearch_Teacher';
import "../../css/Teacher_MakeObservation.css";

function MakeObservationT() {
    return (
        <div className="row" id="contenedor-wrap">
            <SidebarHome className="col-md-5 p-3" />

            <div className="col-md-7 p-3">
                <div id="buscadosEst">
                    <ComponentSearch/>
                    {/* faltan estilos de esta pagina  */}
                </div>

                <form className="formMakeobserver">
                    <h2>Observaciones</h2>
                    <input type="date" id="fecha" name="fecha" placeholder="Fecha" value="2023-06-14" />
                    <br />
                    <h2>Motivo</h2>
                    <div>
                        <div>
                            <button type="button" className="btn btn-light">
                                Académico
                            </button>
                        </div>
                        <br />
                        <div>
                            <button type="button" className="btn btn-light">
                                Convivencial
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripción"></textarea>
                        <br />
                        <textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Observaciones"></textarea>
                        <br />
                        <div className="form-group">
                            <h2>Firmas</h2>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            <br />
                            <input type="file" className="form-control-file" id="exampleFormControlFile2" />
                            <br />
                            <br />
                            <button type="button" className="btn btn-primary btn-lg btn-block">
                                Guardar Observación
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MakeObservationT;

