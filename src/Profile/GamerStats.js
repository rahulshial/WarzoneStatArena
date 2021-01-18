import React from 'react'
import Container from '@material-ui/core/Container';

export default function GamerStats() {
  /** THIS IS WHERE WE WILL SHOW THE GAMER'S WEEKLY AND LIFETIME STATS next to the favourited guns */
  return (
    <div class='gamer-stats'>
      <Container maxWidth="sm">
        <div class='weekly-stats'>
          <h1>Gamer weekly stats</h1>
        </div>
      </Container>
      <Container maxWidth="sm">
        <div class='lifetime-stats'>
          <h1>Gamer lifetime stats</h1>
        </div>
      </Container>
    </div>
  );
};

/**  style={{ backgroundColor: '#cfe8fc', height: '50vh', width: 800 }} */