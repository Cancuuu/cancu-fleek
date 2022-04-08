import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { addName, addStatus, addGender } from "../redux/reduxDuck";

const FilterComponent = ({ characters }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-2xl">Filters</h1>
      </div>
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e, value) => {
          dispatch(addName(e.target.value || ""));
        }}
      />
      <FormControl className="mt-8 w-full">
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e, value) => {
            dispatch(addStatus(e.target.value || ""));
          }}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"unknown"}>unknown</MenuItem>
          <MenuItem value={"Alive"}>Alive</MenuItem>
          <MenuItem value={"Dead"}>Dead</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="mt-8 w-full">
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={(e, value) => {
            dispatch(addGender(e.target.value || ""));
          }}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"unknown"}>unknown</MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default FilterComponent;
