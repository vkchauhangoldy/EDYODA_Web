import React from 'react';
import classes from './Pyment.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import image from '../../assets/payment.png'
const Payment = () => {
    return (
        <div className={classes.container}>
            <div className={classes.body}>
                <div className={classes.top}>
                    <div className={classes["top-left"]}>
                        <p className={classes.circle}>1</p>
                        <p className={classes.circle}>2</p>

                    </div>
                    <div className={classes["top-right"]}>
                        <p className={classes.para}>Sign Up</p>
                        <p className={classes.para}>Subscribe</p>
                    </div>
                </div>
                <h1 className={classes.heading}>Select your subscription plan</h1>
                <div className={`${classes.child} ${classes.expired}`}>
                    <div className={classes["child-left"]}>
                        <input type="radio" />
                        <p>12 Months subscription</p>
                    </div>
                    <div className={classes["child-right"]}>
                        <p>total <FontAwesomeIcon icon={faIndianRupee} /> 99</p>
                        <p><FontAwesomeIcon icon={faIndianRupee} /> 8/mo</p>
                    </div>
                </div>
                <div className={`${classes.child} ${classes.recommended}`}>
                    <div className={classes["child-left"]}>
                        <input type="radio" />
                        <p>12 Months subscription</p>
                    </div>
                    <div className={classes["child-right"]}>
                        <p>total <FontAwesomeIcon icon={faIndianRupee} /> 179</p>
                        <p><FontAwesomeIcon icon={faIndianRupee} /> 15/mo</p>
                    </div>
                </div>
                <div className={classes.child}>
                    <div className={classes["child-left"]}>
                        <input type="radio" />
                        <p>6 Months subscription</p>
                    </div>
                    <div className={classes["child-right"]}>
                        <p>total <FontAwesomeIcon icon={faIndianRupee} /> 149</p>
                        <p><FontAwesomeIcon icon={faIndianRupee} /> 25/ mo</p>
                    </div>
                </div>
                <div className={classes.child}>
                    <div className={classes["child-left"]}>
                        <input type="radio" />
                        <p>3 Months subcription</p>
                    </div>
                    <div className={classes["child-right"]}>
                        <p>total <FontAwesomeIcon icon={faIndianRupee} /> 99</p>
                        <p><FontAwesomeIcon icon={faIndianRupee} /> 33/ mo</p>
                    </div>
                </div>
                <hr />
                <div className={classes.bottom}>
                    <p>Subscription Fees</p>
                    <p><FontAwesomeIcon icon={faIndianRupee} /> 18,500</p>
                </div>
                <div className={classes.offer}>
                    <div className={classes["bottom-child"]}>
                        <p>Limited time offer</p>
                        <h4><FontAwesomeIcon icon={faIndianRupee} /> -18,401</h4>
                    </div>
                    <div className={classes["bottom-child2"]}>
                        <span><FontAwesomeIcon icon={faClock} /> Offer valid till 25th June 2023</span>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <p>Total <span className={classes.include}>(Incl. of 18% GST)</span></p>
                    <p><FontAwesomeIcon icon={faIndianRupee} />149</p>
                </div>
                <div className={classes.btn}>
                    <button className={classes.cancel}>CANCEL</button>
                    <button className={classes.pay}>PROCEED TO PAY</button>
                </div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
export default Payment;
