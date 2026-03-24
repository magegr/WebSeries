function Info({ setVista, vistaActual }){
    const volver = () =>{
        setVista(vistaActual)
    }
    return (
        <>
         <button onClick={volver}>Volver</button>
         <p>Info funciona</p>
        </>
    )

} 

export default Info;