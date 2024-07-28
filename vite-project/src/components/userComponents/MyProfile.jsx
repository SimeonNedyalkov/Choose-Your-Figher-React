import React, { useEffect, useState } from 'react';
import userAPI from "../../sevices/usersAPI";
import useFetch from '../../hooks/useFetch';

export default function MyProfile() {
    const [username, setUsername] = useState('');
    const [userId,setUserId] =useState('')
    let ownedFighters = []

    useEffect(() => {
        async function fetchUserInfo() {
            try {
                const { username,_id } = await userAPI.getUserInfo();
                setUserId(_id)
                setUsername(username);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo();
    }, []);

    const fighters = useFetch('http://localhost:3030/data/fighters',[])
    
    fighters.map((fighter)=>{
        if(fighter._ownerId == userId){
            ownedFighters.push(fighter)
        }
    })

    return (
        <div>
            <div>Hello, {username}</div>
            {ownedFighters.length>0 && (
                <div className='backgroundImage'>
                <div>Those are your fighters:</div>
                <div>{ownedFighters.map(fighter=>(
                        <div key={fighter._id}>
                            <div>{fighter.name}</div>
                            <div><img src={fighter.img} alt={fighter.name} /></div>
                        </div>
                        
                ))}</div>
                </div>
            )}
        </div>
    );
}
