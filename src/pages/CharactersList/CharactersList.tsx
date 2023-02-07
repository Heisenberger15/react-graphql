import { Link, useNavigate } from "react-router-dom";
import useCharacters from "../../hooks/useCharacters";
import "./CharactersList.css";

const CharactersList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>Spinner...</div>;
  if (error) return <div>{error?.message}...</div>;

  return (
    <div className="charactarList">
      {data?.characters?.results?.map((character) => (
        <Link key={character?.id} to={"/character" + "/" + character.id}>
          <img src={character?.image} />
          <h2>{character?.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
