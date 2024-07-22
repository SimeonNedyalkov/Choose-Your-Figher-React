import {useSpring,animated} from 'react-spring'
export default function Home() {
    const fade = useSpring({
        from:{
            opacity:0
        },
        to:{
            opacity:1
        },
    })
    return (
        
        <div className={`homePage`}  tabIndex={0}>
            
            <div className={`contents`} >
                <animated.h1 style={fade} className="title text-8xl font-bold font-mono">Choose your Fighter</animated.h1>
                <div className="fancy-line"></div>
                <h4 className="picktext text-2xl font-extralight font-bold text-white-300 italic mt-4 mb-6">
                "Every battle is won before it's ever fought." – Sun Tzu
                </h4>
                <div className="buttonContainer">
                    <button onClick={() => console.log('Game started')} className="startButton">Start Game</button>
                </div>
            </div>

        </div>
        
    );
}