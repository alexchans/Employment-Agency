import React from 'react';
import Styles from "./EPay.module.css";
import Image from "./EProfileComp/Image";
import DropdownMenu from"./EProfileComp/DropdownMenu3"
import InputPay1 from "./EPayComp/Input1";
import InputPay2 from "./EPayComp/Input2";
import InputPay3 from "./EPayComp/Input3";
import InputPay4 from "./EPayComp/Input4";
import Button from "./EPayComp/Button1";



class EPay extends React.Component {
    render() {
        return (
            <div className={Styles.screen}>
                <div className={Styles.header}>Employer Space</div>

                <div className={Styles.icon2}>
                    <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                            d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
                    </svg>
                </div>
                <div className={Styles.HorizontalDivider}></div>
                <div className={Styles.subheader}>Payment Details</div>
                <div className={Styles.label1}>Fill in your payment details and complete the order</div>
                <div className={Styles.divider2}></div>
                <div className={Styles.label2}>Cardholder name*</div>
                <InputPay1></InputPay1>
                <div className={Styles.label3}>Card number*</div>
                <InputPay2></InputPay2>
                <div className={Styles.label4}>Expiration Date*</div>
                <InputPay3></InputPay3>
                <div className={Styles.label5}>CVV*</div>
                <InputPay4></InputPay4>
                <Button></Button>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}>Contact Info</div>
                    <div className={Styles.option2}>Job List</div>
                    <div className={Styles.option3}>Create Job</div>
                    <div className={Styles.option4}>Billing</div>
                    <div className={Styles.option5}>Delete Account</div>
                    <DropdownMenu></DropdownMenu>
                </div>
            </div>
        );
    }
}

export default EPay;
