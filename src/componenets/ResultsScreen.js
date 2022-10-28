import React from "react";
import { Grid, makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { CgEye } from "react-icons/cg";
import { TbFileSearch } from "react-icons/tb";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import Table from "./Table";

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
    refreshIcon: {position: "relative", top: 3, color: "#fff", marginLeft: 12},
    configStyles: {
        color: "#fff",
        borderRadius: "14px", 
        opacity: ".7"
    },
    typosText: {
        margin: "4px 0",
        color: "#fff",
    },
    folder: {
        margin: "25px 0 10px -8px",
        color: "#fff",
        opacity: ".7",
        display: "flex"
    },
    subFolder: {
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: -12
    },
    mainFolder: {
        margin: "4px -8px 25px",
        color: "#fff",
        opacity: ".7",
        display: "flex"
    },
    tableWrap: {
        borderLeft: "1px solid #3c4854",
        marginRight: -1,
        maxHeight: 320
    },
    /* customIcon: {
        width: 10, 
        height: 10,
        border: "1px solid slategray"
    } */
}));

const ResultsScreen = () => {
    const classes = useStyles();

    return ( 
        <div>
            <header className={classes.headerWrapper}>
                <Grid xs={2}>
                    <Typography style={{color: "#fff", opacity: ".7"}}>
                        <TbFileSearch style={{marginBottom: -6, fontSize: 25}}/> query results
                    </Typography>
                </Grid>
                <Grid xs={3} style={{display: "flex"}}>
                    <div className="custom-icon-left"/* ={customIcon} *//>
                    <div className="custom-icon-middle"/* ={customIcon} *//>
                    <div className="custom-icon-right"/* ={customIcon} *//>
                    <Typography style={{color: "#fff", opacity: ".7"}}>schemas
                    </Typography>
                </Grid>
            </header>
            <Grid container style={{display: "flex"}}>
                <Grid xs={4}>
                    <Grid style={{display: "flex", padding: 20, paddingBottom: 0}}>
                        <Typography style={{color: "#fff"}}>Refresh</Typography>
                        <IoMdRefresh className={classes.refreshIcon}/>
                    </Grid>
                    <Grid style={{padding: "0 20px"}} className={classes.subFolder}>
                        <Grid className={classes.folder}>
                            <MdKeyboardArrowDown style={{fontSize: 20}}/>
                            <Typography className='typo-overflow'>dataform_demo</Typography> 
                        </Grid>
                        <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray", padding: 10}}>
                            <Typography className={classes.typosText}>
                                <CgEye className={classes.configStyles}/> 
                                <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_1</span> 
                            </Typography> 
                        </Grid>
                        <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray", padding: 10}}>
                            <Typography className={classes.typosText}>
                                <CgEye className={classes.configStyles}/> 
                                <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_5_from_script_builder</span> 
                            </Typography> 
                        </Grid>
                        <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray", padding: 10}}>
                            <Typography className={classes.typosText}>
                                <CgEye className={classes.configStyles}/> 
                                <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_3_increamental_date</span> 
                            </Typography> 
                        </Grid>
                        <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray", padding: 10}}>
                            <Typography className={classes.typosText}>
                                <CgEye className={classes.configStyles}/> 
                                <span style={{paddingLeft: 10, opacity: ".7"}}>dataset_4_increamental_snapshot</span> 
                            </Typography> 
                        </Grid>
                        <Grid className={classes.subFolder} style={{borderLeft: "1px solid slategray", padding: 10}}>
                            <Typography className={classes.typosText}>
                                <CgEye className={classes.configStyles}/> 
                                <span style={{paddingLeft: 10, opacity: ".7"}}>reporting_gb</span> 
                            </Typography> 
                        </Grid>
                    </Grid>
                    <Grid style={{padding: "0 20px"}} className={classes.mainFolder}>
                        <Typography><MdKeyboardArrowRight style={{fontSize: 20}}/>datafrom_set2</Typography> 
                    </Grid>
                </Grid>
                <Grid xs={8} className={classes.tableWrap}>
                    <header className={classes.headerWrapper}>
                        <Typography className={classes.typosText}>
                            <span className={classes.configStyles} style={{background: "#548d9a", padding: "5px 10px"}}>view</span> 
                            <span style={{paddingLeft: 10, opacity: ".7"}}>dataform_demo.demodataset_1</span>
                        </Typography> 
                        <AiOutlineClose style={{color: "#fff", marginLeft: "auto", fontSize: 25, opacity: ".7"}}/>
                    </header>
                    <Grid>
                        <Table/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default ResultsScreen;