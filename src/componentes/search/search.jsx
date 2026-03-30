import './search.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();//evita que recargue el formulario al enviarse
    navigate(`/peliculas/buscador?query=${query}`);
    setQuery('');
  };

  return (
    <form className="buscador" onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Encuentra tus series y peliculas favoritas"
        className="buscador-barra"
      />
    </form>
  );
}

export default Search;