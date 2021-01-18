import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  intro: { 
    textAlign: 'center', 
    height: '100vh', 
    width: '100vw', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    alignContent: 'center',
  }
};

const useStyles = makeStyles(styles);

export default function Intro() {
  const classes = useStyles();
  return (
      <div className={classes.intro}>
        <Typography variant="h2" component="h3">
          {"👋 I'm Andrew Lucero."}
        </Typography>
        <div />
        <Typography variant="h6">
          I'm a student at NYU Tandon studying Computer Science. 
        </Typography>
        <Typography variant="h6">
          I'm graduating December 2019 and currently seeking full time employment.
        </Typography>
        <Typography variant="h6">
          I'm interested in Web and Mobile Development right now.
        </Typography>
      </div>
  );
}