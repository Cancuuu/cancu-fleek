import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addName, addStatus, addGender } from "../redux/duck";

// por ahora se pasa como props, luego se pasa como state
const FilterSection = ({ characters }) => {
  const dispatch = useDispatch();

  return (
    <div className="fixed col-start-1 col-end-4 flex flex-col items-center">
      <SearchIcon style={{ cursor: "pointer", padding: "17px" }} />
      <Autocomplete
        id="free-solo-dem"
        freeSolo
        sx={{ width: 300 }}
        options={characters.map((character) => ({
          label: character.name,
          value: character.id,
        }))}
        renderInput={(params) => <TextField {...params} label="Name" />}
        onInputChange={(e) => {
          dispatch(addName(e.target.value || ""));
        }}
        onChange={(e, value) => {
          dispatch(addName(value.label || ""));
        }}
      />
      <FormControl className="mt-8" fullWidth>
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
      <FormControl className="mt-8" fullWidth>
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
    </div>
  );
};

export default FilterSection;
