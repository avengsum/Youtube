import { useDispatch, useSelector } from "react-redux";
import { toogle } from "../utilis/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import { cacheResult } from "../utilis/searchSlice";
import { suggestionApi } from "../assets/constants";


const Nav = () => {

    const dispatch = useDispatch();

    const [search,setSearch] = useState("")
    const [suggestion , setSuggestion] = useState([]);
    const [toggleSearch , setToggleSearch] = useState(false)

    const searchResult = useSelector((store) => store.search.searchCache)

    useEffect(() => {

      const Timer = setTimeout(() => {
        if(searchResult[search])
        setSuggestion(searchResult[search]);
        else{
        getSuggestion();
        }
      },200)

      return () => {
        clearTimeout(Timer);
      }

    },[search])

    console.log(suggestion)

    const getSuggestion = async () => {
      const data = await fetch(suggestionApi + search);
      const json = await data.json();

      setSuggestion(json[1]);
      dispatch(cacheResult({[search] : json[1]}))
    }

    const handleToggle = () => {
        dispatch(toogle())
    }

    return (
        <div className="flex flex-wrap items-start justify-between pt-2">
  <div className="flex items-start space-x-6">
    <img
      onClick={() => handleToggle()}
      src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
      className="w-12 sm:w-14 pl-2"
      alt="hamburgerMenu"
    />
            <img src="data:image/png;base64,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"
                className="w-14"
                alt=""
              />
            </div>
          
            <div className="w-full sm:w-1/2 mt-2 relative sm:mt-0">
              <input
                className="border-2 border-gray-600 w-full sm:w-2/4 px-2 py-1"
                name="search"
                placeholder="Search"
                type="text"
                value={search}
                onFocus={() => setToggleSearch(true)}
                onBlur={() => setToggleSearch(false)}
                onChange={(e) => setSearch(e.target.value) }
              />
              <button className="px-4 py-1 mt-2 sm:mt-0 sm:ml-2 bg-blue-500 text-white">
                Search
              </button>
            </div>
            {toggleSearch && <div className="bg-white w-96 top-14 fixed left-[24rem] rounded-md">
               <ul className="text-lg space-y-2 space-x-2 🔍" >
                {suggestion.map((s,index) => {
                  return (
                     <li key={index} >🔍 {s} </li>
                  )
                })}
               
                
               </ul>
            </div>}

          
            <div className="mr-4 sm:mr-8 mt-2 sm:mt-0">
              <button className="px-4 py-1 bg-blue-500 text-white">
                Sign In
              </button>
            </div>
          </div>

    )
}

export default Nav;