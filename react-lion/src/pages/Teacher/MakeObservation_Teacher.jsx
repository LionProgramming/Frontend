import React, { useState } from 'react';
import axios from 'axios';
import SidebarHome from "../../components/Teacher/SidebarObservations_Teacher";

import "../../css/Teacher_MakeObservation.css";

function MakeObservationT() {
  const [loading, setLoading] = useState(false);
  const [informe, setInforme] = useState("");
  const [usuarioDocumento, setUsuarioDocumento] = useState("");

  const postData = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/observaciones/",
        {
          informe: informe,
          usuario_documento: usuarioDocumento,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Respuesta del servidor:", response.data);
      window.location.reload();
    } catch (error) {
      alert("VERIFIQUE LOS DATOS DEL USUARIO");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containeMax bodyAdminPanel">
      <SidebarHome class="h-100" />
      <div className="containerform">
        <form className="formMakeobserver">
          <div className="form-group">
            <h1 className="title text-center">Observaciones</h1><br /><br />
          </div><br /><br /><br />

          <label>Documento</label>
          <input
            type="number"
            id="usuarioDocumento"
            value={usuarioDocumento}
            onChange={(e) => setUsuarioDocumento(e.target.value)}
            className="form-control"
          />

          <div className="form-group">
            <label >Informe:</label>
            <textarea
              id="informe"
              value={informe}
              onChange={(e) => setInforme(e.target.value)}
              className="form-control"
              rows="3"
              placeholder="Informe"
            ></textarea>
          </div>

          <div className="form-group">
            <br /><br />
            <button
              className="btn btn-dark btn-lg btn-block"
              onClick={postData}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Realizar registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MakeObservationT;

