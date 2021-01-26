/** React Imports */
import React from 'react'

/** Material UI Imports */
import Container from '@material-ui/core/Container';

/** Local Imports */
import WeeklyStatCard from './WeeklyStatCard';
import LifetimeStatCard from './LifetimeStatCard';
import '../styles/profile.css';

export default function GamerStats(props) {
  /** THIS IS WHERE WE WILL SHOW THE GAMER'S WEEKLY AND LIFETIME STATS next to the favourited guns */
  const { weeklyData, lifetimeData } = props;
  return (
    <div className='gamer-stats' style={{backgroundColor: '#191D24', minHeight: '100vh', height: '100%'}}>
      <Container maxWidth="false">
        <div className='weekly-stats'>
          <h1 className='gamer-stats-h1'>Weekly Game Stats</h1>
          <WeeklyStatCard 
          weeklyData = {weeklyData}
          />
        </div>
      </Container>
      <Container maxWidth="false">
        <div className='lifetime-stats'>
          <h1 className='gamer-stats-h1'>Lifetime Game Stats</h1>
          <LifetimeStatCard 
          lifetimeData = {lifetimeData}
          />
        </div>
      </Container>
    </div>
  );
};