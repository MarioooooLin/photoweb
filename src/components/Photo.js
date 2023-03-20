import React from "react";

const Photo = ({ data }) => {
    return (
        <div className='photo'>
            <p>Photographer: {data.photographer}</p>
            <div className='photoContainer'>
                <img src={data.src.large} alt='' srcset='' />
            </div>
            <button>
                <a target='_blank' href={data.src.large}>
                    Download
                </a>
            </button>
        </div>
    );
};

export default Photo;
