import React from "react";
import Styles from "./EDeleteAcc.module.css";
import Image from "./EProfileComp/Image"
import Input9 from "./EProfileComp/InputField9";
import Input10 from "./EProfileComp/InputField10";
import Input11 from "./EProfileComp/InputField11";
import Input12 from "./EProfileComp/InputField12";
import Input13 from "./EProfileComp/InputField13";
//import DropdownMenu from "./EProfileComp/DropdownMenu";
import {Link} from "react-router-dom";

class EDeleteAcc extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        username: '',
        errors: {
            username: '',
        }

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
        const {  firstName, lastName, emailAddress, phoneNumber, username } = this.state;
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Adjust based on your needs
        const numberRegex = /^\d+(\.\d+)?$/; // This regex supports integers and decimals


        if (!firstName) errors.firstName = "First name is required.";
        if (!lastName) errors.lastName = "Last name is required.";
        if (!emailAddress || !emailRegex.test(emailAddress)) errors.emailAddress = "Invalid email address.";
        if (!phoneNumber || !phoneRegex.test(phoneNumber)) errors.phoneNumber = "Invalid phone number.";
        if (!username) {
            errors.username = "Username is required.";
        } else if (username.length < 4) {
            errors.username = "Username must be at least 4 characters long.";
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
                <div className={Styles.icon1}>
                    <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                            d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
                    </svg>
                </div>
                <div className={Styles.HorizontalDivider}></div>
                <div className={Styles.subheader}>Delete Account</div>
                <div className={Styles.label1}>Contact Information</div>
                <div className={Styles.divider2}></div>

                <div className={Styles.label2}>First Name</div>
                <Input9 name="firstName" value={this.state.firstName} onChange={this.handleInputChange}></Input9>
                {this.state.errors.firstName && <div className={Styles.error}>{this.state.errors.firstName}</div>}

                <div className={Styles.label3}>Last Name</div>
                <Input10 name="lastName" value={this.state.lastName} onChange={this.handleInputChange}></Input10>
                {this.state.errors.lastName && <div className={Styles.error2}>{this.state.errors.lastName}</div>}

                <div className={Styles.label4}>Email Address</div>
                <Input11 name="emailAddress" value={this.state.emailAddress} onChange={this.handleInputChange}></Input11>
                {this.state.errors.emailAddress && <div className={Styles.error3}>{this.state.errors.emailAddress}</div>}

                <div className={Styles.label5}>Phone Number</div>
                <Input12 name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange}></Input12>
                {this.state.errors.phoneNumber && <div className={Styles.error4}>{this.state.errors.phoneNumber}</div>}

                <div className={Styles.label6}>Confirm Username and Delete</div>
                <div className={Styles.divider3}></div>

                <div className={Styles.label7}>Username</div>
                <Input13 name="username" value={this.state.username} onChange={this.handleInputChange}></Input13>
                {this.state.errors.username && <div className={Styles.error5}>{this.state.errors.username}</div>}


                <button className={Styles.button1} onClick={this.handleSubmit}>Delete</button>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}><Link to="/EmployerProfile">Contact Info</Link></div>
                    <div className={Styles.option2}><Link to="/EmployerJobList">Job List</Link></div>
                    <div className={Styles.option3}><Link to="/EmployerCreateJob">Create Job</Link></div>
                    <div className={Styles.option4}><Link to="/EmployerPayment">Billing</Link></div>
                    <div className={Styles.option5}><Link to="/EmployerDelete">Delete Account</Link></div>
                    {/*<DropdownMenu></DropdownMenu>*/}
                </div>
            </div>


        )
            ;
    }
}

export default EDeleteAcc
