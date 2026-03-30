import { useState } from "react";
import './Modal.css';

function Modal({url}) {
    const [clase, setClase]=useState('modal')

    const showModal=() => {
        setClase('showmodal')
    }

    const closeModal=() => {
        setClase('modal')
    }
    return(
        <>
        
            {clase === 'modal' ? (<button className="trailer" onClick={showModal}>Ver Trailer</button>) : (<button className="trailer" onClick={closeModal}>Cerrar</button>)}
            <div className= {clase}>
                <iframe className="video"
                    allowFullScreen
                    src={url}
                >
                </iframe>
            </div>
        </>
    )

}

export default Modal;