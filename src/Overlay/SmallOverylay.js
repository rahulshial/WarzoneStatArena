import React from 'react'
import CheckboxCategories from './CheckboxCategories'
import URLtextField from './URLtextField'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    "& > *": {
      marginTop: theme.spacing(0),
      width: theme.spacing(70),
      height: theme.spacing(15),
    }
  },
  card: {
    backgroundColor: '#dfdede',
  }
}));

export default function SmallOverylay(props) {

  const classes = useStyles();

  const {
    gameModes,
    overlayUrl,
    saveOverlay,
    weeklyData,
    lifetimeData,
    gunData,
    selectedStat,
    tmpStat1,
    tmpStat2,
    tmpStat3,
    tmpStat4
  } = props

   // This shows the CheckBoxes along side of the the selected overlay

  return (
    <>
      <CheckboxCategories
        gameModes={gameModes}
        selectedStat={selectedStat}
        weeklyData={weeklyData}
        size={4}
      />
      <div className="btn-div">
        <button className="overlay-btn" onClick={(e) => { saveOverlay() }}>Create Overlay</button>
      </div>
      <div className={classes.root}>

        <Paper className={classes.card} elevation={15}>
          <div className="medium-bar">
            <div className="stats-medium-bar">

              <div className="stats1">
                <div className="overlay-title1">{tmpStat1[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat1[1])) ? tmpStat1[1] : Number(tmpStat1[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat2[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat2[1])) ? tmpStat2[1] : Number(tmpStat2[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat3[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat3[1])) ? tmpStat3[1] : Number(tmpStat3[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat4[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat4[1])) ? tmpStat4[1] : Number(tmpStat4[1]).toFixed(2)}
                </div>
              </div>

            </div>
          </div>
        </Paper>
      </div>
      <div className="url-field">
        {overlayUrl.length > 0 ?
          <URLtextField url={overlayUrl} /> :
          <></>
        }
      </div>
    </>
  )
}

