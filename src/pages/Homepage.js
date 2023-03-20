import React, { useState, useEffect } from "react";
import Photo from "../components/Photo";
import Search from "../components/Search";
import axios from "axios";

const Homepage = () => {
    let [data, setData] = useState(null);
    const auth = "Iqz4BuHjkhq0HICMhlQqAaXO1TRcF0AlueA4mFQwv5UHzcpJM9PojfV6";
    const initURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

    const search = async () => {
        let result = await axios.get(initURL, { headers: { Authorization: auth } });
        setData(result.data.photos);
        console.log(result);
    };

    return (
        <div style={{ minHeight: "100vh" }}>
            <Search search={search} />
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
