import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import getElementEmoji from '../../customFunctions/elements';

export default function ArmorDetails() {
    const { id } = useParams();
    const navigation = useNavigate();
    const [showFullDescription, setShowFullDescription] = useState(false);
    
    const armor = useFetch(`http://localhost:3030/data/armors/${id}`,[])

    function handleGoBack() {
        navigation('/armory/armors');
    }

    getElementEmoji(armor.element)

    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }

    let cardClassName = `detailsCard ${armor.element?.toLowerCase()}`;

    return (
        <div className={cardClassName}>
            <div className='fighter-details'>
                <div className='fighter-sep'>
                    <div className='nameAndType'>
                        <h2><strong>{armor.name}</strong></h2>
                        <p className='fighter-type'>Type: {armor.type}</p>
                        <p className='fighter-type'>Element: {armor.element} {getElementEmoji(armor.element)}</p>
                    </div>
                    <div className='imageAndStats'>
                        <div className='fighter-description fighter-stats'>
                                {armor.description && (
                                    <p className='text-white'>
                                        {showFullDescription ? armor.description : armor.description.slice(0, 140)}
                                    </p>
                                )}
                                {armor.description && armor.description.length > 140 && (
                                    <button className='read-more-button' onClick={toggleDescription}>
                                        {showFullDescription ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                        </div>
                        <img src={armor.img} alt={armor.name} className="fighter-details-image" />
                        <div className='fighter-info'>
                            {armor.stats && (
                                <div className='fighter-stats'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><strong>Health:</strong></td>
                                                <td className='blueishStats'>{armor.stats.health}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Defense:</strong></td>
                                                <td className='blueishStats'>{armor.stats.defense}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Speed:</strong></td>
                                                <td className='blueishStats'>{armor.stats.speed}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Intelligence:</strong></td>
                                                <td className='blueishStats'>{armor.stats.intelligence}</td>
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