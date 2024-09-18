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
import { DetailView } from "./pages/DetailView";


import { Form } from "./component/Form.js";
import { Dashboard } from "./component/Dashboard.js";
import { ShopClient } from "./pages/ShopClient.js";
import { EditProduct } from "./pages/EditProduct.js";


import { SignUpUser } from "./pages/SignUpUser.js";
import { SignUpBusiness } from "./pages/SignUpBusiness.js";
import { SearchEngineMainPage } from "./pages/SearchEngineMainPage.js";
import { LogIn } from "./pages/LogIn.js";
import { ProfileBusiness } from "./pages/ProfileBusiness.js";
import { ContactUs } from "./pages/ContactUs.js";
import { WorkWithUs } from "./component/WorkWithUs.js";
import { ProfileUser } from "/workspaces/VeganWorld/src/front/js/pages/ProfileUser.js"
import { SearchPremiumPartnerInfo } from "./component/SearchPremiumPartnerInfo.js";
import { SearchBusinessFreeInfo } from "./component/SearchBusinessFreeInfo.js";
import { ResetPassword } from "./pages/ResetPassword.js";

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
                        <Route element={<ResetPassword />} path="/ResetPassword" />
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
                                <SearchEngineMainPage />
                            </PrivateRoute>
                        } path="/SearchEngineMainPage" />
                        <Route element={<SignUpUser />} path="/SignUpUser" />
                        <Route element={<SignUpBusiness />} path="/SignUpBusiness" />
                        <Route element={<LogIn />} path="/LogIn" />
                        <Route element={
                            <PrivateRoute>
                                <ProfileUser />
                            </PrivateRoute>
                        } path="/profile_user" />
                        <Route element={
                            <PrivateRoute>
                                <ProfileBusiness />
                            </PrivateRoute>
                        } path="/ProfileBusiness" />
                        <Route element={
                            <PrivateRoute>
                                <SearchPremiumPartnerInfo />
                            </PrivateRoute>
                        } path="/SearchPremiumPartnerInfo" />
                        <Route element={
                            <PrivateRoute>
                                <SearchBusinessFreeInfo />
                            </PrivateRoute>
                        } path="/SearchBusinessFreeInfo" />
                        <Route element={
                            <PrivateRoute>
                                <DetailView />
                            </PrivateRoute>
                        } path="/product_info/:id" />
                        <Route element={<ContactUs />} path="/ContactUs" />
                        <Route element={<WorkWithUs />} path="/workwithus" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
