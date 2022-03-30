import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopBar from "../../components/TopBar";
import Layout from "../../components/Layout";

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();

  const paths = data.results.map((character) => {
    return {
      params: { id: character.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      character: data,
    },
  };
};

const CharacterPage = ({ character }) => {
  return (
    <Layout>
      <main className="griddie">
        <div className="col-start-3 col-end-11 flex flex-col items-center">
          <Image
            width={256}
            height={256}
            className="w-64 rounded-2xl"
            src={character.image}
            alt=""
          />
          <h1 className="text-lg mt-4">{character.name}</h1>
          <p className="text-sm">{character.species}</p>
          <p className="text-sm">{character.status}</p>
          <hr />
          <Link
            className="py-2 px-4 mt-4 border-2 border-gray-400 rounded-md no-underline text-black"
            href={`/characters/${character.id}`}
          >
            <a>Details</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default CharacterPage;
