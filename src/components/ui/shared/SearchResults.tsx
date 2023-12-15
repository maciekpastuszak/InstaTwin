import React from 'react'

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosta: Models.Documents[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults