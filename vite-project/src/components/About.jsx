import React from 'react';


export default function About() {
  return (
    <main className="about-container">
      <section id="introduction" className="about-section">
        <h2>Introduction</h2>
        <p>Welcome to Choose Your Fighter, where you can select your champion and engage in epic battles!</p>
      </section>

      <section id="how-to-play" className="about-section">
        <h2>How to Play</h2>
        <ol>
          <li>Choose your fighter from a variety of exciting options, including bears, octopuses, tigers, sharks, and more!</li>
          <li>Select a weapon to equip your fighter with.</li>
          <li>The app will calculate the stats for your fighter.</li>
          <li>Get ready to face off against another randomly selected fighter!</li>
        </ol>
      </section>

      <section id="development" className="about-section">
        <h2>Development</h2>
        <p>Choose Your Fighter is developed using React, ensuring a responsive and interactive user experience.</p>
      </section>

      <section id="credits" className="about-section">
        <h2>Credits</h2>
        <p>Icons made by Freepik from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">www.flaticon.com</a></p>
      </section>
    </main>
  );
}