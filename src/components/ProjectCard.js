import React from 'react'; 

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      padding: '2%', 
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }, 
  }));


export default function ProjectCard(props) { 
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
                {
                props.card.name ? props.card.name: 
                'Heading'
                }
            </Typography>
            <Typography variant="subtitle">
                {
                props.card.description ? props.card.description : 
                'This is a media card. You can use this section to describe the content.'
                }
            </Typography>
            </CardContent>
        </Card>
    )   
}