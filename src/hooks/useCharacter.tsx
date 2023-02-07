import { useQuery, gql } from "@apollo/client";
import { Key } from "react";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;
const useCharacter = (id: Key) => {
  const { error, loading, data } = useQuery<{
    character: {
      readonly id: Key;
      name: string;
      image: string;
      gender: string;
      episode: { name: string; episode: string; readonly id: Key }[];
    };
  }>(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { error, loading, data };
};

export default useCharacter;
