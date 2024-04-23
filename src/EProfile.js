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
//import DropdownMenu from "./EProfileComp/DropdownMenu";
import {Link} from "react-router-dom";


const UpdateCompanyInfo = () => {

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        streetAddress:'',
        zipCode:'',
        city: '',
        state: ''
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let temp = { ...errors };

        if (name === 'firstName') {
            temp.firstName = value ? "" : "This field is required.";
        }

        else if (name === 'lastName') {
            temp.lastName = value ? "" : "This field is required.";
        }

        else if (name === 'phoneNumber') {
            // Basic validation for a US phone number format: XXX-XXX-XXXX
            temp.phoneNumber = /^\d{3}-\d{3}-\d{4}$/.test(value) ? "" : "Phone number is not valid.";
        }

        else if (name === 'email') {
            temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Email is not valid.";
        }

        else if (name === 'streetAddress') {
            // Example: Ensure the field is not empty
            temp.streetAddress = value ? "" : "Street Address is required.";
        }

        else if (name === 'zipCode') {
            temp.zipCode = /^\d{5}(-\d{4})?$/.test(value) ? "" : "Zip Code is not valid.";
        }

        else if (name === 'city') {
            temp.city = value ? "" : "City is required.";
        }

        if (name === 'state') {
            temp.state = value ? "" : "State is required.";
        }


        setErrors(temp);
    };

    const validateForm = () => {
        let temp = {};

        temp.firstName = formValues.firstName ? "" : "First Name is required.";
        temp.lastName = formValues.lastName ? "" : "Last Name is required.";
        temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) ? "" : "Email is not valid.";
        temp.phoneNumber = /^\d{3}-\d{3}-\d{4}$/.test(formValues.phoneNumber) ? "" : "Phone number is not valid.";
        temp.streetAddress = formValues.streetAddress ? "" : "Street Address is required.";
        temp.zipCode = /^\d{5}(-\d{4})?$/.test(formValues.zipCode) ? "" : "Zip Code is not valid.";
        temp.city = formValues.city ? "" : "City is required.";
        temp.state = formValues.state ? "" : "State is required.";
        // Validate other fields as necessary

        setErrors(temp);

        // Check if there are no errors
        return Object.values(temp).every(x => x === "");
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
        validateField(name, value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form is valid. Submitting...");
            // API call or further processing
        } else {
            console.log("Form is invalid. Please check the error messages.");
        }
    };


    return (
        <div className={Styles.screen}>
            <div className={Styles.header}>Employer Space</div>
            <div className={Styles.icon}>
                <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                        d="m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"><Link to="/Login">Contact Info</Link></path>
                </svg>
            </div>
            <div className={Styles.HorizontalDivider}></div>
            <div className={Styles.subheader}>Update Company Information</div>
            <div className={Styles.label1}>Contact Information</div>
            <div className={Styles.divider2}></div>

            <div className={Styles.label2}>First Name</div>
            <Input1 name="firstName" value={formValues.firstName} onChange={handleInputChange}/>
            {errors.firstName && <p className={Styles.error}>{errors.firstName}</p>}

            <div className={Styles.label3}>Email Address</div>
            <Input2 name="email" value={formValues.email} onChange={handleInputChange}></Input2>
            {errors.email && <p className={Styles.error2}>{errors.email}</p>}

            <div className={Styles.label4}>Last Name</div>
            <Input3 name="lastName" value={formValues.lastName} onChange={handleInputChange}></Input3>
            {errors.lastName && <p className={Styles.error3}>{errors.lastName}</p>}

            <div className={Styles.label5}>Phone Number</div>
            <Input4  name="phoneNumber" value={formValues.phoneNumber} onChange={handleInputChange}></Input4>
            {errors.phoneNumber && <p className={Styles.error4}>{errors.phoneNumber}</p>}

            <div className={Styles.label6}>Company's Mailing Address</div>
            <div className={Styles.divider3}></div>

            <div className={Styles.label7}>Street Address</div>
            <Input5 name="streetAddress" value={formValues.streetAddress} onChange={handleInputChange}></Input5>
            {errors.streetAddress && <p className={Styles.error5}>{errors.streetAddress}</p>}

            <div className={Styles.label8}>Zip Code</div>
            <Input6 name="zipCode" value={formValues.zipCode} onChange={handleInputChange}></Input6>
            {errors.zipCode && <p className={Styles.error6}>{errors.zipCode}</p>}


            <div className={Styles.label9}>City</div>
            <Input7 name="city" value={formValues.city} onChange={handleInputChange}></Input7>
            {errors.city && <p className={Styles.error7}>{errors.city}</p>}


            <div className={Styles.label10}>State</div>
            <Input8 name="state" value={formValues.state} onChange={handleInputChange}/>
            {errors.state && <p className={Styles.error8}>{errors.state}</p>}

            <button className={Styles.button1} onClick={handleSubmit}>Edit</button>

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
    );
};


export default UpdateCompanyInfo;
