import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { getQuery, setSearchQuery } from "../../features/articles/articlesSlice";

// function debounce(f: (event: React.ChangeEvent<HTMLInputElement>) => void, delay: number) {
//   let timerId: number | NodeJS.Timeout;

//   return (...args: any[]) => {
//     clearTimeout(timerId);

//     timerId = setTimeout(f, delay, ...args)
//   };
// }

const SearchBar: React.FC = () => {
  const queryFromStore = useSelector(getQuery);
  const dispatch = useAppDispatch();

  const inputQueryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.currentTarget.value));
  }

  // const debouncedInputQueryHandler = debounce(inputQueryHandler, 5000)

  return (
    <>
      <input
        name=''
        type="text"
        value={queryFromStore}
        onChange={inputQueryHandler}
      />
    </>
  );
}

export default SearchBar;
