import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FilterSection from "../../components/FilterSection";
import Pagination from "@mui/material/Pagination";
import CharacterCard from "../../components/CharacterCard";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const [paginationNumber, setPaginationNumber] = useState(0);
  const [page, setPage] = useState(1);

  // selectors
  const filters = useSelector((state) => state.filter);

  console.log(filters);

  let API_URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const fetcher = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    setPaginationNumber(data.info.pages);
    setCharacters(data.results);
  };

  const checkFilters = () => {
    const { name, status, gender } = filters;
    console.log(name);
    console.log(status);
    console.log(gender);

    if (name !== "") {
      API_URL += `&name=${name}`;
    }

    if (status !== "") {
      API_URL += `&status=${status}`;
    }

    if (gender !== "") {
      API_URL += `&gender=${gender}`;
    }

    fetcher();
  };

  useEffect(() => {
    checkFilters();
  }, [filters, page]);

  return (
    <Layout>
      <main className="griddie">
        <FilterSection characters={characters} />
        <div className="col-start-4 col-end-12 grid gap-12 grid-cols-4 auto-rows-auto p-4 overflow-auto">
          {characters ? (
            characters.map((character) => {
              return <CharacterCard character={character} key={character.id} />;
            })
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="col-start-6 col-end-10 flex justify-center items-center m-16">
          <Pagination
            onChange={(e) => setPage(e.target.textContent)}
            count={paginationNumber}
            color="primary"
          />
        </div>
      </main>
    </Layout>
  );
}
