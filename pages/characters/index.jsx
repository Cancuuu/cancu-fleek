import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import { Pagination, CircularProgress } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
};

export default function Characters({ characters }) {
  const [renderedCharacters, setRenderedCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const MAX_QTY_CARDS = 6;
  const paginationNumber = Math.ceil(characters.length / MAX_QTY_CARDS);

  const handlePagination = () => {
    const start = (page - 1) * MAX_QTY_CARDS;
    const end = page * MAX_QTY_CARDS;
    setRenderedCharacters(characters.slice(start, end));
  };

  useEffect(() => {
    handlePagination();
  }, [characters, page]);

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center mb-12 mt-4">
        <img
          className="w-56"
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt=""
        />
      </div>
      <main className="griddie">
        <div className="col-start-1 col-end-4 flex flex-col items-center  border-r border-inherit mr-8">
          <SearchIcon style={{ cursor: "pointer", padding: "17px" }} />
          <Autocomplete
            id="free-solo-dem"
            freeSolo
            sx={{ width: 300 }}
            options={characters.map((character) => ({
              label: character.name,
              value: character.id,
            }))}
            renderInput={(params) => <TextField {...params} label="freeSolo" />}
          />
          <Autocomplete
            className="mt-4"
            disablePortal
            id="combo-box-demo"
            options={characters.map((character) => ({
              label: character.name,
              value: character.id,
            }))}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
          <Autocomplete
            className="mt-4"
            disablePortal
            id="combo-box-demo"
            options={characters.map((character) => ({
              label: character.name,
              value: character.id,
            }))}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Gender filter" />
            )}
          />
        </div>

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
