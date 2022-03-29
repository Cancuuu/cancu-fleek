import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { Pagination, CircularProgress } from "@mui/material";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [renderedCharacters, setRenderedCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const MAX_QTY_CARDS = 6;
  const paginationNumber = Math.ceil(characters.length / MAX_QTY_CARDS);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  const handlePagination = () => {
    const start = (page - 1) * MAX_QTY_CARDS;
    const end = page * MAX_QTY_CARDS;
    setRenderedCharacters(characters.slice(start, end));
  };

  useEffect(() => {
    handlePagination();
  }, [characters, page]);

  return (
    <div className="h-screen w-screen">`Ω
      <div className="flex justify-center items-center mb-12 mt-4">
        <img
          className="w-56"
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt=""
        />
      </div>
      <main className="griddie">
        <div className="col-start-1 col-end-4"></div>
        <div className="col-start-4 col-end-12 grid gap-16 grid-cols-3">
          {renderedCharacters ? (
            renderedCharacters.map((character) => {
              return <CharacterCard character={character} key={character.id} />;
            })
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="col-start-4 col-end-12 m-16 flex justify-center items-center">
          <Pagination
            onChange={(e) => setPage(e.target.textContent)}
            count={paginationNumber}
            color="primary"
          />
        </div>
      </main>
    </div>
  );
}
