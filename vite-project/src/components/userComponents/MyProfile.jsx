import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useGetUserInfo } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import getElementEmoji from '../../customFunctions/elements';
import fighterData from '../../sevices/fighterAPI';

export default function MyProfile() {
    const [username, setUsername, userId, setUserId] = useGetUserInfo();
    
    const fighters = useFetch('http://localhost:3030/data/fighters', []);
    const [ownedFighters, setOwnedFighters] = useState([]);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const [currentFighterIndex, setCurrentFighterIndex] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const userFighters = fighters.filter(fighter => fighter._ownerId === userId);
        setOwnedFighters(userFighters);
    }, [fighters, userId]);

    const handleUpdate = (fighterId) => {
        navigate(`/editChampion/${fighterId}`) 
    };

    const handleDelete = async (fighterId) => {
        const isConfirmed = confirm(`Are you sure you want to delete your fighter`);
        if (!isConfirmed) {
            return;
        }
        try {
            await fighterData.deleteFighter(fighterId);
            const updatedFighters = ownedFighters.filter(fighter => fighter._id !== fighterId);
            setOwnedFighters(updatedFighters);
            setCurrentFighterIndex(prevIndex => Math.max(0, prevIndex - 1));
        } catch (error) {
            console.log(error.message);
        }
    };

    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }

    const handleNext = () => {
        setCurrentFighterIndex((prevIndex) => (prevIndex + 1) % ownedFighters.length);
    };

    const handlePrevious = () => {
        setCurrentFighterIndex((prevIndex) => (prevIndex - 1 + ownedFighters.length) % ownedFighters.length);
    };

    return (
        <div className='backgroundImageUsers'>
            <div className='user-greeting'>Hello, {username}</div>
            {ownedFighters.length > 0 ? (
                <div className='user-fighters-section'>
                    <div className='user-fighters-title'>This is your fighter:</div>
                    <div className='user-fighters-list'>
                        <div className='user-fighter-card'>
                            {ownedFighters.length > 1 && (
                                <button onClick={handlePrevious} className='nav-button left'>{'<'}</button>
                            )}
                            <div key={ownedFighters[currentFighterIndex]._id}>
                                <div className='user-fighter-name'>Name: {ownedFighters[currentFighterIndex].name}</div>
                                <div className='user-fighter-name'>Type: {ownedFighters[currentFighterIndex].type}</div>
                                <div className='user-fighter-name'>Element: {ownedFighters[currentFighterIndex].element}{getElementEmoji(ownedFighters[currentFighterIndex].element)}</div>
                                <div className='imageAndStats'>
                                    <div className='fighter-description fighter-stats'>
                                        {ownedFighters[currentFighterIndex].description && (
                                            <p className='text-white'>
                                                {showFullDescription ? ownedFighters[currentFighterIndex].description : ownedFighters[currentFighterIndex].description.slice(0, 140)}
                                            </p>
                                        )}
                                        {ownedFighters[currentFighterIndex].description && ownedFighters[currentFighterIndex].description.length > 140 && (
                                            <button className='read-more-button' onClick={toggleDescription}>
                                                {showFullDescription ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}
                                    </div>
                                    <img src={ownedFighters[currentFighterIndex].img} alt={ownedFighters[currentFighterIndex].name} className="fighter-details-image" />
                                    <div className='fighter-info'>
                                        {ownedFighters[currentFighterIndex].stats && (
                                            <div className='fighter-stats'>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Health Points:</strong></td>
                                                            <td className='blueishStats'>{ownedFighters[currentFighterIndex].stats.health}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Attack:</strong></td>
                                                            <td className='blueishStats'>{ownedFighters[currentFighterIndex].stats.attack}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Defense:</strong></td>
                                                            <td className='blueishStats'>{ownedFighters[currentFighterIndex].stats.defense}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Speed:</strong></td>
                                                            <td className='blueishStats'>{ownedFighters[currentFighterIndex].stats.speed}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Intelligence:</strong></td>
                                                            <td className='blueishStats'>{ownedFighters[currentFighterIndex].stats.intelligence}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='user-fighter-buttons'>
                                    <button onClick={() => handleUpdate(ownedFighters[currentFighterIndex]._id)} className='user-fighter-button'>Update</button>
                                    <button onClick={() => handleDelete(ownedFighters[currentFighterIndex]._id)} className='user-fighter-button'>Delete</button>
                                </div>
                            </div>
                            {ownedFighters.length > 1 && (
                                <button onClick={handleNext} className='nav-button right'>{'>'}</button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='user-fighters-section'>
                    <div className='user-fighters-title'>Currently, you have no fighter</div>
                </div>
            )}
        </div>
    );
}
