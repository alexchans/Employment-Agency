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
//import DropdownMenu from"./EProfileComp/DropdownMenu2"
import {Link} from "react-router-dom";



class EUpdateJob extends React.Component {

    state = {
        positionName: '',
        positionID: '',
        startDate: null,
        endDate: null,
        startTime: '',
        endTime: '',
        payPerHour: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        categories: '',
        rowsCount: 0,
        categoryCountError: '',
        errors: {}

    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value,
            errors: {
                ...prevState.errors,
                [name]: '' // Clear the error message for this field
            }
        }), () => {
            // If you want to validate immediately after state update
            if (name === 'categories') {
                this.validateCategoryField();
            }
        });
    };

    validateCategoryField = () => {
        this.setState({ errors: {...this.state.errors, categories: ''} });
    };


    updateRowsCount = (newCount) => {
        this.setState({ rowsCount: newCount });
    };



    validateForm = () => {
        const { positionName, positionID, startDate, endDate, startTime, endTime, payPerHour, firstName, lastName, emailAddress, phoneNumber, categories, keywords } = this.state;
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Adjust based on your needs
        const numberRegex = /^\d+(\.\d+)?$/; // This regex supports integers and decimals


        if (!positionName) errors.positionName = "Position name is required.";
        if (!positionID) errors.positionID = "Position ID is required.";
        if (!startDate) errors.startDate = "Start date is required.";
        if (!endDate) errors.endDate = "End date is required.";
        if (!startTime) errors.startTime = "Start time is required.";
        if (!endTime) errors.endTime = "End time is required.";
        if (!payPerHour || !numberRegex.test(payPerHour) || parseFloat(payPerHour) <= 0) {
            errors.payPerHour = "Pay per hour must be a positive number.";
        }
        if (!firstName) errors.firstName = "First name is required.";
        if (!lastName) errors.lastName = "Last name is required.";
        if (!emailAddress || !emailRegex.test(emailAddress)) errors.emailAddress = "Invalid email address.";
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) errors.phoneNumber = "Invalid phone number.";
        if (!this.state.categories.trim()) {
            errors.categories = "Missing value";
        } else {
            errors.categories = ""; // Clear the error if the category is not empty
        }

        this.setState({ errors });
        //return Object.keys(errors).length === 0;
        return Object.keys(errors).every(key => errors[key] === "");
    };


    handleSubmit = (event) => {


        event.preventDefault();
        if (this.validateForm()) {
            console.log("Form is valid. Proceed with form submission.");
            // Proceed with form submission logic here...
        }
        else if (this.state.rowsCount < 2) {
            alert("You need to add at least two categories.");

        }

        else {
            console.log("Validation errors exist.");
        }
    };


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
                <Input15 name="positionName" value={this.state.positionName} onChange={this.handleInputChange} ></Input15>
                {this.state.errors.positionName && <div className={Styles.error}>{this.state.errors.positionName}</div>}

                <div className={Styles.label3}>Start Date</div>
                <div className={Styles.label4}>End Date</div>

                <div className={Styles.label5}>Position ID</div>
                <Input17 name="positionID" value={this.state.positionID} onChange={this.handleInputChange}></Input17>
                {this.state.errors.positionID && <div className={Styles.error2}>{this.state.errors.positionID}</div>}

                <div className={Styles.label6}>Start Time</div>
                <Input18 type="time" name="startTime" value={this.state.startTime} onChange={this.handleInputChange}></Input18>
                {this.state.errors.startTime && <div className={Styles.error3}>{this.state.errors.startTime}</div>}


                <div className={Styles.label7}>End Time</div>
                <Input19 type="time" name="endTime" value={this.state.endTime} onChange={this.handleInputChange}></Input19>
                {this.state.errors.endTime && <div className={Styles.error4}>{this.state.errors.endTime}</div>}


                <div className={Styles.label8}>Payment per Hour</div>
                <Input20 name="payPerHour" value={this.state.payPerHour} onChange={this.handleInputChange}></Input20>
                {this.state.errors.payPerHour && <div className={Styles.error5}>{this.state.errors.payPerHour}</div>}


                <div className={Styles.label9}>Description / Additional Information</div>
                <Input21></Input21>

                <div className={Styles.divider3}></div>
                <div className={Styles.label10}>Hiring Manager Information</div>

                <div className={Styles.label11}>First Name</div>
                <Input22  name="firstName" value={this.state.firstName} onChange={this.handleInputChange}></Input22>
                {this.state.errors.firstName && <div className={Styles.error6}>{this.state.errors.firstName}</div>}

                <div className={Styles.label12}>Last Name</div>
                <Input23  name="lastName" value={this.state.lastName} onChange={this.handleInputChange}></Input23>
                {this.state.errors.lastName && <div className={Styles.error7}>{this.state.errors.lastName}</div>}


                <div className={Styles.label13}>Email Address</div>
                <Input24 name="emailAddress" value={this.state.emailAddress} onChange={this.handleInputChange}></Input24>
                {this.state.errors.emailAddress && <div className={Styles.error8}>{this.state.errors.emailAddress}</div>}


                <div className={Styles.label14}>Phone Number</div>
                <Input25 name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange}></Input25>
                {this.state.errors.phoneNumber && <div className={Styles.error9}>{this.state.errors.phoneNumber}</div>}


                <div className={Styles.divider4}></div>
                <div className={Styles.label15}>Qualifications</div>

                <div className={Styles.label16}>Category</div>
                <Input26></Input26>

                <div className={Styles.label17}>Keywords / Key Phrases Separated by Commas</div>
                <Input27></Input27>

                <Button1></Button1>
                <button className={Styles.button2} onClick={this.handleSubmit}>Update</button>

                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}><Link to="/EmployerProfile">Contact Info</Link></div>
                    <div className={Styles.option2}><Link to="/EmployerJobList">Job List</Link></div>
                    <div className={Styles.option3}><Link to="/EmployerCreateJob">Create Job</Link></div>
                    <div className={Styles.option4}><Link to="/EmployerPayment">Billing</Link></div>
                    <div className={Styles.option5}><Link to="/EmployerDelete">Delete Account</Link></div>
                    <div><DateInput/></div>
                    <div><DateInput2/></div>
                    <div><TableCatKey updateRowsCount={this.updateRowsCount}></TableCatKey></div>
                    {/* <DropdownMenu></DropdownMenu>*/}
                </div>
            </div>
        );
    }
}

export default EUpdateJob;
