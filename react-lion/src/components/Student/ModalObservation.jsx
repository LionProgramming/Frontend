import styled from 'styled-components';

const ModalObservation = ({children, state, setState}) => {
    return(
        <>
            {state &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h1>Observacion</h1>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => setState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default ModalObservation

const Overlay = styled.div`
    width: 100vw;
    height : 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    background-color: rgb(37, 37, 37);
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    color: #fff;
`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h1{
        font-weight: 500;
        
    }
`;

const BotonCerrar = styled.button`
   position: absolute; 
   top: 15px;
   right: 20px;
   width: 30px;
   height: 30px;
   border: none;
   background-color: rgb(107, 208, 226, 0.884);
   cursor: pointer;
   border-radius: 5px;
   color: #fff;

   &:hover{
    background: #F2F2F2;
   }

   svg{
    width: 100%;
    height: 100%;
   }
`




