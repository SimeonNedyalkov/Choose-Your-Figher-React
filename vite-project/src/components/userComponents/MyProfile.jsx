import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useGetUserInfo } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import getElementEmoji from '../../customFunctions/elements';


export default function MyProfile() {
    const [username, setUsername, userId, setUserId] = useGetUserInfo();
    const fighters = useFetch('http://localhost:3030/data/fighters', []);
    const ownedFighters = fighters.filter(fighter => fighter._ownerId === userId);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const navigation = useNavigate()

    const handleUpdate = (fighterId) => {
        navigation(`/editChampion/${fighterId}`) 
    };

    const handleDetails = (fighterId) => {
        navigation(`/armory/champions/${fighterId}`)
    };

    const handleDelete = (fighterId) => {
        // Handle delete logic here
        console.log(`Delete fighter with id: ${fighterId}`);
    };
    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }
    
    return (
        <div className='backgroundImageUsers'>
            <div className='user-greeting'>Hello, {username}</div>
            {ownedFighters.length > 0 ? (
                <div className='user-fighters-section'>
                    <div className='user-fighters-title'>This is your fighter:</div>
                    <div className='user-fighters-list'>
                        {ownedFighters.map(fighter => (
                            <div key={fighter._id} className='user-fighter-card'>
                                <div className='user-fighter-name'>Name: {fighter.name}</div>
                                <div className='user-fighter-name'>Type: {fighter.type}</div>
                                <div className='user-fighter-name'>Element: {fighter.element}{getElementEmoji(fighter.element)}</div>
                                <div className='imageAndStats'>
                                        <div className='fighter-description fighter-stats'>
                                            {fighter.description && (
                                                <p className='text-white'>
                                                    {showFullDescription ? fighter.description : fighter.description.slice(0, 140)}
                                                </p>
                                            )}
                                            {fighter.description && fighter.description.length > 140 && (
                                                <button className='read-more-button' onClick={toggleDescription}>
                                                    {showFullDescription ? 'Read Less' : 'Read More'}
                                                </button>
                                            )}
                                    </div>
                                    <img src={fighter.img} alt={fighter.name} className="fighter-details-image" />
                                    <div className='fighter-info'>
                                        {fighter.stats && (
                                            <div className='fighter-stats'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Health Points:</strong></td>
                                                            <td className='blueishStats'>{fighter.stats.health}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Attack:</strong></td>
                                                            <td className='blueishStats'>{fighter.stats.attack}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Defense:</strong></td>
                                                            <td className='blueishStats'>{fighter.stats.defense}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Speed:</strong></td>
                                                            <td className='blueishStats'>{fighter.stats.speed}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Intelligence:</strong></td>
                                                            <td className='blueishStats'>{fighter.stats.intelligence}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='user-fighter-buttons'>
                                    <button onClick={() => handleUpdate(fighter._id)} className='user-fighter-button'>Update</button>
                                    <button onClick={() => handleDelete(fighter._id)} className='user-fighter-button'>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ):(
                <div className='user-fighters-section'>
                    <div className='user-fighters-title'>Currently, you have no fighter</div>
                </div>
            )}
        </div>
    );
}
