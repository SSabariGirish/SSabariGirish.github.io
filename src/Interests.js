import React from 'react';

function Interests() {
  return (
    <section id="interests">
      <h2>Languages & Interests</h2>
      
      <div className="interests-container">
        <div className="language-list">
          <h3>Languages</h3>
          
          <div className="language-item">
            <strong>English (Full Professional Proficiency):</strong>
            <p>
              My education has been conducted entirely in English, from my 
              schooling in the UAE and India to my MSc in the UK (IELTS Band 8).
            </p>
          </div>
          
          <div className="language-item">
            <strong>Tamil (Native/Fluent):</strong>
            <p>As my mother tongue, I am fully proficient in reading, writing, and speaking.</p>
          </div>
          
          <div className="language-item">
            <strong>Hindi (Fluent):</strong>
            <p>
              I have formal proficiency from passing the Dakshin Bharat Hindi 
              Prachar Sabha exams up to the 'Praveshika' level.
            </p>
          </div>
          
          <div className="language-item">
            <strong>Japanese (Basic):</strong>
            <p>
              A passionate hobby. I am self-taught in Hiragana and Katakana, 
              driven by my interest in Japanese media and games.
            </p>
          </div>
        </div>

        <div className="hobby-list">
          <h3>Hobbies & Interests</h3>
          <p>
            When I'm not building projects, I'm usually:
          </p>
          <ul>
            <li>
              Diving into deep, story-focused video games (like the 
              <em> Yakuza</em>, <em>Witcher</em>, <em>Dishonored</em> and <em>Assassin's Creed </em> series).
            </li>
            <li>
              Analysing character behaviours and narrative patterns in the media I consume.
            </li>
            <li>
              Playing strategic tabletop games like <em>Terraforming Mars</em>, 
              <em> Splendor</em>, and D&D (which inspired my 'Wards and Firewalls' project!).
            </li>
            <li>Cooking Indian food (and I'm told I'm rather good at it).</li>
            <li>Reading Japanese manga and Korean manhwa.</li>
            <li>Watching sports (Cricket and Basketball are my favourites).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Interests;