import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

export default function ChampionsDetails() {
    const { id } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const navigation = useNavigate();

    const fighter = useFetch(`http://localhost:3030/data/fighters/${id}`,[])

    function handleGoBack() {
        navigation('/champions');
    }

    function getElementEmoji(element) {
        if (!element) return '';
        switch (element.toLowerCase()) {
            case 'water':
                return '💧';
            case 'fire':
                return '🔥';
            case 'earth':
                return '🪨';
            case 'wind':
                return '🌪️';
            default:
                return ''; // Default case, can be customized based on your needs
        }
    }

    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }

    let cardClassName = `detailsCard ${fighter.element?.toLowerCase()}`;

    return (
        <div className={cardClassName}>
            <div className='fighter-details'>
                <div className='fighter-sep'>
                    <div className='nameAndType'>
                        <h2><strong>{fighter.name}</strong></h2>
                        <p className='fighter-type'>Type: {fighter.type}</p>
                        <p className='fighter-type'>Element: {fighter.element} {getElementEmoji(fighter.element)}</p>
                    </div>
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
                    <button className='go-back-button' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
}