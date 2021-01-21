
import axios from 'axios';
import asy from 'async'


export default async function getStatsForFavorites(favorites) {

  return new Promise(async (resolve, reject) => {
    let trackedStats = [];  


    await asy.eachSeries(favorites, async fav => {
      console.log(favorites);
      const fixed = JSON.parse(fav.tracked_item);
      const res = await axios.get(`http://localhost:3030/stats/moho/${fixed.gun}/${fixed.cat}`)
      trackedStats.push(res.data.properties);
    });
    resolve(trackedStats)
  })






  // Loop through favourites

  // Do API request

  // Push to array of promises

  // promise.all(array of promises)

  // Return data

  // favorites.map((fav, index) => {
  //   const fixed = JSON.parse(fav.tracked);
  //   axios.get(`http://localhost:3030/stats/moho/${fixed.gun}/${fixed.cat}`)
  //     .then(res => {
  //       console.log(res.data.properties);
  //       trackedStats.push(res.data.properties);
  //     })
  //     .catch(err => {
  //       console.log("we have an error");
  //       console.log(err);
  //     })
  //   });
  // console.log(trackedStats)
  // console.log(Object.keys(trackedStats));
  // return trackedStats;
};
