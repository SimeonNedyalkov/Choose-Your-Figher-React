import React, { useState } from 'react';
import getElementEmoji from '../../customFunctions/elements';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Arena() {
    const fighters = useFetch('http://localhost:3030/data/fighters', []);
    const [currentFighterIndex, setCurrentFighterIndex] = useState(0);

    const handleNextFighter = () => {
        setCurrentFighterIndex((prevIndex) => (prevIndex + 1) % fighters.length);
    };

    const handlePrevFighter = () => {
        setCurrentFighterIndex((prevIndex) => (prevIndex - 1 + fighters.length) % fighters.length);
    };

    const currentFighter = fighters[currentFighterIndex];

    return (
        <div className="arenaBackground">
            <div className="chooseFighter">Choose Your Fighter:</div>
            <div className="fighterCardContainer">
                <div className="pointer" onClick={handlePrevFighter}>
                    &#9664;
                </div>
                <div className="fighterCard">
                    <div className="imageBox">
                        <img src={currentFighter?.img} alt={currentFighter?.name} className="fighterImage" />
                    </div>
                    <div className="fighterName">{currentFighter?.name}</div>
                    <div className="fighterElement mb-1">
                        {currentFighter?.element} {getElementEmoji(currentFighter?.element)}
                    </div>
                    <Link
                        to={`/battleground/${currentFighter?._id}`}
                        className="hover:no-underline flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Pick
                    </Link>
                </div>
                <div className="pointer" onClick={handleNextFighter}>
                    &#9654;
                </div>
            </div>
        </div>
    );
}
