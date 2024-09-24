import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import '/workspaces/VeganWorld/src/front/styles/profilebusinessfree.css';
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";



export const ProfileBusinessFree = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPartnerInfo();
    }, [])


    return (

        <div className="container-fluid">
           {store.premiumPartnersFiltered ? store.premiumPartnersFiltered.map(filteredPartner =>
                    (<SearchRestaurantsPartners key={filteredPartner.id} name={filteredPartner.name}
                        typeOfServices={filteredPartner.type_of_services} premium={filteredPartner.premium} />))
                        :
                        store.premiumPartners?.map(premiumPartners => (<SearchPremiumPartnerInfo key={premiumPartners.id}
                            name={premiumPartners.name}
                            typeOfServices={premiumPartners.type_of_services} premium={premiumPartners.premium} />))}
        </div>

    );

}