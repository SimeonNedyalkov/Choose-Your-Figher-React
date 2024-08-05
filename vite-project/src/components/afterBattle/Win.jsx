import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import {useNavigate, useParams} from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import fightRecordsAPI from '../../sevices/fightRecordsAPI';

const WinAnimation = () => {
    const navigation = useNavigate()
    const {fighterId,enemyId} = useParams()
  const props = useSpring({
    from: { transform: 'scale(0) translateX(-1000px)', opacity: 0 },
    to: [
      { transform: 'scale(1.5) translateX(0px)', opacity: 1 },
      { transform: 'scale(1) translateX(0px)' },
      { transform: 'scale(1.2) translateX(-30px)' },
      { transform: 'scale(1) translateX(30px)' },
      { transform: 'scale(1.1) translateX(0px)' }
    ],
    config: { tension: 280, friction: 60 }
  });
  const buttonProps = useSpring({
    from: { transform: 'scale(0)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    delay: 2000,
    config: { tension: 280, friction: 60 }
  });
  function onGoBack(){
    navigation('/arena')
  }
  fightRecordsAPI.createFightRecord(fighterId,enemyId)
  return (
    <div className='winBackGround'>
        <div className="win-animation-container">
            <animated.h1 style={props} className="battleResultsh1">You won!</animated.h1>
            <br/>
            <animated.button style={buttonProps} className="win-go-back-button" onClick={onGoBack}>Go Back</animated.button>
        </div>
    </div>
    
  );
};

export default WinAnimation;
