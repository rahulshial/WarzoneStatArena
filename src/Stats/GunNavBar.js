import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#323B48',
  },
  tab: {
    color: '#DADADA',
    '&:hover': {
      fontWeight: 'bold',
    },
    '&:focus': {
      fontWeight: 'bold',
    },
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const chosenTab = (e, newTab) => {
    setTab(newTab)
    props.onSelect(newTab)
  }
  
  return (
    <Paper className={classes.root}>
      <Tabs
        TabIndicatorProps={{style: {backgroundColor: "#ffd369"}}}
        value={tab}
        onChange={chosenTab}
        centered
      >
        <Tab className={classes.tab} label="Assault Rifles" />
        <Tab className={classes.tab} label="MarksMan Rifles" />
        <Tab className={classes.tab} label="Snipers" />
        <Tab className={classes.tab} label="Smg's" />
        {/* <Tab label="Tacticals" /> */}
        <Tab className={classes.tab} label="Lethals" />
        <Tab className={classes.tab} label="LMG's" />
        <Tab className={classes.tab} label="Launchers" />
        <Tab className={classes.tab} label="Pistols" />
        <Tab className={classes.tab} label="ShotGuns" />
      </Tabs>
    </Paper>
  );
}