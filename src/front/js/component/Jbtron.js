import React from "react";
import ImgLogo from "../../img/logoAguacate.png"


export const Jbtron = () => {
    return (
        <div className="contFondo">
            <div className="container cont">
                <img src={ImgLogo} alt="" className="imgLogo img-fluid" />
                <h1 className="titleJumbo">VeganWorld</h1>
            </div>
        </div>
    )
}