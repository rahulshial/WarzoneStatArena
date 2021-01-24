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
        <Tab label="Small Overlay" />
        <Tab label="Large Overlay" />
      </Tabs>
    </Paper>
  );
}