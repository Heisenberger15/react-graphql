import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATION = gql`
  query GetLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        location {
          name
        }
      }
    }
  }
`;

export function Search() {
  const [name, setName] = useState("");

  const [getLocationsByCharacter, { data, loading, error, called }] = useLazyQuery<{
    characters: {
      results: {
        name: string;
        location: {
          name: string;
        };
      }[];
    };
  }>(GET_CHARACTER_LOCATION, {
    variables: { name },
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          getLocationsByCharacter();
        }}>
        Search
      </button>

      {loading && <>Spinner...</>}
      {error && <>Something went wrong...</>}

      {data && (
        <ul>
          {data.characters.results.map((char) => (
            <li>{char.location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
