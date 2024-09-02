import React, { useContext, useEffect } from 'react'
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Context } from "../store/appContext";
import { SearchUserInfo } from "../component/SearchUserInfo.js";
import { Footer } from '../component/Footer.js';


export const ProfileUser = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUserInfo();
    }, [])


    return (
        <div>

            <div className="container">
                {
                    store.user ?
                        (<SearchUserInfo
                            key={store.user?.id}
                            name={store.user?.name}
                            email={store.user?.email}
                            address={store.user?.address}
                            phone={store.user?.phone} />
                        )
                        :
                        (<p>No user data available</p>)
                }

            </div>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>

    )
}