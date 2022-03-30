import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-center items-center mb-12">
      <Image
        width={200}
        height={70}
        src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
        alt=""
      />
    </div>
  );
};

export default TopBar;
