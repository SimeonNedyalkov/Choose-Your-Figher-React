import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useGetUserInfo } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export default function MyProfile() {
    const [username, setUsername, userId, setUserId] = useGetUserInfo();
    const fighters = useFetch('http://localhost:3030/data/fighters', []);
    const ownedFighters = fighters.filter(fighter => fighter._ownerId === userId);
    const navigation = useNavigate()

    const handleUpdate = (fighterId) => {
        // Handle update logic here
        console.log(`Update fighter with id: ${fighterId}`);
    };

    const handleDetails = (fighterId) => {
        navigation(`/armory/champions/${fighterId}`)
    };

    const handleDelete = (fighterId) => {
        // Handle delete logic here
        console.log(`Delete fighter with id: ${fighterId}`);
    };

    return (
        <div className='backgroundImageUsers'>
            <div className='user-user-greeting'>Hello, {username}</div>
            {ownedFighters.length > 0 && (
                <div className='user-fighters-section'>
                    <div className='user-fighters-title'>These are your fighters:</div>
                    <div className='user-fighters-list'>
                        {ownedFighters.map(fighter => (
                            <div key={fighter._id} className='user-fighter-card'>
                                <div className='user-fighter-name'>{fighter.name}</div>
                                <div className='user-fighter-img-wrapper'>
                                    <img src={fighter.img} alt={fighter.name} className='user-fighter-img' />
                                </div>
                                <div className='user-fighter-buttons'>
                                    <button onClick={() => handleUpdate(fighter._id)} className='user-fighter-button'>Update</button>
                                    <button onClick={() => handleDetails(fighter._id)} className='user-fighter-button'>Details</button>
                                    <button onClick={() => handleDelete(fighter._id)} className='user-fighter-button'>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
