import React from "react";
import { Link } from "react-router-dom";

export const DetailView = () => {
    return (
        <div className="container d-flex justify-content-center pt-3">
            <div className="d-flex my-5">
                <img src="https://dummyimage.com/500x500/000/fff" className="img-thumbnail imgDetail" alt="..." />
                <div className="details">
                    <h1 className="mb-5">Name Item</h1>
                    <h2>$0</h2>
                    <select defaultValue="Amount" className="form-select" aria-label="Default select example">
                        <option value="Amount">Amount</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <Link to="/" className="btn btnBuy mt-3">Buy Now</Link>
                    <h4 className="mt-4">Description</h4>
                    <p>
                        Description
                    </p>
                </div>
            </div>
        </div>
    )
};
