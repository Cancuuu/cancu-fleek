import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FilterSection from "../../components/FilterSection";
import Pagination from "@mui/material/Pagination";
import CharacterCard from "../../components/CharacterCard";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [page, setPage] = useState(1);
  const MAX_QTY_CARDS = 6;
  console.log(characters)

  const filters = useSelector((state) => state.filter);

  console.log(filters);

  const handlePagination = (_characters) => {
    const start = (page - 1) * MAX_QTY_CARDS;
    const end = page * MAX_QTY_CARDS;
    setRenderedCharacters(_characters.slice(start, end));
  };

  useEffect(() => {
    const filteredCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(filters.name) &&
        character.status.toLowerCase().includes(filters.status) &&
        character.gender.toLowerCase().includes(filters.gender)
      );
    });
    handlePagination(filteredCharacters);
    setPaginationNumber(Math.ceil(filteredCharacters.length / MAX_QTY_CARDS))
  }, [characters, page, filters]);

  return (
    <Layout>
      <main className="griddie">
        <FilterSection characters={characters} />
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
      </main>
    </Layout>
  );
}
