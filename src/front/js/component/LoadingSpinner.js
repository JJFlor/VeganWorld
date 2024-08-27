import React from "react";
import LoadinGif from "../../img/apple-loader.gif";
const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <img className="loading-gif" src={LoadinGif} alt="Loading..." style={{ width: "50px", height: "50px" }} />
        </div>
    );
};
export default LoadingSpinner;