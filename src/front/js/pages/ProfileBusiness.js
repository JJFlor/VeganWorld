
import React, { useContext } from 'react'
import "/workspaces/VeganWorld/src/front/styles/shoppremium.css"
import { ProfileBusinessFree } from './PorfileBusinessFree'
import { ProfileBusinessPremium } from './ProfileBusinessPremium'
import { Context } from '../store/appContext'


export const ProfileBusiness = () => {
    const { store } = useContext(Context);
    return (
        <>
            {
                store.partner?.premium ?
                    <ProfileBusinessPremium />
                    :
                    <ProfileBusinessFree />
            }
        </>
    )
}