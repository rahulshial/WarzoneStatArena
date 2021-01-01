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
    console.log(newTab);
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
        <Tab label="Assault Rifles" />
        <Tab label="MarksMan Rifles" />
        <Tab label="Snipers" />
        <Tab label="Smg's" />
        <Tab label="Tacticals" />
        <Tab label="Lethals" />
        <Tab label="LMG's" />
        <Tab label="Launchers" />
        <Tab label="Pistols" />
        <Tab label="ShotGuns" />
      </Tabs>
    </Paper>
  );
}