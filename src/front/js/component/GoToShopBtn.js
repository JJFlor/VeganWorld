import React from 'react'
import "/workspaces/VeganWorld/src/front/styles/botongoshop.css"

export const GoToShopBtn = () => {

    return (

        <div>
            <div className="text-center">
                <Link to="/Shops">
                    <span className="btn btnGoShop">SHOP NOW</span>
                </Link>
            </div>
        </div>

    )

}