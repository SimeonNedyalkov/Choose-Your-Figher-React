import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import getElementEmoji from '../../customFunctions/elements';

export default function WeaponDetails() {
    const { id } = useParams();
    const navigation = useNavigate();
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    const weapon = useFetch(`http://localhost:3030/data/weapons/${id}`,[])

    function handleGoBack() {
        navigation('/weapons');
    }

    getElementEmoji(weapon.element)

    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }

    let cardClassName = `detailsCard ${weapon.element?.toLowerCase()}`;

    return (
        <div className={cardClassName}>
            <div className='fighter-details'>
                <div className='fighter-sep'>
                    <div className='nameAndType'>
                        <h2><strong>{weapon.name}</strong></h2>
                        <p className='fighter-type'>Type: {weapon.type}</p>
                        <p className='fighter-type'>Element: {weapon.element} {getElementEmoji(weapon.element)}</p>
                    </div>
                    <div className='imageAndStats'>
                        <div className='fighter-description fighter-stats'>
                                {weapon.description && (
                                    <p className='text-white'>
                                        {showFullDescription ? weapon.description : weapon.description.slice(0, 140)}
                                    </p>
                                )}
                                {weapon.description && weapon.description.length > 140 && (
                                    <button className='read-more-button' onClick={toggleDescription}>
                                        {showFullDescription ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                        </div>
                        <img src={weapon.img} alt={weapon.name} className="fighter-details-image" />
                        <div className='fighter-info'>
                            {weapon.stats && (
                                <div className='fighter-stats'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><strong>Attack:</strong></td>
                                                <td className='blueishStats'>{weapon.stats.attack}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Speed:</strong></td>
                                                <td className='blueishStats'>{weapon.stats.speed}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Defense:</strong></td>
                                                <td className='blueishStats'>{weapon.stats.defense}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Intelligence:</strong></td>
                                                <td className='blueishStats'>{weapon.stats.intelligence}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                    <button className='go-back-button' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
}