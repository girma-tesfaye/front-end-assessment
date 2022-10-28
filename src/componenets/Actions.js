import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core';
import { BiHelpCircle, BiDotsHorizontal } from "react-icons/bi";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles(()=> ({
    wrapper: {
        textAlign: "left",
        padding: 0
    },
    headerWrapper: {
        padding: 20,
        display: "flex"
    },
    outline: {
        padding: 13,
        borderBottom: "2px solid #fff",
    },
    docum: {
        padding: 13,
        borderBottom: "1px solid #3c4854",
    },
    configStyles: {
        color: "#fff",
        borderRadius: "14px", 
        opacity: ".7"
    },
    typosText: {
        padding: "15px 20px",
        color: "#fff",
        borderBottom: "1px solid #3c4854",
        opacity: ".7"
    },
    icons: {
        color: "#fff", float: "right", fontSize: 25, opacity: ".7"
    },
    button0: {
        color: "#fff",
        textTransform: "capitalize",
        background: "#505d6b",
        padding: "10px 20px",
        borderRadius: 10
    },
    button1: {
        color: "#fff",
        textTransform: "capitalize",
        background: "#547cd7",
        padding: "10px 20px",
        borderRadius: 10
    },
    num3: {
        marginLeft: "65%",
        background: "#3c4854",
        padding: 4,
        fontSize: 10,
        borderRadius: 4
    }
}));

const Actions = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Grid container className={classes.headerWrapper}>
                <Grid item xs={6} className={classes.outline}>
                    <Typography style={{color: "#fff", textAlign: "center"}}>Outline</Typography>
                </Grid>
                <Grid item xs={6} className={classes.docum}>
                    <Typography style={{color: "#fff", opacity: ".7", textAlign: "center"}}>Documentation</Typography>
                </Grid>
            </Grid>
            <Typography className="help"><BiHelpCircle style={{paddingTop: 5}}/>{" "} No compilation issue</Typography>
            <Typography className={classes.typosText}>
                <span className={classes.configStyles} style={{background: "#548d9a", padding: "5px 10px"}}>table</span> 
                <span style={{paddingLeft: 10, opacity: ".7"}}>demodataset_2_with_ref</span>
                <BiDotsHorizontal /* style={{}} */ className={classes.icons}/>
            </Typography> 
            <Typography className={classes.typosText}>
                Dependenceis
                <span className={classes.num3}>3</span>
                <ExpandMoreIcon className={classes.icons}/>
            </Typography>
            <Typography className={classes.typosText}>
                Compiled
                <ExpandMoreIcon className={classes.icons}/>
            </Typography>
            <Typography className={classes.typosText} style={{borderBottom: "none"}}>
                Query
                <ExpandMoreIcon className={classes.icons}/>
            </Typography>
            <Grid container style={{display: "flex", justifyContent: "space-evenly"}}>
                <Button className={classes.button0}>Excute query</Button>
                <Button className={classes.button1}>Run this node</Button>
            </Grid>
        </div>
    );
}
 
export default Actions;