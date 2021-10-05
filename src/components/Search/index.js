import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(false)
  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError, setIsloading))
    setInput("");
  };

  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} // faça com que o onChange troque o setInput
          placeholder="Procure seu Digimon"
        ></input>
      </div>
      <div>
        {error && <p>Não conseguimos encontrar nenhum Digimon com esse nome</p>}
        {isloading && <p>Carregando</p>}
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;