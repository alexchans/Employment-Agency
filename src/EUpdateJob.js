import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from 'react-router-dom';
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

const JobUpdateForm = () => {
    const [jobId, setJobId] = useState('');
    const [job, setJob] = useState({
        position: '', company: '', description: '', listOfQualifications: '',
        category: '', keyWords: '', firstName: '', lastName: '', email: '',
        startDate: '', endDate: '', startTime: '', endTime: '', wage: ''
    });
    const navigate = useNavigate();

    const fetchJobDetails = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/job/${id}`);
            setJob(response.data);
            toast.success('Job details loaded!');
        } catch (error) {
            console.error('Error fetching job details:', error.response);
            toast.error('Failed to load job details.');
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'jobId') {
            setJobId(e.target.value);
        } else {
            setJob({ ...job, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/api/job/${jobId}`, job, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Update response:', response);
            toast.success('Job updated successfully!');
            navigate('/EmployerJobList'); // Redirect to the job list or appropriate route
        } catch (error) {
            console.error('Error updating job:', error.response);
            toast.error(`Failed to update job: ${error.response?.data?.message || error.message}`);
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
            <div className={Styles.subheader}>Update Job</div>
            <Container>
                <FormWrapper>
                    <ToastContainer/>
                    <Form onSubmit={handleSubmit}>
                        <label>Job ID</label>
                        <Input type="text" name="jobId" value={jobId} onChange={handleChange}
                               placeholder="Enter Job ID"/>
                        <Button type="button" onClick={() => fetchJobDetails(jobId)}>Load Job</Button>
                        {/* Form fields to edit the job details */}
                        <label>Position Name</label>
                        <Input type="text" name="position" value={job.position} onChange={handleChange}/>
                        <label>Company Name</label>
                        <Input type="text" name="company" value={job.company} onChange={handleChange}/>
                        <label>Description</label>
                        <TextArea name="description" value={job.description} onChange={handleChange}/>
                        {/* Add other fields as necessary */}
                        <label>List of Qualifications</label>
                        <Input name="listOfQualifications" value={job.listOfQualifications} onChange={handleChange}/>
                        <label>Category</label>
                        <Input name="category" value={job.category} onChange={handleChange}/>
                        <label>Keywords</label>
                        <Input name="keyWords" value={job.keyWords} onChange={handleChange}/>
                        <label>First Name</label>
                        <Input name="firstName" value={job.firstName} onChange={handleChange}/>
                        <label>Last Name</label>
                        <Input name="lastName" value={job.lastName} onChange={handleChange}/>
                        <label>Email Address</label>
                        <Input name="email" value={job.email} onChange={handleChange}/>
                        <label>Start Date</label>
                        <Input name="startDate" value={job.startDate} onChange={handleChange}/>
                        <label>End Date</label>
                        <Input name="endDate" value={job.endDate} onChange={handleChange}/>
                        <label>Start Time</label>
                        <Input name="startTime" value={job.startTime} onChange={handleChange}/>
                        <label>End Time</label>
                        <Input name="endTime" value={job.endTime} onChange={handleChange}/>
                        <label>Wage</label>
                        <Input name="wage" value={job.wage} onChange={handleChange}/>

                        <Button type="submit">Update Job</Button>
                    </Form>
                </FormWrapper>
            </Container>
        </div>
    );
};

export default JobUpdateForm;
