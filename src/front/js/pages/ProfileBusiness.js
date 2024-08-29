
import React, { useContext, useEffect } from 'react'
import "/workspaces/VeganWorld/src/front/styles/shoppremium.css"
import { Context } from '../store/appContext'
import '/workspaces/VeganWorld/src/front/styles/profilebusinessfree.css';
import { SearchBusinessFreeInfo } from '../component/SearchBusinessFreeInfo';
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";


export const ProfileBusiness = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPartnerInfo();
    }, [])


    return (
        <>
            {
                store.partner?.premium ?
                    <SearchPremiumPartnerInfo
                        key={store.premiumPartners.id}
                        name={store.premiumPartners.name}
                        typeOfServices={store.premiumPartners.type_of_services}
                        email={store.premiumPartners.email}
                        address={store.premiumPartners.address}
                        phone={store.premiumPartners.phone}
                        aboutUs={store.premiumPartners.about_us}
                    />
                    :
                    <SearchBusinessFreeInfo
                        key={store.partnerInfo.id}
                        name={store.partnerInfo.name}
                        typeOfServices={store.partnerInfo.type_of_services}
                        email={store.partnerInfo.email}
                        address={store.partnerInfo.address}
                        phone={store.partnerInfo.phone}
                        aboutUs={store.partnerInfo.about_us} />
            }
        </>
    )
}