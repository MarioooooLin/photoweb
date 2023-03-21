import React, { useState, useEffect } from "react";
import Photo from "../components/Photo";
import Search from "../components/Search";
import axios from "axios";

const Homepage = () => {
    let [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);
    let [currentSearch, setCurrentSearch] = useState("");
    const auth = "Iqz4BuHjkhq0HICMhlQqAaXO1TRcF0AlueA4mFQwv5UHzcpJM9PojfV6";
    const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=12";
    let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=12&page=1`;

    const search = async (url) => {
        let result = await axios.get(url, { headers: { Authorization: auth } });
        setData(result.data.photos);
        console.log(result);
        setCurrentSearch(input);
    };

    const morePhoto = async () => {
        let newURL;
        setPage(page + 1);
        if (currentSearch === "") {
            newURL = `https://api.pexels.com/v1/curated?page=${page + 1}per_page=12`;
        } else {
            newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page + 1}`;
        }
        let result = await axios.get(newURL, { headers: { Authorization: auth } });
        setData(data.concat(result.data.photos));
    };

    useEffect(() => {
        search(initURL);
    }, []); //When homepage rendering the useEffect will be process

    return (
        <div style={{ minHeight: "100vh" }}>
            <Search
                search={() => {
                    search(searchURL);
                }}
                setInput={setInput}
            />
            <div className='photos'>
                {data && //Logical operator
                    data.map((d) => {
                        return <Photo data={d} />;
                    })}
            </div>
            <div className='morePhoto'>
                <button onClick={morePhoto}>More Photo</button>
            </div>
        </div>
    );
};

export default Homepage;
