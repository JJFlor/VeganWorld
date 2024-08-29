import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.js";
import { BackendURL } from "./component/backendURL";
import PrivateRoute from "./component/PrivateRoute";
import { ShopPremium } from "./pages/ShopPremium.js";

import { Home } from "./pages/home";
import { AddProduct } from "/workspaces/VeganWorld/src/front/js/pages/AddProduct.js";
import { ShopBusiness } from "./pages/ShopBusiness";
import injectContext from "./store/appContext";

import { EditProfileModal } from "/workspaces/VeganWorld/src/front/js/component/EditProfileModal.js"
import { Navbar } from "./component/navbar.js";
import { ShopView } from "./pages/ShopView.js";
import { DetailView } from "./pages/DetailView";


import { Form } from "./component/Form.js";
import { Dashboard } from "./component/Dashboard.js";
import { ShopClient } from "./pages/ShopClient.js";
import { EditProduct } from "./pages/EditProduct.js";


import { SignUpUser } from "./pages/SignUpUser.js";
import { SignUpBusiness } from "./pages/SignUpBusiness.js";
import { SearchEngineMainPage } from "./pages/SearchEngineMainPage.js";
import { LogIn } from "./pages/LogIn.js";
import { ProfileBusinessPremium } from "./pages/ProfileBusinessPremium.js";
import { ProfileBusinessFree } from "./pages/ProfileBusinessFree.js";
import { ProfileBusiness } from "./pages/ProfileBusiness.js";
import { ContactUs } from "./pages/ContactUs.js";
import { ProfileUser } from "/workspaces/VeganWorld/src/front/js/pages/ProfileUser.js"

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={
                            <PrivateRoute>
                                <EditProfileModal />
                            </PrivateRoute>
                        } path="/EditProfileModal" />
                        <Route element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } path="/Dashboard" />
                        <Route element={
                            <PrivateRoute>
                                <Form />
                            </PrivateRoute>
                        } path="/Form" />
                        <Route element={
                            <PrivateRoute>
                                <ShopClient />
                            </PrivateRoute>
                        } path="/shop_client" />
                        <Route element={
                            <PrivateRoute>
                                <ShopBusiness />
                            </PrivateRoute>
                        } path="/shop_business" />
                        <Route element={
                            <PrivateRoute>
                                <EditProduct />
                            </PrivateRoute>
                        } path="edit_product/:id" />
                        <Route element={
                            <PrivateRoute>
                                <ShopPremium />
                            </PrivateRoute>
                        } path="/shop_premium" />
                        <Route element={
                            <PrivateRoute>
                                <AddProduct />
                            </PrivateRoute>
                        } path="/add_product" />
                        <Route element={
                            <PrivateRoute>
                                <ShopView /> />
                            </PrivateRoute>
                        } path="/shop_view" />
                        <Route element={
                            <PrivateRoute>
                                <SearchEngineMainPage />
                            </PrivateRoute>
                        } path="/SearchEngineMainPage" />
                        <Route element={<SignUpUser />} path="/SignUpUser" />
                        <Route element={<SignUpBusiness />} path="/SignUpBusiness" />
                        <Route element={<LogIn />} path="/LogIn" />
                        <Route element={<ProfileUser />} path="/profile_user" />
                        <Route element={<ProfileBusiness />} path="/ProfileBusiness" />
                        <Route element={<ProfileBusinessPremium />} path="/ProfileBusinessPremium" />
                        <Route element={<ProfileBusinessFree />} path="/ProfileBusinessFree" />
                        <Route element={
                            <PrivateRoute>
                                <DetailView />
                            </PrivateRoute>
                        } path="/product_info/:id" />
                        <Route element={<ContactUs />} path="/ContactUs" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
