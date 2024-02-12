import React from 'react';
import DateInput from './EProfileComp/react-datepicker';
import Styles from "./EUpdateJob.module.css";
import Image from "./EProfileComp/Image";
import Input15 from "./EProfileComp/InputField15";
import DateInput2 from "./EProfileComp/react-datapicker2";
import Input17 from "./EProfileComp/InputField17";
import Input18 from "./EProfileComp/InputField18";
import Input19 from "./EProfileComp/InputField19";
import Input20 from "./EProfileComp/InputField20";
import Input21 from "./EProfileComp/InputField21";
import Input22 from "./EProfileComp/InputField22";
import Input23 from "./EProfileComp/InputField23";
import Input24 from "./EProfileComp/InputField24";
import Input25 from "./EProfileComp/InputField25";
import Input26 from "./EProfileComp/InputField26";
import Input27 from "./EProfileComp/InputField27";
import Button1 from "./EProfileComp/Button1";
import TableCatKey from"./EProfileComp/TableCatKey";
import DropdownMenu from"./EProfileComp/DropdownMenu2"



class EUpdateJob extends React.Component {
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
                <div className={Styles.subheader}>Update Job</div>
                <div className={Styles.label1}>Job Information</div>
                <div className={Styles.divider2}></div>
                <div className={Styles.label2}>Position Name</div>
                <Input15></Input15>
                <div className={Styles.label3}>Start Date</div>
                <div className={Styles.label4}>End Date</div>
                <div className={Styles.label5}>Position ID</div>
                <Input17></Input17>
                <div className={Styles.label6}>Start Time</div>
                <Input18></Input18>
                <div className={Styles.label7}>End Time</div>
                <Input19></Input19>
                <div className={Styles.label8}>Payment per Hour</div>
                <Input20></Input20>
                <div className={Styles.label9}>Additional Information</div>
                <Input21></Input21>
                <div className={Styles.divider3}></div>
                <div className={Styles.label10}>Hiring Manager Information</div>
                <div className={Styles.label11}>First Name</div>
                <Input22></Input22>
                <div className={Styles.label12}>Last Name</div>
                <Input23></Input23>
                <div className={Styles.label13}>Email Address</div>
                <Input24></Input24>
                <div className={Styles.label14}>Phone Number</div>
                <Input25></Input25>
                <div className={Styles.divider4}></div>
                <div className={Styles.label15}>Qualifications</div>
                <div className={Styles.label16}>Category</div>
                <Input26></Input26>
                <div className={Styles.label17}>Keywords / Key Phrases Separated by Commas</div>
                <Input27></Input27>
                <Button1></Button1>
                <button className={Styles.button2}>Update</button>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}>Contact Info</div>
                    <div className={Styles.option2}>Job List</div>
                    <div className={Styles.option3}>Create Job</div>
                    <div className={Styles.option4}>Billing</div>
                    <div className={Styles.option5}>Delete Account</div>
                    <div><DateInput/></div>
                    <div><DateInput2/></div>
                    <div><TableCatKey></TableCatKey></div>
                    <DropdownMenu></DropdownMenu>
                </div>
            </div>
        );
    }
}

export default EUpdateJob;
