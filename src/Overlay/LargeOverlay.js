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
      width: theme.spacing(120),
      height: theme.spacing(15),
    }
  },
  card: {
    backgroundColor: '#dadada',
  }
}));

export default function LargeOverlay(props) {

  const classes = useStyles();

  const {
    gameModes,
    checked,
    overlayUrl,
    saveOverlay,
    weeklyData,
    lifetimeData,
    gunData,
    selectedStat,
    tmpStat1,
    tmpStat2,
    tmpStat3,
    tmpStat4,
    tmpStat5,
    tmpStat6,
    tmpStat7,
    tmpStat8,
  } = props



  // This shows the CheckBoxes along side of the the selected overlay

  return (
    <>
      <CheckboxCategories
        gameModes={gameModes}
        selectedStat={selectedStat}
        weeklyData={weeklyData}
        gunData={gunData}
        lifetimeData={lifetimeData}
        checked={checked}
        size="Large"
      />
      <div className="btn-div">
        <button className="overlay-btn" onClick={(e) => { saveOverlay() }}>Create Overlay</button>
      </div>
      <div className={classes.root}>

        <Paper className={classes.card} elevation={15}>
          <div className="full-bar">
            <div className="stats-large-bar">
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
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat4[1])) ? tmpStat4[1] : Number(tmpStat4[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat5[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat5[1])) ? tmpStat5[1] : Number(tmpStat5[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat6[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat6[1])) ? tmpStat6[1] : Number(tmpStat6[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat7[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat7[1])) ? tmpStat7[1] : Number(tmpStat7[1]).toFixed(2)}</div>
              </div>
              <div className="stats1">
                <div className="overlay-title1">{tmpStat8[0]}</div>
                <div className="overlay-stat1">{Number.isInteger(Number(tmpStat8[1])) ? tmpStat8[1] : Number(tmpStat8[1]).toFixed(2)}</div>
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
