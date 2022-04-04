import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addName, addStatus, addGender } from "../redux/duck";

// por ahora se pasa como props, luego se pasa como state
const FilterSection = ({ characters }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-start-1 col-end-4 flex flex-col items-center  border-r border-inherit mr-8">
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
      <Autocomplete
        className="mt-4"
        disablePortal
        id="combo-box-demo"
        options={["unknown", "Alive", "Dead"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Status" />}
        onChange={(e, value) => {
          dispatch(addStatus(value || ""));
        }}
      />
      <Autocomplete
        className="mt-4"
        disablePortal
        id="combo-box-demo"
        options={["unknown", "Male", "Female"]}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Gender" />
        )}
        onChange={(e, value) => {
          dispatch(addGender(value || ""));
        }}
      />
    </div>
  );
};

export default FilterSection;
