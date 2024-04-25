import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { format } from 'date-fns';
import EmpPageTemp from "./components/EmpPageTemp";
import Styles from "./ECreateJob.module.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
    padding: 120px 20px 20px;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
    position: absolute;
    top: 170px;
    
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;

function JobForm() {
    const [job, setJob] = useState({
        position: '',
        company: '',
        description: '',
        listOfQualifications: '',
        category: '',
        keyWords: '',
        firstName: '',
        lastName: '',
        email: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        wage: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!job.position.trim()) newErrors.position = 'Position is required.';
        if (!job.company.trim()) newErrors.company = 'Company name is required.';
        if (!job.description.trim()) newErrors.description = 'Description is required.';
        if (!job.category.trim()) newErrors.category = 'Category is required.';
        if (!job.keyWords.trim()) newErrors.keyWords = 'Keywords are required.';
        if (!job.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!job.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!job.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(job.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!job.startDate) newErrors.startDate = 'Start date is required.';
        if (!job.endDate) newErrors.endDate = 'End date is required.';
        if (!job.startTime) newErrors.startTime = 'Start time is required.';
        if (!job.endTime) newErrors.endTime = 'End time is required.';
        if (job.wage === '') newErrors.wage = 'Wage is required.';
        else if (isNaN(job.wage)) newErrors.wage = 'Wage must be a number.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const formatDateAndTime = () => {
        return {
            ...job,
            startDate: format(new Date(job.startDate), 'yyyy-MM-dd'),  // Adjust date format to match Java LocalDate
            endDate: format(new Date(job.endDate), 'yyyy-MM-dd'),
            startTime: job.startTime + ':00',  // Adjust time format to include seconds
            endTime: job.endTime + ':00'
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.error('Validation failed', errors);
            return;
        }

        try {
            const formattedJob = formatDateAndTime();
            console.log('Submitting job:', JSON.stringify(formattedJob));  // Log the formatted job to console
            const response = await axios.post('http://localhost:8080/api/job/create', formattedJob, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Job submitted successfully', response.data);
            toast.success('Job submitted successfully!');
            setJob({
                position: '', company: '', description: '', listOfQualifications: '',  category: '', keyWords: '',
                firstName: '', lastName: '', email: '', startDate: '', endDate: '',
                startTime: '', endTime: '', wage: ''
            });
        } catch (error) {
            console.error('Failed to submit job:', error);
            toast.error(`Failed to submit job: ${error.response?.data || 'Server error'}`);
        }
    };

    return (
        <div>
            <EmpPageTemp/>
            <ul>
                <li><Link to="/EmployerProfile">Contact Info</Link></li>
                <li><Link to="/EmployerCreateJob">Create Job</Link></li>
                <li><Link to="/EmployerUpdateJob">Update Job</Link></li>
                <li><Link to="/EmployerJobList">Job List</Link></li>
                <li><Link to="/EmployerPayment">Billing</Link></li>
                <li><Link to="/EmployerChangePass">Change Password</Link></li>
                <li><Link to="/EmployerDelete">Delete Account</Link></li>
            </ul>
                <div className={Styles.subheader}>Create Job</div>
                {/*<div className={Styles.divider2}></div>*/}
                <Container>
                    <FormWrapper>
                        <ToastContainer/>
                        <Form onSubmit={handleSubmit}>
                            <label>Position Name</label>
                            <Input type="text" name="position" value={job.position} onChange={handleChange}
                                   placeholder="Position"/>
                            {errors.position && <ErrorMessage>{errors.position}</ErrorMessage>}

                            <label>Company Name</label>
                            <Input type="text" name="company" value={job.company} onChange={handleChange}
                                   placeholder="Company"/>
                            {errors.company && <ErrorMessage>{errors.company}</ErrorMessage>}

                            <label>Description</label>
                            <TextArea name="description" value={job.description} onChange={handleChange}
                                      placeholder="Description"/>
                            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}

                            <label>List of Qualifications</label>
                            <Input type="text" name="listOfQualifications" value={job.listOfQualifications} onChange={handleChange}
                                   placeholder="List of Qualifications"/>
                            {errors.listOfQualifications && <ErrorMessage>{errors.listOfQualifications}</ErrorMessage>}

                            <label>Category</label>
                            <Input type="text" name="category" value={job.category} onChange={handleChange}
                                   placeholder="Category"/>
                            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}

                            <label>Keywords</label>
                            <Input type="text" name="keyWords" value={job.keyWords} onChange={handleChange}
                                   placeholder="Keywords"/>
                            {errors.keyWords && <ErrorMessage>{errors.keyWords}</ErrorMessage>}

                            <label>Hiring Manager - First Name</label>
                            <Input type="text" name="firstName" value={job.firstName} onChange={handleChange}
                                   placeholder="First Name"/>
                            {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}

                            <label>Hiring Manager - Last Name</label>
                            <Input type="text" name="lastName" value={job.lastName} onChange={handleChange}
                                   placeholder="Last Name"/>
                            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}

                            <label>Email Address</label>
                            <Input type="email" name="email" value={job.email} onChange={handleChange}
                                   placeholder="Email"/>
                            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                            <label>Start Date</label>
                            <Input type="date" name="startDate" value={job.startDate} onChange={handleChange}
                                   placeholder="Start Date"/>
                            {errors.startDate && <ErrorMessage>{errors.startDate}</ErrorMessage>}

                            <label>End Date</label>
                            <Input type="date" name="endDate" value={job.endDate} onChange={handleChange}
                                   placeholder="End Date"/>
                            {errors.endDate && <ErrorMessage>{errors.endDate}</ErrorMessage>}

                            <label>Start Time</label>
                            <Input type="time" name="startTime" value={job.startTime} onChange={handleChange}
                                   placeholder="Start Time"/>
                            {errors.startTime && <ErrorMessage>{errors.startTime}</ErrorMessage>}

                            <label>End Time</label>
                            <Input type="time" name="endTime" value={job.endTime} onChange={handleChange}
                                   placeholder="End Time"/>
                            {errors.endTime && <ErrorMessage>{errors.endTime}</ErrorMessage>}

                            <label>Payment per Hour</label>
                            <Input type="number" name="wage" value={job.wage} onChange={handleChange}
                                   placeholder="Wage"/>
                            {errors.wage && <ErrorMessage>{errors.wage}</ErrorMessage>}

                            <Button type="submit">Submit Job</Button>
                        </Form>
                    </FormWrapper>
                </Container>
        </div>
    );
}

export default JobForm;
