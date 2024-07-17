import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ArmorDetails() {
    const { id } = useParams();
    const navigation = useNavigate();
    const [armor, setArmor] = useState({});
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3030/data/armors/${id}`);
                const res = await response.json();
                setArmor(res);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [id]);

    function handleGoBack() {
        navigation('/armors');
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
                                                <td><strong>Attack:</strong></td>
                                                <td className='blueishStats'>{armor.stats.attack}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Speed:</strong></td>
                                                <td className='blueishStats'>{armor.stats.speed}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Defense:</strong></td>
                                                <td className='blueishStats'>{armor.stats.defense}</td>
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