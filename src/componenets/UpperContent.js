import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import DisplayScreen from './DisplaySection';
import Actions from './Actions';

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        width: "100%",
        height: "50%",
        borderBottom: "1px solid black",
        background: "#2b3a47",
        display: "flex"
    },
    displayScreen: {
        borderRight: "1px solid black"
    }
}));

const Upper = () => {
    const classes = useStyles();
    return ( 
        <Grid xs={12} className={classes.wrapper}>
            <Grid item xs={7} className={classes.displayScreen}>
                <DisplayScreen />
            </Grid>
            <Grid item xs={5}>
                <Actions className={classes.actions}/>
            </Grid>
        </Grid>
     );
}
 
export default Upper;