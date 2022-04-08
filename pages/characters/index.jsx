import { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import FilterSection from "../../components/FilterSection";
import Pagination from "@mui/material/Pagination";
import CharacterCard from "../../components/CharacterCard";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import FilterComponent from "../../components/FilterComponent";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const [paginationNumber, setPaginationNumber] = useState(0);
  const [page, setPage] = useState(1);
  const scrollTopActive = true;
  const topRef = useRef();
  // selectors
  const filters = useSelector((state) => state.filter);
  const showMenu = useSelector((state) => state.menuButton);

  console.log(filters);

  let API_URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const fetcher = async () => {
    setPage(1);
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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      {scrollTopActive && (
        <IconButton
          className="z-[1000] fixed right-2 bottom-2 mb-2 mr-2 rounded shadow-2xl"
          aria-label="delete"
          color="primary"
          onClick={() => {
            scrollToTop();
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
      <div
        className={`z-[100] w-full h-full transition-all ${
          showMenu ? "" : "hidden"
        }`}
      >
        <FilterComponent characters={characters} />
      </div>
      <main ref={topRef} className="griddie">
        <FilterSection characters={characters} />
        <div className="lg:col-start-4 lg:col-end-13 col-start-1 col-end-13 grid gap-12 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-4">
          {characters ? (
            characters?.map((character) => {
              return <CharacterCard character={character} key={character.id} />;
            })
          ) : (
            <CircularProgress />
          )}
        </div>
      </main>
      <div className="lg:col-start-6 lg:col-end-10 flex justify-center items-center my-8">
        <Pagination
          onChange={(e) => setPage(e.target.textContent)}
          count={paginationNumber}
          color="primary"
        />
      </div>
    </Layout>
  );
}
