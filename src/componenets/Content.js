import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Sidebar from './Sidabar';
import ContentBody from './ContentBody';

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "92%",
        borderRadius: "0 0 29px 0",
        background: "#5a6a72"
    },
    sidebar: {
        height: "100%",
        width: "22%",
        background: "#394c57"
    },
    body: {
        height: "100%",
        width: "78%"
    }
}));

const Content = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.wrapper}>
            <Grid className={classes.sidebar}>
                <Sidebar/>
            </Grid>
            <Grid className={classes.body}>
                <ContentBody/>
            </Grid>
        </div>
     );
}
 
export default Content;