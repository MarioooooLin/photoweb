import React, { useState } from "react";

const Search = ({ search, setInput }) => {
    const inputFn = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className='search'>
            <input className='input' type='text' onChange={inputFn} />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
