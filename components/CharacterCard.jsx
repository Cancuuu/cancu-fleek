import { Link } from "@mui/material";
import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl w-full h-full p-4 drop-shadow-lg hover:shadow-md bg-[#f0f2f4] transition-all">
      <img className="w-32 rounded-2xl" src={character.image} alt="" />
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
  );
};

export default CharacterCard;
