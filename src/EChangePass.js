import React from "react";
import Styles from "./EChangePass.module.css";
import Image from "./EProfileComp/Image"
import Input9 from "./EProfileComp/InputField9";
import Input10 from "./EProfileComp/InputField10";
import Input11 from "./EProfileComp/InputField11";
import Input12 from "./EProfileComp/InputField12";
import Input13 from "./EProfileComp/InputField13";
import Input28 from "./EProfileComp/InputField28";
import DropdownMenu from "./EProfileComp/DropdownMenu";

class EDeleteAcc extends React.Component {

    render() {
        return (
            <div className={Styles.screen}>
                <div className={Styles.header}>Employer Space</div>
                <div className={Styles.icon1}>
                    <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                            d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
                    </svg>
                </div>
                <div className={Styles.HorizontalDivider}></div>
                <div className={Styles.subheader}>Change Password</div>
                <div className={Styles.label1}>Contact Information</div>
                <div className={Styles.divider2}></div>
                <div className={Styles.label2}>First Name</div>
                <Input9></Input9>
                <div className={Styles.label3}>Last Name</div>
                <Input10></Input10>
                <div className={Styles.label4}>Email Address</div>
                <Input11></Input11>
                <div className={Styles.label5}>Phone Number</div>
                <Input12></Input12>
                <div className={Styles.label6}>Confirm Username and Change Password</div>
                <div className={Styles.divider3}></div>
                <div className={Styles.label7}>Username</div>
                <Input13></Input13>
                <div className={Styles.label8}>New Password</div>
                <button className={Styles.button1}>Change Password</button>
                <Input28></Input28>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}>Contact Info</div>
                    <div className={Styles.option2}>Job List</div>
                    <div className={Styles.option3}>Create Job</div>
                    <div className={Styles.option4}>Billing</div>
                    <div className={Styles.option5}>Change Password</div>
                    <DropdownMenu></DropdownMenu>
                </div>
            </div>


        );
    }
}

export default EDeleteAcc
