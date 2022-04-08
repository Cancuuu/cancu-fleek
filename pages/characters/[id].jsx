import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
  const [value, setValue] = useState(0);
  const [epCharacterData, setEpCharacterData] = useState([]);

  console.log(epCharacterData);

  useEffect(() => {
    const fiveEpisodes = character.episode.slice(0, 5);
    fiveEpisodes.map((episode) => {
      fetch(episode)
        .then((res) => res.json())
        .then((data) => {
          setEpCharacterData((epCharacterData) => [...epCharacterData, data]);
        });
    });
  }, [character.episode]);

  return (
    <Layout backIcon={true}>
      <div className="flex flex-col justify-center mt-8">
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <Image
            width={256}
            height={256}
            className="w-64 rounded-2xl"
            src={character.image}
            alt=""
          />
          <div className="m-8">
            <p>
              <b>Id:</b> {character.id}
            </p>
            <p>
              <b>Name:</b> {character.name}
            </p>
            <p>
              <b>Status:</b> {character.status}
            </p>
            <p>
              <b>Specie:</b> {character.species}
            </p>
            <p>
              <b>Gender:</b> {character.gender}
            </p>
            <p>
              <b>Origin:</b> {character.origin.name}
            </p>
            <p>
              <b>Character:</b> {character.origin.name}
            </p>
            <p>
              <b>Created:</b> {character.created}
            </p>
          </div>
        </div>
        <div className="flex-col w-full justify-center items-center">
          <h2 className="text-2xl">Episode Info</h2>
          <Tabs
            value={value}
            onChange={(e, value) => setValue(value)}
            centered
            variant="scrollable"
            className="w-full mb-8"
          >
            <Tab value={0} label="Item One" />
            <Tab value={1} label="Item Two" />
            <Tab value={2} label="Item Three" />
            <Tab value={3} label="Item Four" />
            <Tab value={4} label="Item Five" />
          </Tabs>
          <div className="flex flex-col items-start">
            <p>
              <b>Episode Name:</b> {epCharacterData[value]?.name}
            </p>
            <p>
              <b>Air Date:</b> {epCharacterData[value]?.air_date}
            </p>
            <p>
              <b>Episode:</b> {epCharacterData[value]?.episode}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CharacterPage;
