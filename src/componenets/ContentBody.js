import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Upper from './UpperContent';
import ResultsScreen from './ResultsScreen';

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        background: "#21303d",
        borderRadius: "0 30px 30px 0",
        paddingLeft: 0,
        paddingRight: 0,
        height: "inherit"
    }
}));

const ContentBody = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth="xl" className={classes.wrapper}>
            <Upper/>
            <ResultsScreen/>
        </Container>
     );
}
 
export default ContentBody;