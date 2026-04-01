import { useState } from "react";
import ReactPlayer from 'react-player'
import './Modal.css';

function Modal({video}) {
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
               <ReactPlayer 
                    style={{ display: 'block', width: '200%', height: '600px' }}
                    allowFullScreen
                    src={`https://www.youtube.com/watch?v=${video}`}
                >
                </ReactPlayer>
            </div>
        </>
    )

}

export default Modal;