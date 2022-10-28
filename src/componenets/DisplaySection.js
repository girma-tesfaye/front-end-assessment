import React from "react";
import { Button, Grid, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(()=> ({
    wrapper: {
        textAlign: "left",
        padding: 0
    },
    headerWrapper: {
        borderBottom: "1px solid #3c4854",
        padding: 20,
        display: "flex"
    },
    button: {
        marginLeft: "auto",
        color: "#fff",
        textTransform: "capitalize",
        background: "#505d6b",
        padding: 3,
        borderRadius: 10
    },
    lists: {
        color: "#fff",
        opacity: ".7"
    }
}));

const DisplayScreen = () => {
    const classes = useStyles();

    return ( 
        <Grid className={classes.wrapper}>
            <header className={classes.headerWrapper}>
                <Typography style={{color: "#fff"}}>definitions&#47;1_simple_examples&#47;dataset_2_with_ref.sql</Typography>
                <Button className={classes.button}>Save</Button>
            </header>
            <Grid className="lists">
                <ol>
                    <li><Typography className={classes.lists}>{""}-- learn more on https:&#47;&#47;docs.project.com&#47;guides&#47;tables&#47;</Typography></li>
                    <li></li>
                    <li>
                        <Typography className={classes.lists}>
                            <span style={{color: "#978fc9"}}>{" "}-- js</span>
                            <span style={{color: "#83a983"}}>{" "}type</span>(<span style={{color: "#6cc0c2"}}>'color'</span>)
                        </Typography>
                    </li>
                    <li></li>
                    <li>
                        <Grid container>
                            <Grid style={{color: "#978fc9"}} item xs={1}>{" "}SELECT</Grid>
                            <Grid xs={3} item className={classes.lists}> {" "}country</Grid> 
                            <Grid xs={2} item><span style={{color: "#978fc9"}}>{" "}as</span><span className={classes.lists}>{" "}country</span></Grid>
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid item xs={1}/>
                            <Grid xs={3} item className={classes.lists}> {" "}device_type</Grid> 
                            <Grid xs={2} item><span style={{color: "#978fc9"}}>{" "}as</span><span className={classes.lists}>{" "}device_type</span></Grid>
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid item xs={1}/>
                            <Grid xs={3} item className={classes.lists}> {" "}sum(revenue)</Grid> 
                            <Grid xs={2} item><span style={{color: "#978fc9"}}>{" "}as</span><span className={classes.lists}>{" "}revenue</span></Grid>
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid item xs={1}/>
                            <Grid xs={3} item className={classes.lists}> {" "}sum(sessions)</Grid> 
                            <Grid xs={2} item><span style={{color: "#978fc9"}}>{" "}as</span><span className={classes.lists}>{" "}sessions</span></Grid>
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid item xs={1}/>
                            <Grid xs={3} item className={classes.lists}> {" "}sum(pageviews)</Grid> 
                            <Grid xs={2} item><span style={{color: "#978fc9"}}>{" "}as</span><span className={classes.lists}>{" "}pageviews</span></Grid>
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid style={{color: "#978fc9"}} item xs={1}>{" "}FROM</Grid>
                            <Grid xs={3} item style={{color: "#7995c7"}}> {" "}my_table</Grid> 
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid style={{color: "#978fc9"}} item xs={1}>{" "}WHERE</Grid>
                            <Grid xs={10} item style={{color: "#fff"}}>{`  country =  `}<span style={{color:"#ac9f80"}}> {" "}'FRANCE'</span></Grid> 
                        </Grid>
                    </li>
                    <li>
                        <Grid container>
                            <Grid style={{color: "#978fc9"}} item xs={1}>{" "}FROM</Grid>
                            <Grid xs={3} item style={{color: "#fff"}}> {" "}BY 1, 2</Grid> 
                        </Grid>
                    </li>
                </ol>
            </Grid>
        </Grid>
     );
}
 
export default DisplayScreen;