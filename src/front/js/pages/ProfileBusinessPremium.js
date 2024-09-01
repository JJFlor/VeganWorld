import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";
import { SearchRestaurantsPartners } from "../component/SearchRestaurantsPartners";
import { Footer } from "/workspaces/VeganWorld/src/front/js/component/Footer.js";



export const ProfileBusinessPremium = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllPremiumPartnersInfo();
    }, [])

    return (

        <div className="container">
            {console.log(store.premiumPartners)}
            {store.premiumPartnersFiltered ? store.premiumPartnersFiltered.map(filteredPartner =>
            (<SearchRestaurantsPartners key={filteredPartner.id} name={filteredPartner.name}
                typeOfServices={filteredPartner.type_of_services} premium={filteredPartner.premium} />))
                :
                store.premiumPartners?.map(premiumPartners => (<SearchPremiumPartnerInfo key={premiumPartners.id}
                    name={premiumPartners.name}
                    typeOfServices={premiumPartners.type_of_services} premium={premiumPartners.premium} />))}
            <div>
                <Footer />
            </div>

        </div>

    )
}