import React from 'react';
import {Link} from 'react-router-dom'

export default function Weapons({ weapons }) {
    return (
        <div className='backgroundImageChampions'>
        <div className='allFighters'>
            {weapons.map(weapon => (
                <div key={weapon._id} className="fighter-card">
                    <img src={`../../${weapon.img}`} alt={weapon.name} className="fighter-image" />
                    <h3>{weapon.name}</h3>
                    <p>{weapon.type}</p>
                    <Link to={`/weapons/${weapon._id}`} className="hover:no-underline flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">View details</Link>
                </div>
            ))}
        </div>
        </div>
    );
}