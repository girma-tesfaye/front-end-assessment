import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BsFillPlayBtnFill, BsFillPlayFill } from "react-icons/bs";
import { TbEye, TbFidgetSpinner } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { MdUpdate, MdEventNote, MdOutlineArrowForwardIos } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {FiGitCommit} from 'react-icons/fi';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: 15,
        textAlign: "-webkit-center"
    },
    icon: {
        color: "#fff",
        width: 25,
        height: 25,
        padding: "12px 5px",
        opacity: ".5"
    },
    playIcon: {
        color: "#fff",
        width: 24,
        height: 24,
        margin: "20px 0",
        background: "#537bd6",
        borderRadius: 6
    },
    eccentricIcon: {
        background: "transparent",
        height: 18,
        width: 18,
        border: "5px solid #fff",
        borderRadius: "50%",
        transform: "rotate(-180deg)",
        margin: "16px 0"
    },
    eccentricIconInner: {
        background: "transparent",
        height: 6,
        width: 6,
        border: "5px solid #fff",
        borderRadius: "50%",
        position: "relative",
        bottom: 5
    },
    eyeIcon: {
        color: "#fff",
        width: 16,
        height: 16,
        margin: "16px 10px",
        borderRadius: "50%",
        opacity: ".5",
        border: "2px solid #fff"
    },
    searchIcon: {
        color: "#fff",
        width: 25,
        height: 25,
        margin: "16px 0",
        opacity: ".5",
    },
    spinerIcon: {
        color: "#fff",
        width: 36,
        height: 36,
        margin: "16px 0",
    },
    avatarIcon: {
        color: "#fff",
        width: 50,
        height: 50,
    }
}));

const IconsBar = () => {
    const classes = useStyles();
    return (  
        <div className={classes.wrapper}>
            <div className={classes.eccentricIcon}>
                <div className={classes.eccentricIconInner}/>
            </div>
            <BsFillPlayFill className={classes.playIcon}/>
            <hr style={{mixBlendMode: "color-burn", margin: "12px 0"}}/>
            <TbEye className={classes.eyeIcon}/>
            <FiSearch className={classes.searchIcon}/>
            <hr style={{mixBlendMode: "color-burn", margin: "12px 0"}}/>
            <TbFidgetSpinner className={classes.spinerIcon}/>
            <MdUpdate className={classes.icon}/>
            <MdEventNote className={classes.icon}/>
            <HiOutlineDatabase className={classes.icon}/>
            <hr style={{mixBlendMode: "color-burn", margin: "10px 0"}}/>
            <MdOutlineArrowForwardIos className={classes.icon}/>
            <div style={{position: "relative", bottom: "-12%"}}>
                <FiGitCommit className={classes.icon}/> 
                <AccountCircleIcon className={classes.avatarIcon}/>
            </div>
        </div>
    );
}
 
export default IconsBar;   