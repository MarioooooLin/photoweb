import React from "react";
import axios from "axios";

const Search = () => {
    const auth = "Iqz4BuHjkhq0HICMhlQqAaXO1TRcF0AlueA4mFQwv5UHzcpJM9PojfV6";
    const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    const search = async () => {
        let result = await axios.get(initURL, { headers: { Authorization: auth } });
        console.log(result);
    };

    return (
        <div className='search'>
            <input className='input' type='text' />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;
