import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';
import { MdKeyboardArrowDown } from "react-icons/md";
import Divider from '@material-ui/core/Divider';
import {FiGitCommit} from 'react-icons/fi';

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        width: "100%",
        height: "8%",
        borderRadius: "0 29px 0 0",
        background: "#21303d"
    },
    headerName: {
        opacity: ".7",
        margin: "0 25px",
        display: "flex"
    }, 
    dropdown: {
        border: "1px solid slategray",
        borderRadius: "6px",
        display: "flex"
    },
    caret: {
        position: "relative", top: 3, right: -3, opacity: ".7"
    },
    caret2: {
        position: "relative", top: 8, opacity: ".7"
    },
    display: {
        width: 20,
        height: 13,
        border: "2px solid slategray",
        display: "inline-flex",
        margin: "0 6px",
        padding: "1px"
    },
    rightHeader: {
        margin: "0 10px 0 auto"
    }, 
    line: {
        opacity: ".5",
        position: "relative",
        top: -3,
        fontSize: 12,
        fontWeight: "bold"
    },
    hrLine: {
        opacity: ".5",
        position: "relative",
        top: 3,
        left: 10,
        fontSize: 13,
        fontWeight: "bolder"
    }
}));

const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar className={classes.wrapper}>
            <Toolbar style={{padding: 0}}>
                <Typography 
                    className={classes.headerName}
                >
                    Project name 
                    <span className={classes.caret}>
                        <MdKeyboardArrowDown/>
                    </span>
                </Typography>
                <Typography className={classes.dropdown}>
                    <span style={{padding: "5px 10px"}}>Development</span> 
                    <span className={classes.caret2}>
                        <MdKeyboardArrowDown/>
                    </span>
                    <Divider orientation="vertical" flexItem style={{margin: "0 4px", backgroundColor: "slategray"}}/>
                    <span style={{fontSize: 30, lineHeight: ".5", margin: "0 7px", opacity: ".7"}}>..
                    </span>
                </Typography>
                <Typography style={{background: "#547cd7", margin: "0 18px", padding: "6px 12px", borderRadius: "6px"}}><FiGitCommit style={{position: "relative", top: 2}}/> Commit (2 files)</Typography>
                <Grid className={classes.rightHeader}>
                    <div className={classes.display}>
                        <span className={classes.line}>|</span>
                    </div>
                    <div className={classes.display}>
                        <span className={classes.hrLine} style={{transform: "rotate(90deg)"}}>|</span>
                    </div>
                    <div className={classes.display}>
                        <span className={classes.line} style={{marginLeft: "auto"}}>|</span>
                    </div>
                </Grid>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;