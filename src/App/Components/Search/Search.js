const Search = ({ title, icon, placeholder, value, onChangeText, onSearchAction }) => {
  return (
    <div className="w-11/12">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={icon} alt="search" width="25" />
        </div>
        <input
          type="search"
          id="search"
          class="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
        />
        <button
          type="submit"
          onClick={onSearchAction}
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {title}
        </button>
      </div>
    </div>
  );
};

export default Search;
