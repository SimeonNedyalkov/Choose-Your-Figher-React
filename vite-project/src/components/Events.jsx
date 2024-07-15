import { useState } from 'react';
import Calendar from 'react-calendar';



export default function Events() {
    
    const [date, setDate] = useState(new Date());

    return (
      
      <div className='calendarImage'>
      <div className='eventDescription'>
        <section className='event'>
          <h1 className='blood'>Choose Your Fighter Battle Royale Challenge</h1>
        </section>
    
        <section className="event-description">
            <h2>Event Description</h2>
            <p>Join us for an epic showdown in the Choose Your Fighter arena! Pick your favorite fighter and arm them with your chosen weapon. Compete against other players' customized fighters in a series of intense battles to see who emerges victorious!</p>
        </section>
    
        <section className="event-details">
            <h2>Event Details</h2>
            <ul>
                <li><strong>Date:</strong> September 17th, 2024</li>
                <li><strong>Time:</strong> 06:00</li>
            </ul>
        </section>
    
        <section className="how-it-works">
            <h2>How It Works</h2>
            <ol>
                <li>
                    <strong>Fighter Selection:</strong> Participants choose their fighter from a diverse roster including bears, octopuses, tigers, sharks, and more.
                </li>
                <li>
                    <strong>Weapon Selection:</strong> Equip your fighter with a weapon of your choice. Each weapon modifies your fighter's stats differently.
                </li>
                <li>
                    <strong>Battle Simulation:</strong> Using the app, all fighters' stats are calculated based on their chosen weapon. The app randomly selects opponents for each participant's fighter.
                </li>
                <li>
                    <strong>Live Battles:</strong> Watch as your fighter battles it out against another participant's fighter in real-time simulations. Results will be displayed immediately after each battle.
                </li>
                <li>
                    <strong>Leaderboard:</strong> Track your progress on the leaderboard throughout the event. The fighter with the most wins at the end of the challenge period is crowned the Battle Royale Champion!
                </li>
            </ol>
        </section>
    
        <section className="prizes">
            <h2>Prizes</h2>
            <p>Chance to win a legendary weapon or skin for your champions</p>
        </section>
      </div>
      
      <div className='app'>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center text-sky-200'>
          <strong>
          <span className='bold'>Date Today:</span>{' '}
          {date.toDateString()}
          </strong>
        </p>
      </div>
      </div>
      
    );
}