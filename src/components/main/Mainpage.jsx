import React from 'react'
import classes from './Mainpage.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd, faBookOpen, faClock, faGraduationCap, faIndianRupee, faTelevision } from '@fortawesome/free-solid-svg-icons';
import Payment from './Payment';
const Mainpage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.heading}>
                    <p>Access curated course worth </p>
                    <p><FontAwesomeIcon icon={faIndianRupee} />{" "}<span className={classes.cut}><span className={classes.amt}>18,500</span></span>
                        {" "} at just <span className={classes.color99}><FontAwesomeIcon icon={faIndianRupee} /> 99 </span> per year!
                    </p>
                </div>
                <div className={classes.content}>
                    <p className={classes.icon}> <FontAwesomeIcon icon={faBookOpen} /> </p>
                    <p> <span className={classes.color}>100+</span> jobs relevent courses</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.icon}> <FontAwesomeIcon icon={faClock} /> </p>
                    <p> <span className={classes.color}>20,000+</span> Hours of content</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.icon}> <FontAwesomeIcon icon={faTelevision} /></p>
                    <p> <span className={classes.color}>Exclusive</span> webinar access</p>
                </div>
                <div className={classes.content}>
                    <p className={classes.icon}> <FontAwesomeIcon icon={faGraduationCap} /></p>
                    <p> Scholarship worth{" "}
                        <span className={classes.color}><FontAwesomeIcon icon={faIndianRupee} /> 94,500</span>
                    </p>
                </div>
                <div className={classes.content}>
                    <p className={classes.icon}> <FontAwesomeIcon icon={faAd} /> </p>
                    <p><span className={classes.color}>Ad Free</span> learning experience</p>
                </div>
            </div>
            <div className={classes.right}>
                <Payment />
            </div>
        </div>
    )
}

export default Mainpage;
