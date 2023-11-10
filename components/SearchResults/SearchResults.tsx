'use client'
import SearchBar from "./SearchBar"
import SearchResultsBody from "./SearchResultsBody";

// sr = search results

export default function SearchResultsPage(){
  return (
    <div className="sr-container">

      <SearchBar />
      <SearchResultsBody />
      

    </div>
  );
}
