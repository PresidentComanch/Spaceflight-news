import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { getQuery, setSearchQuery } from "../../features/articles/articlesSlice";

import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function debounce(f: (query: string) => void, delay: NodeJS.Timeout) {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(f, delay, ...args)
  };
}

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  const dispatchQuery = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const debounceDispatchQuery = useCallback( 
    debounce(dispatchQuery, 300), []
  );

  return (
    <>
      <TextField
        placeholder='Search'
        variant='outlined'
        fullWidth
        type='search'
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          debounceDispatchQuery(event.currentTarget.value);
        }}
        InputProps={{
          startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}}
        sx={{ width: '600px', mb: '40px' }}
        />
    </>
  );
}

export default SearchBar;
