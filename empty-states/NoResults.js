import React, {Component} from 'react';

const NoResults = () =>{
    return(
        <div className="products">
            <div className="no-results">
                <img src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png" alt="Empty Tree"/>
                <h2>Sorry, no products matched your search!</h2>
                <p>Enter a different keyword and try.</p>
            </div>
        </div>
    )
};

export default NoResults;