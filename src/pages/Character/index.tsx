import "./index.css";
import { useParams } from "react-router-dom";
import useCharacter from "../../hooks/useCharacter";
import { Fragment } from "react";

const Character = () => {
  const { id = "" } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <>Loading</>;
  if (error) return <>Something went wrong</>;

  return (
    <div className="character">
      <img src={data?.character?.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data?.character?.name}</h1>
        <p>{data?.character?.gender}</p>
        <div className="character-episode">
          {data?.character?.episode?.map(({ name, episode, id }) => (
            <Fragment key={id}>
              <div>{name}</div> - <b>{episode}</b>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Character;
