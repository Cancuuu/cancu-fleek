import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useDispatch } from "react-redux";
import { activeMenu } from "../redux/duck";

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeMenu(menuOpen));
  }, [menuOpen]);

  return (
    <div className="lg:griddie grid">
      <div className="col-start-1 col-end-2 lg:hidden">
        {menuOpen ? (
          <MenuOpenIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <MenuIcon onClick={() => setMenuOpen(true)} />
        )}
      </div>
      <div className="col-start-6 col-end-10">
        <Image
          width={200}
          height={70}
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TopBar;
