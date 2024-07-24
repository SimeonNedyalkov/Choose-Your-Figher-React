import React from 'react';
import {Link} from 'react-router-dom'

export default function Champions({ fighters }) {
    return (
        <div className='backgroundImageChampions'>
        <div className='allFighters'>
            {fighters.map(fighter => (
                <div key={fighter._id} className="fighter-card">
                    <img src={`../../${fighter.img}`} alt={fighter.name} className="fighter-image" />
                    <h3>{fighter.name}</h3>
                    <p>{fighter.type}</p>
                    <Link to={`/armory/champions/${fighter._id}`} className="hover:no-underline flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">View details</Link>
                </div>
            ))}
        </div>
        </div>
    );
}