import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    setText("");
    dispatch(setQuery(text));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" flex gap-4 p-6 bg-(--c1) "
      >
        <input
          required
          type="text"
          className="border-2 outline-none px-5 py-1 text-lg rounded w-full min-w[70vw]"
          placeholder="Search anything..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="border-2 outline-none px-3 py-1 text-lg rounded cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
