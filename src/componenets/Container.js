import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconsBar from './IconsBar';
import Main from './Main';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerWrapper: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    content: {
        borderRadius: '30px'
    },
    iconsBarWrapper: {
      background: "#1e2935",
      flexGrow: 0,
      maxWidth: "6.333333%",
      flexBasis: "6.333333%",
      borderRadius: "30px 0 0 30px",
      padding: "10px 0"
    },
    mainsWrapper: {
      flexGrow: 0,
      maxWidth: "93.666666%",
      flexBasis: "93.666666%",
    }
}));


const Containe = () => {
    const classes = useStyles();
    return (
      <Container maxWidth="xl" className={classes.containerWrapper}>
        <Grid className={classes.content} container>
            <Grid container item className={classes.iconsBarWrapper}>
              <IconsBar/>
            </Grid>
            <Grid container item className={classes.mainsWrapper}>
              <Main/>
            </Grid>
        </Grid>
      </Container>
    );
}
 
export default Containe;