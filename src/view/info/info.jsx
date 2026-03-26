import { useParams, useNavigate } from "react-router-dom";

function Info() {
  const { id } = useParams();
  const navegate = useNavigate();

  const volver = () => {
    navegate(-1);
  };

  return (
    <>
      <button onClick={volver}>Volver</button>
      <p>hola</p>
      <p>ID: {id}</p>
    </>
  );
}

export default Info;