import { useState } from 'react';
import Calendar from 'react-calendar';

export default function Events() {
    const [date, setDate] = useState(new Date());
    const [showMore, setShowMore] = useState(null);

    const events = [
      {
          id: 1,
          title: 'Choose Your Fighter Battle Royale Challenge',
          description: 'Join us for an epic showdown in the Choose Your Fighter arena! Pick your favorite fighter and arm them with your chosen weapon. Compete against other players\' customized fighters in a series of intense battles to see who emerges victorious!',
          details: {
              date: 'September 17th, 2024',
              time: '06:00'
          },
          prizes: 'Chance to win a legendary weapon or skin for your champions'
      },
      {
          id: 2,
          title: 'Mystic Quest Adventure',
          description: 'Embark on a thrilling adventure through the enchanted forest! Solve ancient puzzles, battle mystical creatures, and uncover hidden treasures. This event is perfect for those who love mystery and exploration.',
          details: {
              date: 'October 1st, 2024',
              time: '12:00'
          },
          prizes: 'Exclusive mystical artifact and a treasure map for future quests'
      }
  ];

    const handleToggle = (id) => {
        setShowMore((prevShowMore) => (prevShowMore === id ? null : id));
    };

    return (
        <div className='calendarImage'>
            <div className='wrapperForEvents'>
                {events.map((event, index) => (
                    <div key={event.id} className={index === 0 ? 'eventDescription' : 'eventDescription2'}>
                        <section className='event'>
                            <h1 className='blood'>{event.title}</h1>
                        </section>
                        <section className="event-details text-white">
                                    <h2>Event Details</h2>
                                    <ul>
                                        <li><strong>Date:</strong> {event.details.date}</li>
                                        <li><strong>Time:</strong> {event.details.time}</li>
                                    </ul>
                                </section>
                        <button className='read-more-button' onClick={() => handleToggle(event.id)}>
                            {showMore === event.id ? 'Read Less' : 'Read More'}
                        </button>
                        {showMore === event.id && (
                            <>
                                <section className="event-description text-white">
                                    <h2 className='p-2'>Event Description</h2>
                                    <p className='text-white p-2'>{event.description}</p>
                                </section>
                                
                                <section className="prizes">
                                    <h2>Prizes</h2>
                                    <p className='text-white'>{event.prizes}</p>
                                </section>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className='app'>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className='text-center text-sky-200'>
                    <strong>
                        <span className='bold'>Date Today:</span> {date.toDateString()}
                    </strong>
                </p>
            </div>
        </div>
    );
}