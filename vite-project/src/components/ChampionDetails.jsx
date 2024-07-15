import {useParams,useNavigate} from 'react-router-dom'

import { useEffect,useState } from 'react'
export default function ChampionsDetails(){
    const {id} = useParams()
    const navigation = useNavigate()
    const [fighter,setFighter] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3030/data/fighters/${id}`);
            const res = await response.json();
            setFighter(res)
            console.log(res);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchData()
      }, []);
      function handleGoBack(){
        navigation('/champions')
      }
      
    return(
        <div className='detailsCard'>
            
        <div className='fighter-details'>
        <div className='fighter-sep'>
            <div className='nameAndType'>
                <h2><strong>{fighter.name}</strong></h2>
                <p className='fighter-type'>Type: {fighter.type}</p>
                <p className='fighter-type'>Element: {fighter.element}</p>
            </div>
            <div className='imageAndStats'>
            <img src={fighter.img} alt={fighter.name} className="fighter-details-image" />
            <div className='fighter-info'>
                {fighter.stats && (
                    <div className='fighter-stats'>
                        <h3><strong>Stats:</strong></h3>
                        <p><strong>Attack:</strong> {fighter.stats.attack}</p>
                        <p><strong>Defense:</strong> {fighter.stats.defense}</p>
                        <p><strong>Speed:</strong> {fighter.stats.speed}</p>
                        <p><strong>Intelligence:</strong> {fighter.stats.intelligence}</p>
                        <p><strong>Health:</strong> {fighter.stats.health}</p>
                    </div>
                )}
                </div>
                </div>
            </div>
        </div>
        <button className='go-back-button' onClick={handleGoBack}>Go Back</button>
        </div>
        
    )
}