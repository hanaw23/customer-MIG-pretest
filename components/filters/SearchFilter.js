import SearchIcon from "../svg/SearchIcon";

export default function SearchFilter(props) {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-700 mr-5 h-10 w-22 md:w-1/2 flex flex-col">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </div>
      <input type="text" placeholder="Search" className="border rounded-[5px] border-gray-300 w-[350px] h-10 px-10 focus:outline-indigo-500 text-sm " value={props.filterValue} onChange={props.filterChange} />
    </div>
  );
}
