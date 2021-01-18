import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ProjectGrid from "./ProjectGrid";
import cards from '../projectinfo';

const useStyles = makeStyles({
    mainHeaderText: {
      paddingTop: '40px', 
      paddingLeft: '5%', 
      paddingRight: '5%', 
    }
});

export default function Projects() {
  const classes = useStyles();
  return (
      <div style={{minHeight: '100vh'}}>
        <Typography variant="h2" component="h3" className={classes.mainHeaderText}>
          Projects
        </Typography>
        <ProjectGrid cards={cards}/> 
      </div>
    
  );
}