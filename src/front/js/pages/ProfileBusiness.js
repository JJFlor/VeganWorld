import React from 'react'
import "/workspaces/VeganWorld/src/front/styles/shoppremium.css"
import { ProfileBusinessFree } from './PorfileBusinessFree'
import { ProfileBusinessPremium } from './ProfileBusinessPremium'


export const ProfileBusiness = () => {
    return (
        <div>
            <ProfileBusinessFree />
            <ProfileBusinessPremium />
        </div>
    )
}