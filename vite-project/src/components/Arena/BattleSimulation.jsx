import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import rng from '../../customFunctions/rng';

export default function BattleSimulation() {
    const navigate = useNavigate();
    const location = useLocation();
    const { fighterId, enemyId } = useParams();
    const [clash, setClash] = useState(false);
    const [vsVisible, setVsVisible] = useState(true);

    const { pickedFighter, enemyFighter } = location.state;

    const fighterProps = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: clash ? 'translateX(20%)' : 'translateX(0%)' },
        config: { tension: 300, friction: 30 }
    });

    const enemyProps = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: clash ? 'translateX(-20%)' : 'translateX(0%)' },
        config: { tension: 300, friction: 30 }
    });

    useEffect(() => {
        const resultFighter1 = rng.statsCalculator(pickedFighter);
        const resultFighter2 = rng.statsCalculator(enemyFighter);

        setTimeout(() => {
            setVsVisible(false);
            setTimeout(() => {
                setClash(true);
                setTimeout(() => {
                    if (resultFighter1 > resultFighter2) {
                        navigate(`/win/${fighterId}/${enemyId}`,{
                            state:{
                                pickedFighter,
                                enemyFighter
                            }
                        });
                    } else if (resultFighter1 < resultFighter2) {
                        navigate(`/lose/${fighterId}/${enemyId}`,{
                            state:{
                                pickedFighter,
                                enemyFighter
                            }
                        });
                    } else {
                        navigate(`/draw/${fighterId}/${enemyId}`,{
                            state:{
                                pickedFighter,
                                enemyFighter
                            }
                        });
                    }
                }, 2000);
            }, 1000);
        }, 3000);
    }, [navigate, fighterId, enemyId, pickedFighter, enemyFighter]);

    return (
        <div className='battleGroundBackGround'>
            <div className="battleSimulationContainer">
                <animated.div style={fighterProps} className="battleSimulationFighter">
                    <img src={pickedFighter.fighter?.img} alt="Your Fighter" />
                </animated.div>
                {vsVisible && (
                    <div className="battleSimulationVS">
                        <img src="../../../images/justInCase/vs-versus-battle-icon-sign-symbol-black-red-design-transparent-background-free-png.png" alt="VS" />
                    </div>
                )}
                <animated.div style={enemyProps} className="battleSimulationFighter">
                    <img src={enemyFighter.fighter?.img} alt="Enemy Fighter" />
                </animated.div>
                {clash && <div className="clashEffect"></div>}
            </div>
        </div>
    );
}
