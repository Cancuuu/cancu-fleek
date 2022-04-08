import Image from "next/image";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { activeMenu } from "../redux/reduxDuck";

const TopBar = ({ backIcon }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activeMenu(menuOpen));
  }, [menuOpen]);

  return (
    <div className="grid grid-cols-8">
      {backIcon ? (
        <Button href="/characters">
          <ArrowBackIcon />
        </Button>
      ) : (
        <div className="col-start-1 col-end-2 lg:hidden">
          {menuOpen ? (
            <Button>
              <MenuOpenIcon onClick={() => setMenuOpen(false)} />
            </Button>
          ) : (
            <Button>
              <MenuIcon onClick={() => setMenuOpen(true)} />
            </Button>
          )}
        </div>
      )}
      <div className="lg:col-start-5 lg:col-start-6 col-start-3 col-end-7">
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
