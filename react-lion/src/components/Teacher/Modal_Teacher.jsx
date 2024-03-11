const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      position: 'relative',
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    },
    close: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      fontSize: '20px',
      color: '#333',
    },
  };
  
  const Modal = ({ isOpen, onClose, observation }) => {
    if (!isOpen) return null;
  
    return (
      <div style={modalStyle.overlay} onClick={onClose}>
        <div style={modalStyle.content} onClick={(e) => e.stopPropagation()}>
          <span style={modalStyle.close} onClick={onClose}>
            &times;
          </span>
          <div className="inf_ob">
            <br />
            <p>Observacion No: {observation.idobservacion}</p>
            <p>Documento usuario: {observation.usuario_documento}</p>
            <p>Observacion: {observation.informe}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  