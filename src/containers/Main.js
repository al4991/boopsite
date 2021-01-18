import React from 'react'; 

import { makeStyles } from "@material-ui/core/styles";

import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Experience from '../components/ExperienceCard';



const colors = {

    1: 'linear-gradient(to top, #30cfd0 0%, #330867 100%);', 
    2: 'linear-gradient(to top, #f43b47 0%, #453a94 100%);', 
    3: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);',
    4: 'linear-gradient(to top, #3ab5b0 0%, #3d99be 31%, #56317a 100%);',
    5: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(2,25,84,1) 100%);',
    6: 'linear-gradient(0deg, rgba(0,222,189,1) 0%, rgba(3,19,233,1) 71%, rgba(39,3,91,1) 100%)'
}

const useStyles = makeStyles({
    mainContainer: {
        background: colors[5], 
        width: '100vw', 
        position: 'absolute', 
        top: 0, 
        left:0, 
        right:0, 
        bottom:0, 
        textAlign: 'center', 
        color: '#f0f4ff',
        overflow: 'auto', 
    }
  });us


export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}> 
            <Intro /> 
            <Projects />
            {/* <ExperienceCard />  */}
        </div>
    )
}