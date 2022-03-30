import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

// por ahora se pasa como props, luego se pasa como state
const FilterSection = ({characters}) => {
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
            renderInput={(params) => <TextField {...params} label="freeSolo" />}
          />
          <Autocomplete
            className="mt-4"
            disablePortal
            id="combo-box-demo"
            options={characters.map((character) => ({
              label: character.name,
              value: character.id,
            }))}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
          <Autocomplete
            className="mt-4"
            disablePortal
            id="combo-box-demo"
            options={characters.map((character) => ({
              label: character.name,
              value: character.id,
            }))}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Gender filter" />
            )}
          />
        </div>
  )
}

export default FilterSection