import { useEffect, useState } from "react";
import { Pagination, CircularProgress } from "@mui/material";
import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ renderedCharacters, paginationNumber }) => {
  return (
    <div className="col-start-4 col-end-12 grid gap-16 grid-cols-3 auto-rows-auto h-full">
      {renderedCharacters ? (
        renderedCharacters.map((character) => {
          return <CharacterCard character={character} key={character.id} />;
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default CharacterGrid;
