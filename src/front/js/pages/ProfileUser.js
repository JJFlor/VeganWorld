import React, { useContext, useEffect } from 'react'
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Context } from "../store/appContext";
import { SearchUserInfo } from "../component/SearchUserInfo.js";


export const ProfileUser = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUserInfo();
    }, [])


    return (

        <div className="container-fluid">
            {
                user ?
                    (<SearchUserInfo
                        key={store.user.id}
                        name={store.user.name}
                        email={store.user.email}
                        address={store.user.address}
                        phone={store.user.phone} />
                    )
                    :
                    (<p>No user data available</p>)

            }
        </div>

    );

}