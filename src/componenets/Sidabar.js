import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { AiFillFolder } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const useStyles = makeStyles(()=> ({
    wrapper: {
        position: "relative",
        borderRadius: 0,
        background: "#394c57",
        textAlign: "left",
        padding: 20
    },
    typography: {
        color: "#fff"
    },
    configStyles: {
        color: "#fff",
        background: "#548d9a",
        padding: "5px 12px",
        borderRadius: "14px",
        fontSize: 14
    },
    typosText: {
        margin: "20px 0",
        color: "#fff",
        fontSize: 14
    },
    folder: {
        margin: "25px 0",
        color: "#fff",
        opacity: ".7",
        display: "flex"
    },
    subFolder: {
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 8,
        marginTop: -12
    },
    mainFolder: {
        margin: "20px 0 0",
        color: "#fff",
        opacity: ".7",
        display: "flex"
    },
    currentFolder: {
        background: "#2e3a46",
        padding: "8px 0",
        width: "155%",
        position: "relative",
        left: -68
    }
}));

const Sidebar = () => {
    const classes = useStyles();
    return ( 
        <Grid className={classes.wrapper}>
            <Typography variant="h5" gutterBottom className={classes.typography}>Files</Typography>
            <Typography className={classes.typosText}>
                <span className={classes.configStyles}>config</span>
                <span style={{paddingLeft: 10, opacity: ".7"}}>dataform</span>
            </Typography>
            <Typography className={classes.typosText}>
                <span className={classes.configStyles}>config</span>
                <span style={{paddingLeft: 10, opacity: ".7"}}>package_lock</span> 
            </Typography>
            <Typography className={classes.typosText}>
                <span className={classes.configStyles}>config</span>
                <span style={{paddingLeft: 10, opacity: ".7"}}>package</span> 
            </Typography>
            <Grid style={{marginTop: 30}}>
                <Grid /* className={classes.folder} */>
                    <Grid className={classes.mainFolder}>
                        <MdKeyboardArrowDown style={{fontSize: 20}}/>
                        <AiFillFolder style={{fontSize: 20, margin: "0 5px"}}/>
                        <Typography>models</Typography> 
                    </Grid>
                    <Grid style={{borderLeft: "1px solid slategray", marginLeft: 10}}>
                        <Grid className={classes.subFolder}>
                            <Grid className={classes.folder}>
                                <MdKeyboardArrowDown style={{fontSize: 20}}/>
                                <AiFillFolder style={{fontSize: 20, margin: "0 5px"}}/>
                                <Typography>1_simple_examples</Typography> 
                            </Grid>
                            <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray"}}>
                                <Grid className={classes.currentFolder}>
                                    <Typography 
                                        className={classes.typosText}
                                        style={{margin: 0, position: "relative", left: 66}}
                                    >
                                        <span className={classes.configStyles} style={{background: "#8ca05e"}}>SQL</span> 
                                        <span style={{paddingLeft: 10}}>dataset_1</span> 
                                        <BiDotsHorizontal style={{position: "relative", color: "#727e8a", left: "30%"}}/>
                                    </Typography> 
                                </Grid>
                                <Typography className={classes.typosText}>
                                    <span className={classes.configStyles} style={{background: "#8ca05e"}}>SQL</span> 
                                    <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_2_with_ref</span> 
                                </Typography> 
                            </Grid>
                        </Grid>
                        <Grid className={classes.subFolder}>
                            <Grid className={classes.folder}>
                                <MdKeyboardArrowDown style={{fontSize: 20}}/>
                                <AiFillFolder style={{fontSize: 20, margin: "0 5px"}}/>
                                <Typography>2_advanced_examples</Typography> 
                            </Grid>
                            <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray"}}>
                                <Typography className={classes.typosText}>
                                    <span className={classes.configStyles} style={{background: "#8ca05e"}}>SQL</span> 
                                    <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_3_increase</span> 
                                </Typography> 
                                <Typography className={classes.typosText}>
                                    <span className={classes.configStyles} style={{background: "#fed66f"}}>JS</span> 
                                    <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_4_increase</span> 
                                </Typography> 
                            </Grid>
                        </Grid>
                        <Grid className={classes.subFolder}>
                            <Grid className={classes.folder}>
                                <MdKeyboardArrowDown style={{fontSize: 20}}/>
                                <AiFillFolder style={{fontSize: 20, margin: "0 5px"}}/>
                                <Typography className='typo-overflow'>3_operations_and_assertions</Typography> 
                            </Grid>
                            <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray"}}>
                                <Typography className={classes.typosText}>
                                    <span className={classes.configStyles} style={{background: "#548d9a"}}>ops</span> 
                                    <span style={{paddingLeft: 10, opacity: ".7"}}>grant_access</span> 
                                </Typography> 
                                <Typography className={classes.typosText}>
                                    <span className={classes.configStyles} style={{background: "#c48a69"}}>assert</span> 
                                    <span style={{paddingLeft: 10, opacity: ".7"}}>simple_assertion</span> 
                                </Typography> 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.mainFolder}>
                        <MdKeyboardArrowRight style={{fontSize: 20}}/>
                        <AiFillFolder style={{fontSize: 20, margin: "0 5px"}}/>
                        <Typography>models_2</Typography> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
     );
}
 
export default Sidebar;