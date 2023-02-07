import { useQuery, gql } from "@apollo/client";
import { Key } from "react";

const GET_CHARACTERS = gql`
  query {
    characters {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        type
      }
    }
  }
`;
const useCharacters = () => {
  const { error, loading, data } = useQuery<{
    characters: {
      results: { id: Key; name: string; image: string; type: string }[];
    };
  }>(GET_CHARACTERS);

  return { error, loading, data };
};

export default useCharacters;
