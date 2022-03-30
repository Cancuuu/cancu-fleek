import React from "react";
import { useRouter } from "next/router";

const CharacterPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Character {id}</div>;
};

export default CharacterPage;
