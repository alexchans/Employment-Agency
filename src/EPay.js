import React from 'react';
import Styles from "./EPay.module.css";
import Image from "./EProfileComp/Image";
//import DropdownMenu from"./EProfileComp/DropdownMenu3"
import InputPay1 from "./EPayComp/Input1";
import InputPay2 from "./EPayComp/Input2";
import InputPay3 from "./EPayComp/Input3";
import InputPay4 from "./EPayComp/Input4";
import Button from "./EPayComp/Button1";
import {Link} from "react-router-dom";



class EPay extends React.Component {

    state = {
        cardHolderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        errors: {},
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    validateForm = () => {
        const errors = {};
        // Add validation logic here. For example:
        if (this.state.cardNumber.length !== 16) {
            errors.cardNumber = 'Card number must be 16 digits.';
        }
        // Validate cardholder name
        if (!this.state.cardHolderName.trim()) {
            errors.cardHolderName = 'Cardholder name is required.';
        }
        // Validate expiration date
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.state.expirationDate)) {
            errors.expirationDate = 'Expiration date must be in MM/YY format.';
        } else {
            // Further validation to check if the date is past
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() % 100; // Get last two digits
            const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based
            const [expMonth, expYear] = this.state.expirationDate.split('/').map(Number);
            if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
                errors.expirationDate = 'Expiration date cannot be in the past.';
            }
        }

        // Validate CVV
        if (!/^\d{3,4}$/.test(this.state.cvv)) {
            errors.cvv = 'CVV must be 3 or 4 digits.';
        }
        // Repeat for other fields as needed

        this.setState({ errors });
        return Object.keys(errors).length === 0; // Form is valid if there are no errors
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            console.log("Form is valid. Proceed with form submission.");
            // Proceed with form submission (e.g., API call)
        } else {
            console.log("Validation failed. Check errors.");
        }
    };

    render() {
        const { errors } = this.state;
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
                <form onSubmit={this.handleSubmit}>
                    <div className={Styles.label2}>Cardholder name*</div>
                    <InputPay1
                        name="cardHolderName"
                        value={this.state.cardHolderName}
                        onChange={this.handleInputChange}
                    />
                    {errors.cardHolderName && <div className={Styles.error2}>{errors.cardHolderName}</div>}
                    <div className={Styles.label3}>Card number*</div>
                    <InputPay2
                        name="cardNumber"
                        value={this.state.cardNumber}
                        onChange={this.handleInputChange}
                    />
                    {errors.cardNumber && <div className={Styles.error}>{errors.cardNumber}</div>}

                    <div className={Styles.label4}>Expiration Date*</div>
                    <InputPay3
                        name="expirationDate"
                        value={this.state.expirationDate}
                        onChange={this.handleInputChange}
                    />
                    {errors.expirationDate && <div className={Styles.error3}>{errors.expirationDate}</div>}

                    <div className={Styles.label5}>CVV*</div>
                    <InputPay4
                        name="cvv"
                        value={this.state.cvv}
                        onChange={this.handleInputChange}
                    />
                    {errors.cvv && <div className={Styles.error4}>{errors.cvv}</div>}

                    <Button type="submit" label="Pay $50.00" onClick={this.handleSubmit}></Button>
                </form>
                <div className={Styles.card}>
                    <Image></Image>
                    <div className={Styles.option1}><Link to="/EmployerProfile">Contact Info</Link></div>
                    <div className={Styles.option2}><Link to="/EmployerJobList">Job List</Link></div>
                    <div className={Styles.option3}><Link to="/EmployerCreateJob">Create Job</Link></div>
                    <div className={Styles.option4}><Link to="/EmployerPayment">Billing</Link></div>
                    <div className={Styles.option5}><Link to="/EmployerDelete">Delete Account</Link></div>
                    {/* <DropdownMenu></DropdownMenu>*/}
                </div>
            </div>
        );
    }
}

export default EPay;
