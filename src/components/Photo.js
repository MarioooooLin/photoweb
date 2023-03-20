import React from "react";

const Photo = ({ data }) => {
    return (
        <div className='photo'>
            <p> {data.photographer}</p>
            <div className='photoContainer'>
                <img src={data.src.large} alt='' srcset='' />
            </div>
            <p>
                Download:
                <a target='_blank' href={data.src.large}>
                    Click
                </a>
            </p>
        </div>
    );
};

export default Photo;
