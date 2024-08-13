import React from "react";
import { Link } from "react-router-dom";


export const AddProduct = () => {
    return (
        <div className="container contAdd">

            <div className="text-center">
                <Link to="/shop_client">
                    <span className="btn btnGoShop">Go Shop</span>
                </Link>
            </div>

            <div className="contFormAdd p-5 mb-3">

                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="price" />
                    </div>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ minHeight: '200px' }}></textarea>
                    <label>Description</label>
                </div>
                <div className="input-group my-4">
                    <input type="file" className="form-control" id="inputGroupFile01" />
                </div>
                <div className="btnsProduct">
                    <Link to="/shop_business" className="btn btnCancel mx-2 my-4">Cancel</Link>
                    <a className="btn btnSave mx-2 my-4">Save</a>
                </div>

            </div>
        </div>
    )
}
