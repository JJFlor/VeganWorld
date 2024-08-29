import React, { useContext, useEffect } from 'react'
import "/workspaces/VeganWorld/src/front/styles/profileuser.css";
import { Context } from "../store/appContext";
import { SearchUserInfo } from "../component/SearchUserInfo.js";


export const ProfileUser = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getUsersInfo();
    }, [])


    return (

        <div className="container-fluid">
            {store.user?.map(user => <SearchUserInfo key={user.id} name={user.name}
                email={user.email} address={user.address} phone={user.phone} />)
            }
        </div>

    );

}