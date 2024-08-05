import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import getElementEmoji from '../../customFunctions/elements';
import fightRecordsAPI from '../../sevices/fightRecordsAPI';

export default function ChampionsDetails() {
    const { id } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [fighterWins,setFighterWins] = useState([])
    const [fighterLosses,setfighterLosses] = useState([])
    const navigation = useNavigate();

    const fighter = useFetch(`http://localhost:3030/data/fighters/${id}`,[])

    useEffect(()=>{
        (async()=>{
            const fw = await fightRecordsAPI.getAllWins(id)
            const fl = await fightRecordsAPI.getAllLosses(id)
            setFighterWins(fw)
            setfighterLosses(fl)
        })()
    },[])

    function handleGoBack() {
        navigation('/armory/champions');
    }

    getElementEmoji(fighter.element)

    function toggleDescription() {
        setShowFullDescription(!showFullDescription);
    }

    let cardClassName = `detailsCard ${fighter.element?.toLowerCase()}`;

    console.log(fighterWins)
    return (
        <div className={cardClassName}>
            <div className='fighter-details'>
                <div className='fighter-sep'>
                    <div className='nameAndType'>
                        <div>
                            <h2><strong>{fighter.name}</strong></h2>
                            <p className='fighter-type'><strong>Type: {fighter.type}</strong></p>
                            <p className='fighter-type'><strong>Element: {fighter.element} {getElementEmoji(fighter.element)}</strong></p>
                        </div>
                        <div className='winsAndLosses'>
                            <p><strong>Wins: {fighterWins.length}</strong></p>
                            <p><strong>Losses: {fighterLosses.length}</strong></p>
                        </div>
                    </div>
                    
                    <div className='imageAndStats'>
                        <div className='fighter-description fighter-stats'>
                                {fighter.description && (
                                    <p className='text-white'>
                                        {showFullDescription ? fighter.description : fighter.description.slice(0, 140)}
                                    </p>
                                )}
                                {fighter.description && fighter.description.length > 20 && (
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