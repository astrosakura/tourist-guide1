import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {Avatar} from "@material-ui/core"
import { useStateValue } from "../StateProvider";
import gif1 from "../Images/children.gif";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [{user}, dispatch] = useStateValue();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (

    <>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_self">
                <p>{value.title} </p>
              </a>
            );
          })}
          
        </div>
        
      )}
    </div>
    <div className = "userimg">
    <Avatar src = {user.photoURL}/>
    <h4 className = 'userName'>{user.displayName}</h4>
   </div>

   <div className = 'Body'>
     <img className = 'gif' src = {gif1} />
     <h4 className = 'gifName'>Hey {user.displayName} I am your Tourist Guide. Go to Search bar and Search Your favorite Places</h4>
   </div>

   </>
  );
}

export default SearchBar;