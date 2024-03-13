import {Modal,ModalHeader,ModalFooter} from 'reactstrap';
import {useState} from 'react';


const ModalSucces=()=>{
const[modalConsultar,setModalConsultar]=useState(true);


const closeModal=()=>{
    setModalConsultar(false)
    window.location.reload();
}
return(
    <Modal isOpen={modalConsultar}>
    <ModalHeader>
        <p className='text-center'>Su registro ha sido exitoso</p>
    </ModalHeader>
    <ModalFooter>
    <button className="btn btn-sm" id="modal-icon-cancel" onClick={() =>closeModal()}>
            <i className="bi bi-x-lg"></i>
          </button>
    </ModalFooter>
</Modal>
)
}

export default ModalSucces;