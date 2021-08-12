import React, {useState, useEffect} from "react";
//import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import CountryName from "./Data.json";
import Login from "./Login"
import { useStateValue } from "./StateProvider";

function App() { 
  const [{user}, dispatch] = useStateValue();
 

  return (
    <div className="App">
    {!user ? (
      <Login/>
    ) : (
      <>
      <SearchBar placeholder="Search Countries..." data={CountryName} />
      </>
    )}
    </div>

  );
}

export default App;
