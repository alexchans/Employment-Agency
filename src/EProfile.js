import React, { useState } from 'react';
import Image from './EProfileComp/Image'
import Input1 from './EProfileComp/InputField1'
import Input2 from "./EProfileComp/InputField2"
import Input3 from "./EProfileComp/InputField3"
import Input4 from "./EProfileComp/InputField4"
import Input5 from "./EProfileComp/InputField5"
import Input6 from "./EProfileComp/InputField6"
import Input7 from "./EProfileComp/InputField7"
import Input8 from "./EProfileComp/InputField8"
import Styles from "./EProfComp.module.css"
import DropdownMenu from "./EProfileComp/DropdownMenu";


const UpdateCompanyInfo = () => {useState({
    });

    return (
        <div className={Styles.screen}>
            <div className={Styles.header}>Employer Space</div>
            <div className={Styles.user}>PAlexChen</div>
            <div className={Styles.icon}>
                <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                        d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
                </svg>
            </div>
            <div className={Styles.HorizontalDivider}></div>
            <div className={Styles.subheader}>Update Company Information</div>
            <div className={Styles.label1}>Contact Information</div>
            <div className={Styles.divider2}></div>
            <div className={Styles.label2}>First Name</div>
            <Input1></Input1>
            <div className={Styles.label3}>Email Address</div>
            <Input2></Input2>
            <div className={Styles.label4}>Last Name</div>
            <Input3></Input3>
            <div className={Styles.label5}>Phone Number</div>
            <Input4></Input4>
            <div className={Styles.label6}>Company's Mailing Address</div>
            <div className={Styles.divider3}></div>
            <div className={Styles.label7}>Street Address</div>
            <Input5></Input5>
            <div className={Styles.label8}>Zip Code</div>
            <Input6></Input6>
            <div className={Styles.label9}>City</div>
            <Input7></Input7>
            <div className={Styles.label10}>State</div>
            <Input8></Input8>
            <button className={Styles.button1}>Edit</button>
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
};


export default UpdateCompanyInfo;
