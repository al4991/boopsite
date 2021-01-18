import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  
  })
);

export default function ProjectGrid(props) {
  const classes = useStyles();
  return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {props.cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
            <ProjectCard card={card} /> 
            </Grid>
        ))}
        </Grid>
    </Container>

  );
}