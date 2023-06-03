import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import Weather from "./Weather";

const Header = () => {
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState();

  const fetchData = async (city) => {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${
      import.meta.env.VITE_API_KEY
    }&q=${city}&days=7`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      alert("No matching location found. Please fill the correct data in the field!");
    } else {
      const data = await res.json();
      setApiData(data);
    }
  };

  useEffect(() => {
    fetchData("Mumbai");
  }, []);

  const onSearch = () => {
    {
      search ? fetchData(search) : alert("No input location found.");
    }
  };

  return (
    <div className="w-full bg-cloud p-8 flex justify-center">
      <div className="card w-fit p-4">
        <div className="searchBox flex justify-center">
          <div className="search-bar flex items-center">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search here"
              className="py-2 px-5 outline-none text-slate-200 bg-transparent border-b-2 border-slate-400"
            />
            <GoSearch
              onClick={onSearch}
              className="text-[18px] cursor-pointer text-slate-200"
            />
          </div>
        </div>
        <div className="forecast flex">
          <Weather apiData={apiData} />
        </div>
      </div>
    </div>
  );
};

export default Header;
