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

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  //state for the pagination component
  const [paginationNumber, setPaginationNumber] = useState(0);
  // state for the query param page
  const [page, setPage] = useState(1);

  //ref for scrollTop
  const topRef = useRef();

  // get data from redux
  const filters = useSelector((state) => state.filter);
  const showMenu = useSelector((state) => state.menuButton);

  let API_URL = `https://rickandmortyapi.com/api/character/?page=${page}`;

  // fetch data from API_URL with query params added and set state
  const fetcher = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setPaginationNumber(data.info.pages);
    setCharacters(data.results);
  };

  const checkFilters = () => {
    // object destructuring for filters
    const { name, status, gender } = filters;

    //if filters has info add to API_URL----
    if (name !== "") {
      API_URL += `&name=${name}`;
      setPage(1);
    }

    if (status !== "") {
      API_URL += `&status=${status}`;
      setPage(1);
    }

    if (gender !== "") {
      API_URL += `&gender=${gender}`;
      setPage(1);
    }
    //--------------------------------

    fetcher();
  };

  // check if theres a filter applied to the search
  // when the filters state or the page changes
  useEffect(() => {
    checkFilters();
  }, [filters, page]);

  //scroll to top function
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
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

      <aside
        className={`z-[100] w-full h-full transition-all ${
          showMenu ? "" : "hidden"
        }`}
      >
        <FilterComponent characters={characters} />
      </aside>
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
