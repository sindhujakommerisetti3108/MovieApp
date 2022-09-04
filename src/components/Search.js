import React from 'react'
import { useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getMovies } from "../Redux/action";
import {useHistory} from 'react-router-dom';
import UseAnimation from "react-useanimations";
import search from "react-useanimations/lib/searchToX";


const Search = () => {
  console.log("****Search Component*******");
let {searchvalue,pageNum} = useSelector((state) => state.data);
console.log("search value is ",searchvalue);
console.log("initial search value is ",searchvalue);
const [searchval, setSearchVal] = useState(searchvalue);
  const dispatch = useDispatch();
  let history=useHistory();

  useEffect(() => {
    console.log("Rendering search movies content inside useEffecthook");
    dispatch(getMovies(searchval,pageNum));
  }, []);

  const handleKeyPress = (e) => {  
    if (e.keyCode === 13) {
      searchMovies();
    }
  };

  const searchMovies = () => {
    if(searchval!==""){
      dispatch(getMovies(searchval,1));
    }
    else{
      alert ("Please enter a movie to continue !!!");
      setSearchVal("spider");
    }
  }

  return (
    <div className="header">
     <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
      <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="Search" value={searchval}
          onChange={(event) => setSearchVal(event.target.value)} onKeyPress={handleKeyPress}/>
        <button style={{border:"1px solid #ced4da"}} type="submit" className="btn btn-light" onClick={searchMovies} onKeyPress={handleKeyPress}>
        <UseAnimation
                size={30}
                wrapperStyle={{
                  margin: "0px 10px",
                  cursor: "pointer"
                }}
                animation={search}
                pathCss="fill: #f54c4c;cursor:pointer"
                strokeColor="black"
              />
        </button>
      </div>
      </form>
    </div>
  )
}

export default Search;
