import React, { useEffect, useState } from 'react';
import userAPI from "../../sevices/usersAPI";
import useFetch from '../../hooks/useFetch';
import { useAuthContext } from '../../contexts/UserContext';
import { useGetUserInfo } from '../../hooks/useAuth';

export default function MyProfile() {
    const [username,setUsername,userId,setUserId] = useGetUserInfo()
    let ownedFighters = []

    const fighters = useFetch('http://localhost:3030/data/fighters',[])
    console.log(username)
    fighters.map((fighter)=>{
        if(fighter._ownerId == userId){
            ownedFighters.push(fighter)
        }
    })

    return (
        <div>
            <div>Hello, {username}</div>
            {ownedFighters.length>0 && (
                <div className='backgroundImage'>
                <div>Those are your fighters:</div>
                <div>{ownedFighters.map(fighter=>(
                        <div key={fighter._id}>
                            <div>{fighter.name}</div>
                            <div><img src={fighter.img} alt={fighter.name} /></div>
                        </div>
                        
                ))}</div>
                </div>
            )}
        </div>
    );
}
