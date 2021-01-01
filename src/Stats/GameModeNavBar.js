import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
        value={tab}
        onChange={chosenTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Gun Game" />
        <Tab label="Domination" />
        <Tab label="War" />
        <Tab label="HQ" />
        <Tab label="HC Domination" />
        <Tab label="KOTH" />
        <Tab label="Arena" />
        <Tab label="WARZONE" />
        <Tab label="Search And Destroy" />
        <Tab label="Cyber" />
        <Tab label="arm" />

      </Tabs>
    </Paper>
  );
}