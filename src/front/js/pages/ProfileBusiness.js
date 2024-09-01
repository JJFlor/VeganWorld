import React, { useContext, useEffect, useState } from 'react';
import '/workspaces/VeganWorld/src/front/styles/shoppremium.css';
import { Context } from '../store/appContext';
import '/workspaces/VeganWorld/src/front/styles/profilebusinessfree.css';
import { SearchBusinessFreeInfo } from '../component/SearchBusinessFreeInfo';
import { SearchPremiumPartnerInfo } from "../component/SearchPremiumPartnerInfo";

export const ProfileBusiness = () => {
    const { store, actions } = useContext(Context);
    const [selectedPartner, setSelectedPartner] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            await actions.getPartnerInfo();
            await actions.getAllPremiumPartnersInfo();
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (store.partnerInfo && store.premiumPartners.length > 0) {
            const partner = store.premiumPartners.find(partner => partner.id === store.partnerInfo.id);
            setSelectedPartner(partner);
        }
    }, [store.partnerInfo, store.premiumPartners]);
    return (
        <>
            {selectedPartner ? (
                <SearchPremiumPartnerInfo
                    key={selectedPartner.id}
                    name={selectedPartner.name}
                    typeOfServices={selectedPartner.type_of_services}
                    email={selectedPartner.email}
                    address={selectedPartner.address}
                    phone={selectedPartner.phone}
                    aboutUs={selectedPartner.about_us}
                />
            ) : (
                store.partnerInfo && (
                    <SearchBusinessFreeInfo
                        key={store.partnerInfo.id}
                        name={store.partnerInfo.name}
                        typeOfServices={store.partnerInfo.type_of_services}
                        email={store.partnerInfo.email}
                        address={store.partnerInfo.address}
                        phone={store.partnerInfo.phone}
                        aboutUs={store.partnerInfo.about_us}
                    />
                )
            )}
        </>
    );
};