import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        background: "gray",
        borderRadius: "0 30px 30px 0",
        paddingLeft: 0,
        paddingRight: 0
    }
}));

const Main = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="xl" className={classes.wrapper}>
            <Header/>
            <Content/>
        </Container>
     );
}
 
export default Main;