import React from 'react'

export default function Overview(props) {
  const { test, shown } = props
  console.log(shown);
  const fullLevel = shown.allstats.levelXpGained + shown.allstats.levelXpRemainder;
  const percentageToLevel = shown.allstats.levelXpRemainder / fullLevel * 100
  const timePlayedTotal = shown.allstats.lifetime.mode.br.properties.timePlayed

  return (
    <div>
      <h1>{shown.allstats.username}</h1>
      <h1>platform</h1>
      <h2>{shown.allstats.platform}</h2>
      <h1>Time Played</h1>
      <h2>{timePlayedTotal}</h2>
      <h1>Level</h1>
      <h2>{shown.allstats.level}</h2>
      <h1>Xp Earned This Level</h1>
      <h2>{shown.allstats.levelXpGained}</h2>
      <h1>Xp Till Level UP</h1>
      <h2>{shown.allstats.levelXpRemainder}</h2>
      <h1>To Next Level</h1>
      <h2>{percentageToLevel.toFixed(2)}%</h2>
    </div>
  )
}
