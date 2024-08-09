import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const AddProduct = () => {
    return (
        <div className="container contAdd">

            <div className="text-center">
                <Link to="/">
                    <span className="btn btnGoShop">Go Shop</span>
                </Link>
            </div>

            <div className="contFormAdd p-5">

                <div className="row mb-3">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="price" className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="price" />
                    </div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ minHeight: '200px' }}></textarea>
                    <label for="floatingTextarea">Description</label>
                </div>
                <div class="input-group my-4">
                    <input type="file" class="form-control" id="inputGroupFile01"/>
                </div>
                <div className="btnsProduct">
                    <a className="btn btnCancel mx-2 mt-4">Cancel</a>
                    <a className="btn btnSave mx-2 mt-4">Save</a>
                </div>

            </div>
        </div>
    )
}
