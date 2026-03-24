import './search.css'

function Search({ setQuery, setVista }){

    const handleSubmit = (e) => {
        e.preventDefault();
        setVista("buscador");
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="buscador">
        <input type="search" onChange={handleChange} placeholder="Encuentra tus series y peliculas favoritas" className="buscador-barra"/>
        </form>
    );
}

export default Search;


