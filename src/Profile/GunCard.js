import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'teal',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 140,
    height: 140,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  const { gunImage, gunName} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item direction column spacing={1} style={{maxWidth: '16%'}}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={gunImage}/>
            </ButtonBase>
            <Paper className={classes.paper} gutterBottom style={{ display: 'flex', justifyContent: 'center', fontSize:15 }} variant="subtitle1">{gunName}</Paper>
          </Grid>
          <Grid item xs sm container style={{maxWidth: '50%'}}>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs container direction='row' spacing={2}>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
              </Grid>
              <Grid className='achievements' item xs container direction='row'>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
              </Grid>
              <Grid item>
              <Button variant="contained" color="secondary">Remove</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs sm container style={{maxWidth: '34%'}}>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs container direction='row' spacing={2}>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>
              </Grid>
              <Grid className='achievements' item xs container direction='row'>
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
                <Grid xs={2}>
                  <Paper className={classes.paper}>{gunName}</Paper>
                </Grid>                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
