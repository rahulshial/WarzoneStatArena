import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #22b8cf 30%, #f50057 90%)',
    borderRadius: 3,
    border: 0,
    color: 'linear-gradient(45deg, #f3ec78, #af4261)',
    fontWeight: 'bold',
    fontSize:'22px',
    fontFamily:'Lucidatypewriter, monospace',
    width: '200px',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function ClassesNesting(props) {
  const classes = useStyles();

  return (
    <Button
      onClick={props.onClick}
      classes={{
        root: classes.root, 
        label: classes.label,
      }}
    >
      Roll
    </Button>
  );
}