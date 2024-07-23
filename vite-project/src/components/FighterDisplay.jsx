import rng from '../customFunctions/rng';
import useFetch from '../hooks/useFetch';
import { useParams,useNavigate } from 'react-router-dom';

// services


const FighterDisplay = () => {
    const {fighterId,weaponId,armorId} = useParams();
    const navigation = useNavigate()

    const fighter = useFetch(`http://localhost:3030/data/fighters/${fighterId}`,[])
    const armor = useFetch(`http://localhost:3030/data/armors/${armorId}`,[])
    const weapon = useFetch(`http://localhost:3030/data/weapons/${weaponId}`,[])

    function goBack(){
        navigation('/selectFighter')
    }

    const calculateCombinedStats = () => {
        let combinedStats = {};
        if (fighter.stats && weapon.stats && armor.stats) {
            Object.entries(fighter.stats).forEach(([stat, value]) => {
                combinedStats[stat] = value;
            });
            Object.entries(weapon.stats).forEach(([stat, value]) => {
                if (combinedStats[stat]) {
                    combinedStats[stat] += value;
                } else {
                    combinedStats[stat] = value;
                }
            });
            Object.entries(armor.stats).forEach(([stat, value]) => {
                if (combinedStats[stat]) {
                    combinedStats[stat] += value;
                } else {
                    combinedStats[stat] = value;
                }
            });
        }
        return combinedStats;
    };
    const combinedStats = calculateCombinedStats()
    return (
        <div className='fighterDisplayImage'>
        <div className="fighter-display">
            <div className="fighter-details">
                <div>
                {combinedStats && (
                    <>
                        <div className='descAndImages'>
                        {/* <h3 className='transparent-box'><br/>{fighter.name} equipped with {weapon.name} and {armor.name}</h3> */}
                        <div className="transparent-box m-2">
                        <div className="champion-menu">
                            <div className="champion-info">
                                <h2>{fighter.name}</h2>
                                <div className="champion-image-wrapper">
                                    <img src={fighter.img} alt={fighter.name} className="fighter-image2" />
                                </div>
                            </div>
                            <div className="equipment">
                                <h3 className='text-white mb-4'>Equipment</h3>
                                <div className="item">
                                    <div className="item-image-wrapper">
                                        <img src={weapon.img} alt={weapon.name} className="item-image2" />
                                    </div>
                                    <span className="item-name">{weapon.name}</span>
                                </div>
                                <div className="item">
                                    <div className="item-image-wrapper">
                                        <img src={armor.img} alt={armor.name} className="item-image2" />
                                    </div>
                                    <span className="item-name">{armor.name}</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='fighter-stats'>
                        <table>
                            <tbody>
                                {Object.entries(combinedStats).map(([stat, value]) => (
                                    <tr key={stat}>
                                        <td><strong>{stat}</strong></td>
                                        <td className='blueishStats'>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </>
                )}
                <button onClick={goBack} className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Go Back</button>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default FighterDisplay;