import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

import rng from '../customFunctions/rng';
import useAudio from '../hooks/useAudio';
import { useAuthContext } from '../contexts/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() { 
    const [currentQuote, setCurrentQuote] = useState(null);
    const {isPlaying,toggleAudio} = useAudio()
    const {isAuthenticated} = useAuthContext()
    const navigation = useNavigate()
    useEffect(() => {
        // Set the quote once when the component mounts
        setCurrentQuote(rng.generateRandomFighterOrItem(quotes));
    }, []);
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 700
    });

    const lineAnimation = useSpring({
        from: { width: '0%' },
        to: { width: '80%' },
        config: { duration: 1000 }
    });

    const quotes = [
        { author: 'Sun Tzu', quote: "Every battle is won before it's ever fought." },
        { author: 'Sun Tzu', quote: 'The greatest victory is that which requires no battle.' },
        { author: 'Margaret Atwood', quote: 'War is what happens when language fails.' },
        { author: 'Lao Tzu', quote: 'The best fighter is never angry.' },
        { author: 'Heraclitus', quote: 'War is the father of all things.' }
    ];
    
    return (
        <>
            <div className="homePage" tabIndex={0}>
                <div className="contents">
                    <animated.h1 style={fade} className="title text-8xl font-bold font-mono">Choose your Fighter</animated.h1>
                    <animated.div style={lineAnimation} className="fancy-line"></animated.div>
                    {currentQuote && (
                        <animated.h4 style={fade} className="picktext text-2xl font-extralight font-bold text-white-300 italic mt-4 mb-6">
                            {`${currentQuote.quote} - ${currentQuote.author}`}
                        </animated.h4>
                    )}
                    {isAuthenticated ?(
                        <div className="buttonContainer">
                        <button onClick={() => navigation('/arena')} className="startButton">Start Game</button>
                    </div>
                    ):(
                        <div className="buttonContainer">
                            <button onClick={() => navigation('/login')} className="startButton">Start Game</button>
                        </div>
                    )}
                    
                </div>
            </div>
            <div className={isPlaying ? 'audioButton soundOn' : 'audioButton soundOff'}>
                <button onClick={toggleAudio} className="soundToggle"></button>
            </div>
        </>
    );
}
