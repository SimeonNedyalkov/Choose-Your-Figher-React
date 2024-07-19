export default function Home() {
    return (
        <div className={`homePage animation`} tabIndex={0}>
            <div className={`contents`}>
                <h1 className="title text-5xl font-bold">Choose your Fighter!</h1>
                <h4 className="picktext text-2xl font-extralight font-bold">
                    Pick your fighter, choose your weapon, and prepare for battle!
                </h4>
                <div className="buttonContainer">
                    <button onClick={() => console.log('Game started')} className="startButton">Start Game</button>
                </div>
            </div>
        </div>
    );

}