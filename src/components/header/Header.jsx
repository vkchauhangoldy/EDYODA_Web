import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h1 className={classes.logo}>EDYODA</h1>
                    <p> Course <FontAwesomeIcon icon={faChevronDown} /> </p>
                    <p> Program <FontAwesomeIcon icon={faChevronDown} /></p>
                </div>

                <div className={classes.right}>
                    <p><FontAwesomeIcon icon={faSearch} /></p>
                    <p>Login</p>
                    <button className={classes.btn}>JOIN NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
