import { useEffect, useState } from "react";
import { Pagination, CircularProgress } from "@mui/material";
import CharacterCard from "./CharacterCard";

const CharacterGrid = ({renderedCharacters, paginationNumber}) => {


  return (
    <div className="col-start-4 col-end-12 grid gap-16 grid-cols-3 auto-rows-auto h-full">
      {renderedCharacters ? (
        renderedCharacters.map((character) => {
          return <CharacterCard character={character} key={character.id} />;
        })
      ) : (
        <CircularProgress />
      )}
      <div className="col-start-2 col-end-2 flex justify-center items-center">
        <Pagination
          onChange={(e) => setPage(e.target.textContent)}
          count={paginationNumber}
          color="primary"
        />
      </div>
    </div>
  );
};

export default CharacterGrid;
