import React, { useState, useEffect } from "react";
import Photo from "../components/Photo";
import Search from "../components/Search";
import axios from "axios";

const Homepage = () => {
    let [input, setInput] = useState("");
    let [data, setData] = useState(null);
    const auth = "Iqz4BuHjkhq0HICMhlQqAaXO1TRcF0AlueA4mFQwv5UHzcpJM9PojfV6";
    const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=10";
    let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=10&page=1`;

    const search = async (url) => {
        let result = await axios.get(url, { headers: { Authorization: auth } });
        setData(result.data.photos);
        console.log(result);
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
        </div>
    );
};

export default Homepage;
