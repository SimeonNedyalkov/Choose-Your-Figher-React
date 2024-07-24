import { useState,useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import darkSoulsTheme from '../../audio/ds3maintheme.mp3';
export default function useAudio(){
    const [isPlaying, setIsPlaying] = useState(null);
    const location = useLocation();
    const audioRef = useRef(new Audio(darkSoulsTheme));
    useEffect(() => {
        // Stop the audio when the path changes
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, [location.pathname]);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return {
        isPlaying,
        setIsPlaying,
        toggleAudio
    };
}