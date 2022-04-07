import FilterComponent from "./FilterComponent";

// por ahora se pasa como props, luego se pasa como state
const FilterSection = ({ characters }) => {
  return (
    <>
      <div className="col-start-1 col-end-4 pt-8 px-8 sticky lg:flex lg:flex-col hidden">
        <FilterComponent characters={characters} />
      </div>
    </>
  );
};

export default FilterSection;
