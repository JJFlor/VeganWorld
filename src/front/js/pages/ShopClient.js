import React from "react";
import { Link } from "react-router-dom";


export const ShopClient = () => {


    return (
        <div className="container ">

            <h1 className="text-center my-5">Shop</h1>

            <div className="my-5 ms-4">
                <a className="btn btnSort m-2 ">New</a>
                <a className="btn btnSort m-2 ">Price Ascending</a>
                <a className="btn btnSort m-2 ">Price Descending</a>
            </div>

            <div className="contCards">
                <div className="row-12">
                    <div className="col productsCard my-3">
                        <div className="card" style={{ minWidth: "16rem" }}>
                            <img src="https://dummyimage.com/200x200/000/fff" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product</h5>
                                <p className="card-text">Price</p>
                                <p className="card-text">Description</p>
                                <div className="btnsCards">
                                    <Link to="/add_product" className="btn btnEdit mx-2">Buy</Link>
                                    <Link to="/detail_view" className="btn btnDelete mx-2">Info</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}