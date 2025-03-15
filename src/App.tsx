
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CurrentActivity from './components/CurrentActivity';
import DateDisplay from './components/DateDisplay';
import DailyDua from './components/DailyDua';
import RandomVerse from './components/RandomVerse';
import IslamicEvents from './components/IslamicEvents';
import Navigation from './components/Navigation';

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [dua, setDua] = useState('اللهم اجعلنا ممن يستمعون القول فيتبعون أحسنه');

  useEffect(() => {
    // Set current date
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setCurrentDate(today.toLocaleDateString('ar-LY', options));
    
    // Add stars to background
    createStars();
  }, []);

  const createStars = () => {
    const container = document.createElement('div');
    container.className = 'stars-container';
    
    // Add 100 stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      container.appendChild(star);
    }
    
    // Add 5 shooting stars
    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = `${Math.random() * 40}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.animationDelay = `${Math.random() * 15}s`;
      shootingStar.style.animationDuration = `${3 + Math.random() * 5}s`;
      container.appendChild(shootingStar);
    }
    
    document.body.appendChild(container);
  };

  return (
    <div className="app-container pb-5 mb-5">
      <Header />
      <CurrentActivity activity="" />
      <DateDisplay date={currentDate} />
      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-12">
            <DailyDua dua={dua} />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12">
            <RandomVerse />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-12">
            <IslamicEvents />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
